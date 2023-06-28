const express = require('express')
const app = express();
const hbs = require('hbs')
const bodyParser = require('body-parser')
const connectDB = require('./db/connect');
const env = require('dotenv').config();
const routes = require('./routes/main')
const Detail = require('./models/Details')
const Slider = require('./models/Slider')
const service = require('./models/service')
const tutorial = require('./models/Tutorial')
const note = require('./models/Note')
const My_Gear = require('./models/My_Gear')
const blog = require('./models/Blog')

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(express.static('./public'));
app.use('', routes) 

//template engine 
//here we are setting view engine as hbs
//here we are setting view as folder name view
app.set('view engine', 'hbs')
app.set("views", "views")
//if we want to change navbar in every page so here
//we are using hbs to solve this in efficent time
hbs.registerPartials("views/partials") 


const port = process.env.PORT || 5000; 
   
const start = async () => { 
    try {
        await connectDB(process.env.MONGO_URI);
        /*blog.create([{
            date: "2023-06-27",
            title: "50 Linux Commands You Should Know",
            description: "Unleash your Linux prowess with these 50 must-know commands. From file manipulation to network configuration, master the essentials for efficient system management. Boost productivity and navigate the Linux operating system like a pro. Perfect for beginners and seasoned users alike.",
            link:"https://www.codewithharry.com/blogpost/50-linux-commands/",
            linkText:"click here"
        }  
        ])*/
        /*My_Gear.create([
            {
                icon: "https://www.codewithharry.com/my-gear/",
                title:"Canon EOS 80D",
                description:"I bought it back in 2018 for my US trip and have been using it since then. If you want to buy this in 2022, go for the EOS 90D (Same camera - Updated version). This is an amazing camera given that its still working exactly like it was working when I bought it. I use it for my YouTube tutorial videos as well. I use a USB cable, EOS utility software to make videos.",
                linkText1:"View on Amazon",
                link1:"https://www.amazon.in/Canon-Digital-Camera-SanDisk-Extreme/dp/B088RW9XVX?th=1&linkCode=sl1&tag=dpcode7017m07-21&linkId=d09f8e20fa70b87f0c48370ddf06de6c&language=en_IN&ref_=as_li_ss_tl",
            },
        ])*/
        /*note.create([
            {
                icon: "fab fa-accusoft",
                title:"C++ course",
                description:"Download notes here",
                linkText1:"PDF Notes",
                link1:"https:/www.google.com",
            },
        ])*/
        /*tutorial.create([
            {
                icon: "fab fa-accusoft",
                title:"C++ Tutorial",
                linkText1:"start learning",
                link1:"https:/www.google.com",
            },
        ]);*/
        /* service.create([
               {
                   icon: "fab fa-accusoft",
                   title:"provide best service",
                   description:"we provide courses that helps to student",
                  linkText:"check",
                   link:"https:/www.google.com",
               },...
           ])*/
        /*Slider.create([
            {
                title:'Javascript',
                subTitle:'Famous programming language',
                imageUrl:'images/1.jpeg'
            },...
        ])*/
        /*Detail.create({
            brandName: "Code With SK",
            brandIconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr64qKf-muHSYU2bm_PfoSGPE0DfSuwiNR_A&usqp=CAU",
            links:
            [
                {
                    label:"Home",
                    url:"/"
                },......
            ]
        })*/
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error); 
    } 
  };
  
  start();