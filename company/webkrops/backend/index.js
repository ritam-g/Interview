const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const reateLimit = require("express-rate-limit");
const AppError = require("./AppError");
const app = express();
const multer = require("multer")

const storage = multer.memoryStorage();

const upload = multer({
    storage
});
//! middleware
const limit = reateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many request from this IP, please try again after 15 minutes"
})


app.use(limit)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

mongoose.connect("mongodb://localhost:27017/populate_demo")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
userSchema.index({ email: 1 })
const User = mongoose.model("User", userSchema);

const postSchema = new mongoose.Schema({
    post_name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

const Post = mongoose.model("Post", postSchema);

app.get("/create", async (req, res, next) => {

    try {
        const user = await User.create({
            name: "Ritam",
            email: "ritam@gmail.com"
        });

        const post = await Post.create({
            post_name: "Learning Populate",
            // user: user._id
        });


        return res.json({
            user,
            post
        });
    } catch (error) {
        next(error)
    }
});
app.get('/get-post', async (req, res) => {
    const { page, limit } = req.query

    const skipNum = (page - 1) * limit
    const posts = await Post.find().skip(skipNum).limit(limit)
    return res.json(posts)
})

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    const hashPass = await bcrypt.hash(password, 10)

    const user = await User.create({
        name,
        email,
        password: hashPass
    })
    const AcessToken = jwt.sign({ id: user._id }, "sec", { expiresIn: "15m" })
    const RefreshToken = jwt.sign({ id: user._id }, "sec", { expiresIn: "15d" })

    res.cookie("AcessToken", AcessToken, {
        httpOnly: true
    })
    res.cookie("RefreshToken", RefreshToken, {
        httpOnly: true
    })
    console.log(user, AcessToken, RefreshToken)
    return res.json({
        AcessToken,
        RefreshToken,
        user
    })

})
app.get("/posts", async (req, res) => {

    const posts = await Post.find().populate("user")

    return res.json(posts);
});
app.post("/uplode", upload.single("image"), async (req, res) => {
    console.log(req)
    return res.json({
        data:req.file,
        buffer:req.file.buffer
    })
})
app.get("/call/:id", async function (req, res) {
    const params = req.params
    const query = req.query

    return res.json({
        params,
        query
    })
})
app.get("/search", async (req, res, next) => {
    try {
        const search = req.query.serch

        if (!search) {
            throw new AppError("Search is required", 400)
        }
        console.log(typeof search);
        const data = await User.find({
            name: {
                $regex: search,
                $options: "i"
            }
        })

        return res.json(data)
    } catch (error) {
        console.log(error);
        next(error)
    }
})

app.use((err, req, res, next) => {
    return res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})
app.listen(3000, () => {
    console.log("Server running on port 3000");
});