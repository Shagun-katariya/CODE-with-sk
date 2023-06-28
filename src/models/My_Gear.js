const mongoose = require('mongoose')

const My_Gear = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText1:String,
    link1:String,
});

module.exports=mongoose.model("My_Gear", My_Gear)