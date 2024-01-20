const express = require('express');
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const connectDB = require('./connect');
const path = require('path');

const app =  express();

const PORT = 8001;

connectDB().then(()=> console.log("mongodb connect..")).catch((err)=> console.log(err) );

app.set("view engine" , "ejs");
app.set("views" , path.resolve('./views')) ;

app.use(express.json()); 
app.use( express.urlencoded({ extended: false })); 

app.use("/url" , urlRoute);   

app.use("/" , staticRoute );

 


app.listen(PORT ,()=> console.log(`Server Start at ${PORT}`) )