import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import z from "zod";
import AppError from "./src/errorMiddleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());

/* ---------------- DB CONNECT ---------------- */
mongoose
  .connect(process.env.mongo)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("DB Error:", err));

/* ---------------- SCHEMA ---------------- */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: String,
    bio: String,
  },
  {
    timestamps: true,
    capped: {
      size: 100000
    }
  }
);

/* ---------------- INDEXING ---------------- */
userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema);

//zod
const userZodSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})
/* ---------------- CHANGE STREAM (WATCH) ---------------- */
const changeStream = User.watch()

changeStream.on('change', (change) => {
  console.log(`Change detected: `, change.operationType)
})

/* ---------------- CREATE USER ---------------- */
app.post("/users", async (req, res) => {
  try {
    const { success } = userZodSchema.safeParse(req.body)

    if (!success) {
      return res.status.json({
        success: false,
        message: "please give right data"
      })
    }
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ---------------- GET USERS (PAGINATION) ---------------- */
app.get("/users", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const users = await User.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      page,
      limit,
      data: users,
    });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

/* ---------------- UPDATE USER ---------------- */
app.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ---------------- DELETE USER ---------------- */
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ---------------- AGGREGATION EXAMPLE ---------------- */
app.get("/users/stats", async (req, res) => {
  try {
    const data = await User.aggregate([
      {
        $group: {
          _id: "$gender",
          totalUsers: { $sum: 1 },
        },
      },
    ]);

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//put
app.put("/users/:id", async (req, res) => {
  const { id } = req.params
  const user = User.findOneAndUpdate(id, req.body, { new: true })
  return res.status(201).json({
    user,
    sucess: true
  })
});

//patch
app.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

// error middleware
app.get('/test', async (req, res, next) => {
  try {
    throw new AppError("you hit test route ", 500)
  } catch (error) {
    console.log(error.message)
    next(error)
  }
})
app.use((err, req, res, next) => {
  return res.status(err.statusCode).json({
    err: err.message
  })
})
/* ---------------- SERVER ---------------- */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});