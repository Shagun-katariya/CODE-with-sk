const mongoose = require('mongoose')

const Contact = mongoose.Schema({
    Email:String,
    contact_number:Number,
    query:String
});

module.exports=mongoose.model("contacts", Contact)