const mongoose=require('mongoose');
require('dotenv').config();
const url=process.env.URL;
const Connect=()=>{
    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("db is connected");
    })
    .catch((error)=>{
        console.log("connection failed");
    })
}

module.exports=Connect;