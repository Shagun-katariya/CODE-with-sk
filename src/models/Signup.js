const mongoose = require('mongoose')

const Signup = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports=mongoose.model("signup", Signup)