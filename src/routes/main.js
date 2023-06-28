const express = require('express');
const routes = express.Router()
const Detail = require('../models/Details')
const Slider = require('../models/Slider')
const service = require('../models/service')
const Contact = require('../models/Contact')
const Tutorial = require('../models/Tutorial')
const Note = require('../models/Note')
const Signup = require('../models/Signup')
const Login = require('../models/Login')
const My_Gear = require('../models/My_Gear')
const userform = require('../models/Userform')
const Blog = require('../models/Blog')


routes.get("/", async(req, res)=>{
    const details = await Detail.findOne({"_id":"64943acf51b54ffbb07a6400"})


    res.render("index", {
        details:details,
    })
})

routes.get("/Blog", async(req, res)=>{
    const details = await Detail.findOne({"_id":"64943acf51b54ffbb07a6400"})
    const blog= await Blog.find()
    res.render("Blog", {
        details:details,
        blog:blog,
    })
})

routes.get("/Work_With_Us", async(req, res)=>{
    const details = await Detail.findOne({"_id":"64943acf51b54ffbb07a6400"})
    res.render("Work_With_Us", {
        details:details,
    })
})



routes.get("/My_Gear", async(req, res)=>{
    const details = await Detail.findOne({"_id":"64943acf51b54ffbb07a6400"})
    const my_Gear= await My_Gear.find()
    res.render("My_Gear", {
        details:details,
        My_Gear:my_Gear
    })
})



routes.get("/Login", async(req, res)=>{
    res.render("Login")
})

routes.get("/Signup", async(req, res)=>{
    res.render("Signup")
})

routes.post("/Signup", async(req, res)=>{
    const details = await Detail.findOne({"_id":"64943acf51b54ffbb07a6400"})
    const data = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    const ask = await Signup.findOne({email:req.body.email})
    if(ask != null && ask.email===req.body.email)
    {
        res.send("Please Signup with different email id beacuse this id is already exist")
    }
    else
    {
        await Signup.insertMany([data])
        res.render('index',{
            details:details,
            authenticated: true
        })
    } 
})

routes.post("/Login", async(req, res)=>{
    const details = await Detail.findOne({"_id":"64943acf51b54ffbb07a6400"})
    try {
        const check = await Signup.findOne({email:req.body.email})
        if(check.password===req.body.password)
        {
            res.render("index",{
                details:details,
                authenticated: true
            })
        }
        else
        {
            res.send("wrong password")
        }
    } catch {
        res.send("wrong details")
        
    }
    
})



routes.get("/Courses", async(req, res)=>{
    const details = await Detail.findOne({"_id":"64943acf51b54ffbb07a6400"})
    const services = await service.find()
    res.render("Courses", {
        details:details,
        service:services
    })
})
routes.get("/Tutorial", async(req, res)=>{
    const details = await Detail.findOne({"_id":"64943acf51b54ffbb07a6400"})
    const tutorials = await Tutorial.find()

    res.render("Tutorial", {
        details:details,
        tutorial:tutorials
    })
})
routes.get("/Notes", async(req, res)=>{
    const details = await Detail.findOne({"_id":"64943acf51b54ffbb07a6400"})
    const notes = await Note.find()

    res.render("Notes", {
        details:details,
        note:notes
    })
})


routes.post("/process-contact-form", async(req, res)=>{
    try {
        const data = await Contact.create(req.body)
    } catch (error) {
        console.log(error)
    }
    res.redirect("/")
})

routes.post("/userform", async(req, res)=>{
    try {
        await userform.create(req.body)
    } catch (error) {
        console.log(error)
    }
    res.redirect("/")
})




module.exports = routes