const express = require("express");
const router = express.Router();
const { userSignup, userLogin } = require("../controllers/user");

// POST /signup - User signup
router.post("/signup", userSignup);

// POST /login - User login
router.post("/login", userLogin);

module.exports = router;
