var express = require("express");
var app = express();

//var string = "3";
//if(3 === Number(string)){
//    console.log("true");
//}

app.get("/",function(req,res){
    
    res.send("h");
    
})

app.get("/bye",function(req,res){
    res.send("see ya~");
})

app.get("/dog",function(req,res){
    console.log("entered /dog page~")
    res.send("meow");
})

/* 
    route params are used to match the url that 
    you want to get in and 
    only matches the same pattern that you defined
    using ":"
*/
app.get("/new/:name/:id/:birth",function(req,res){
    res.send("welcome! to a new one pattern");
    console.log(req.params);
    console.log(req.params.name);
});

app.get("*",function(req,res){
    res.send("wrong website location!");
})

// start server
app.listen(3000,function(){
    console.log("i am listening");
}  );