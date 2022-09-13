//jshint esversion:6
const express = require("express");
const path = require("path");
const app = express();


    
app.listen(3002,function(){
    console.log("Server has started at port 3002");
});
app.use(express.static("Public"));

app.get('/',function(req,res){

 
//    express.static());
   res.sendFile(__dirname + '/Public/index.html');
})

app.get('/createAccount',(req,res)=>{
    console.log(__dirname + '/src/CSS/index.css');
    res.sendFile(__dirname + '/Public/createAccount.html');
})

app.get('/Services',(req,res)=>{
    res.sendFile(__dirname + '/Public/Services.html');
})

app.get('/FAQ',(req,res)=>{
    res.sendFile(__dirname + '/Public/FAQ.html');
})

app.get('/mainpage',(req,res)=>{
    console.log("Welcome to Spareo Motors");
    res.sendFile(__dirname + '/Public/mainpage.html');
})