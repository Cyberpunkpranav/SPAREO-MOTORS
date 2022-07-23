//jshint esversion:6
const express = require("express");
const path = require("path");
const app = express();


    
app.listen(3000,function(){
    console.log("Server has started at port 3000");
});
app.use(express.static("Public"));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/Public/index.html'));
})

