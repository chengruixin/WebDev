var express = require('express');
var app = express();


app.set("view engine","ejs");

//routes:
app.get("/",function(req,res){
    //res.send("welcome to the homepage");
    res.render("landing");
})

app.get("/campgrounds",function(req,res){
    var campgrounds = [
        {name: "",image:""},
        {name: "",image:""},
        {name: "",image:""}

    ];
})

app.listen(3000,function(){
    console.log("The yelpcamp server has started on port 3000...");
})