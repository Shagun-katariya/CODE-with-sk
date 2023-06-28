const mongoose = require('mongoose')

const Tutorial = mongoose.Schema({
    icon:String,
    title:String,
    linkText1:String,
    link1:String,
});

module.exports=mongoose.model("tutorial", Tutorial)