const express = require("express");
const mongoose = require("mongoose");

const app = express();

//! middleware


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


mongoose.connect("mongodb://localhost:27017/populate_demo")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});
userSchema.index({ email: 1 })
const User = mongoose.model("User", userSchema);

const postSchema = new mongoose.Schema({
    post_name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

const Post = mongoose.model("Post", postSchema);

app.get("/create", async (req, res) => {

    const user = await User.create({
        name: "Ritam",
        email: "ritam@gmail.com"
    });

    const post = await Post.create({
        post_name: "Learning Populate",
        user: user._id
    });

    return res.json({
        user,
        post
    });
});

app.get("/posts", async (req, res) => {

    const posts = await Post.find().populate("user")

    return res.json(posts);
});

app.get("/call/:id", async function (req, res) {
    const params=req.params
    const query=req.query

    return res.json({
        params,
        query
    })
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