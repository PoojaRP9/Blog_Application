const express = require("express");
const router = express.Router();
const { userSignup, userLogin } = require("../controllers/user");
const { addpost, getPosts } = require("../controllers/post_controller");
const verifyToken = require("../middleware/verifytoken")


// POST /signup - User signup
router.post("/signup", userSignup);

// POST /login - User login
router.post("/login", userLogin);

router.route('/post').post(verifyToken,addpost);
// router.post("/post",addpost);
router.route('/post').get(verifyToken,getPosts);
// router.get("/post",getPosts)

module.exports = router;
