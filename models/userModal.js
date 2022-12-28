// const mongoose = require('mongoose');

const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
});

module.exports = mongoose.model("Users", userSchema);