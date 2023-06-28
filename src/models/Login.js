const mongoose = require('mongoose')

const Login = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports=mongoose.model("login", Login)