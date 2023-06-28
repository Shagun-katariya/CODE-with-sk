const mongoose = require('mongoose')

const Note = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText1:String,
    link1:String,
});

module.exports=mongoose.model("Note", Note)