var express = require("express");
var app = express();


// root route
app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!");
})

// route pattern: /speak/:animal
app.get("/speak/:animal",function(req,res){
    var animal = req.params.animal;
    var objects = {
        pig: "'Oink'",
        cow: "'Moo'",
        dog: "'Woof wooof'",
        cat: "'Mmmewow'"
    }
    var transfer = animal.toLowerCase();
    if( objects[transfer] != undefined){
        res.send("The "+animal+" says "+objects[animal]);
    }
    else{
        res.send("There is such animal '"+ animal+"' in the zoo");
    }
    

    //if(animal === "pig"){
    //    res.send("The pig says 'Oink'");
    //}

    //else if (animal === "cow"){
    //    res.send("The cow says 'Moo'");
    //}

    //else if (animal === "dog"){
    //    res.send("The dog says 'Woof Woof'");
    //}
    //else {
    //    res.send(req.params);
    //}
    
})


// route pattern for /repeat...
app.get("/repeat/:output/:times", function(req,res){
    var output = req.params.output;
    var times = Number(req.params.times);

    var result = "";
    if(times>0){
        for(var i = 0; i < times-1; i++){
            result += output;
            result += " ";
        }
        result += output;
    }
   


    res.send(result);
});



//visit any other page
app.get("*",function(req,res){
    res.send("Sorry, page not found...What are you doing with your life?");
})






//start server
app.listen(3000,function(){
    console.log("Listening on port 3000...");
})