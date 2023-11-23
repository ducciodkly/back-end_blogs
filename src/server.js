const express = require("express"),
app = express(),
path = require("path"),
hbs = require("hbs"),
collection = require("./app/models/user"),
bcrypt = require("bcrypt")
const route = require('./routes')
const methodOverride = require('method-override');

const db = require('./config/db');

db.connect();

// const passport=  require("passport")
// const initializePassport  = require("./password-config")

// initializePassport(
//     passport,
//     email => users.find(user => user.email === email),
//     id => users.find(user => user.id === id)
//     )

const templatePath = path.join(__dirname, 'resources', 'views')
const viewsPath = path.join(__dirname,'resources','scss')

const publicPath = path.join(__dirname,'public')


app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:true}))
app.use(express.static(publicPath))
app.use(express.static(viewsPath))
app.use(methodOverride('_method'))



route(app)
app.listen(3000,()=>{
    console.log("port connected");
})

