var express = require("express");
var app = express();


//let express know public can be used
app.use(express.static("public"));

app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("home.ejs");
    //res.send("<h1>Welcome to the Homepage</h1>");
});

app.get("/search",function(req,res){
    console.log("entered searcph age!");
    var object = { 
        name: "ruixin" ,
        id: 823 ,
        array : [1,2,3]
    }

    res.render("find.ejs",object);
    
    
})



app.listen(3000,function(){
    console.log("server is listening on port 3000...");
});