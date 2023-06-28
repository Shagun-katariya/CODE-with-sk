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

app.set('view engine', 'hbs')
app.set("views", "views")

hbs.registerPartials("views/partials") 


const port = process.env.PORT || 5000; 
   
const start = async () => { 
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
      console.log(error); 
    } 
};
  
start();