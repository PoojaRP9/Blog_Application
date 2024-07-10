const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user_model");


async function userSignup(req, res) {
    console.log("req.method",req.method);
    if (req.method === "POST") {
        try {
            console.log("login");
            const data = req.body;
            console.log(data);
            // Hash the password before saving the user
            const hashedPassword = await bcrypt.hash(data.password, 10);

            const user = await User.create({
                name: data.name,
                email: data.email,
                contact: data.contact,
                password: hashedPassword
            });

            res.status(201).json({ message: "User created successfully", user: user });

        } catch (error) {
            res.status(500).json({ message: "Internal server error", error: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}


async function userLogin(req, res) {
    if (req.method === "POST") {
        try {
            const data = req.body;
            const user = await User.findOne({ email: data.email });

            if (user && await bcrypt.compare(data.password, user.password)) {
                const token = jwt.sign({ _id: user._id }, "Nodejs_secret_key", { expiresIn: '1h' });
                res.cookie('token', token, { httpOnly: true });

                res.status(200).json({ message: "Login successful", token: token });
            } else {
                res.status(401).json({ message: "Invalid email or password" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

module.exports = { userSignup, userLogin }
