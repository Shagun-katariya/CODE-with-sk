const mongoose = require('mongoose')

const Service = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText1:String,
    link1:String,
});

module.exports=mongoose.model("services", Service)