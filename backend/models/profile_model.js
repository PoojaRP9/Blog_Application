const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    image: {
        type: String, // Assuming the image is stored as a URL or path
        required: true
    },
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'user' // Reference to the user who is following
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'user' // Reference to the user who is being followed
    }],
    description: {
        type: String,
        required: false
    }
});

const Profile = model('profile', profileSchema);

module.exports = Profile;
