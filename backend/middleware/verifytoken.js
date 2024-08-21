const jwt = require("jsonwebtoken");
// const { ResponseFormat } = require("../Services/responseFormat");
const User = require("../models/user_model");
// const { Employee } = require("../Models/employee.model");
// const Employer = require("../Models/employer.model");

// Middleware function to verify user tokens
async function verifyToken(request, response, next) {
    try {
        // Extract the token from the "Authorization" header
        const bearerHeader = request.headers['authorization'];
        // console.log("user",bearerHeader);
        if (typeof bearerHeader !== 'undefined') {
            // Split the "Authorization" header to get the token part
            const token = bearerHeader.split(" ")[1];

            // Verify the token using the secret key
            const tokenVerify = await jwt.verify(token, "Nodejs_secret_key");

            if (tokenVerify) {
                // Find the user based on the decoded token
                const user = await User.findOne({ _id: tokenVerify._id }, { password: 0 });

                // Attach the user information to the request object
                request.user = user;

                next();
            } else if (err.name === 'TokenExpiredError') {
                return response.status(401).json({ message: 'Token has expired. Please log in again.' });
            }else{
                // If the token is not valid, throw an error
                throw "Invalid Token";
            }
        } else {
            // If the "Authorization" header is not found, throw an error
            throw "Invalid Token";
        }
    } catch (error) {
        console.log(error);
        // Send an error response using the ResponseFormat service
        response.send({error, message: "Error Occurred in Verifying Token"});
    }
}

module.exports = verifyToken;