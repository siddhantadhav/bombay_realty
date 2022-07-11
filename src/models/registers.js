const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }
})

const Register = new mongoose.model("Register", user);

module.exports = Register;