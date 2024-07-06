const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/',(req,res)=>{
    console.log("GET request");
    res.end(JSON.stringify({name:'aryan'})); 
});

app.listen(process.env.PORT,()=>{
    console.log(`now listening for requests`)
})