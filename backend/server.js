import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
const app = express()
const PORT = 3000
app.use(express.json())

mongoose.connect(process.env.mongo)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err))
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
      default: "",
    },
    interests: [
      {
        type: String,
        trim: true,
      },
    ],
    profileImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);


app.get('/:limit/:page', async(req, res) => {
    let { limit, page } = req.params
    limit = parseInt(limit)
    page = parseInt(page)
    try{
        const users=await User.find().skip(page==0?0*limit: (page-1)*limit).limit(limit)
        res.json(users)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
    
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})