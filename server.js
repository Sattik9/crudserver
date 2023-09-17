const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const Connect=require('./Config/db');
require('dotenv').config();
const crudRouter=require("./Route/crudRoute");
const app=express();


//*****bodyparser for form data connection*//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//*****for views*//
app.set('view engine','ejs');
app.set('views','views');

//Crud Router//
app.use(crudRouter);

//*****for mongoose*//
Connect();
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}/`);
})