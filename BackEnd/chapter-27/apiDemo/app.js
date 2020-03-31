//var request = require("request");

//request('https://jsonplaceholder.typicode.com/posts/1',function(error, response, body){
//    var data = JSON.parse(body);
//    console.log(data.body);
//});

var express = require("express");
var app = express();
var request = require("request");


app.get("/",function(req,res){
    res.render("home.ejs");
})

app.get("/movieLists",function(req,res){
    var url = "http://www.omdbapi.com/?s=" + req.query.search + "&apikey=thewdb";
    
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            
            var object = {
                field_one : data
            }
            console.log(data);
            console.log("*****************");
            console.log(object);
            res.render("movieLists.ejs",data);
        }
    });
})
//start server
app.listen(3000, function(){
    console.log("Listening on port 3000 ...");
});