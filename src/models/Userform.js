const { urlencoded } = require('body-parser');
const mongoose = require('mongoose')

const Userform = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    resume: String,
});

module.exports=mongoose.model("userform", Userform)