const mongoose = require('mongoose')

const Blog = mongoose.Schema({
    date: String,
    title:String,
    description:String,
    link:String,
    linkText:String,
});

module.exports=mongoose.model("blogs", Blog)