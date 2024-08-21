const Post = require("../models/post_model")
async function addpost(req, res) {

    if (req.method === "POST") {
        const data = req.body;
        console.log("fetch data ",data);
        console.log(req.user);
        const post = await Post.create({
            name: data.name,
            title: data.title,
            content: data.content,
            user: req.user._id,
        });

        console.log(post)
        res.status(201).json({ message: "post added"});
    }
    else {
        res.status(201).json({ message: "error"});
    }

}

async function getPosts(req, res) {
    try {
        const posts = await Post.find().populate('user');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error });
    }
}

module.exports= {addpost,getPosts};