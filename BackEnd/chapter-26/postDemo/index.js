var express = require("express");
var app = express();
var bodyParse = require("body-parser");

///////////////////mongoose setup///////////////////////////////////

//1. include mongoose package
var mongoose = require('mongoose');

//2-prefix: before you connect to the database, make sure make "mongod" running in terminal
//2. connect to the database(it will create if not exists yet)
mongoose.connect("mongodb://localhost:27017/post_app",{useNewUrlParser: true, useUnifiedTopology: true});

//3. define schemea(like a pattern)
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//4. create the model using the schema, and it will creat the "posts" collection for us
var Post = mongoose.model("Post",postSchema);

//////////////mongoose setup ends///////////////////////////


//let app.use() work
app.use(express.static("public"));
app.use(bodyParse.urlencoded({extended:true}));


//routes
app.get("/",function(request,response){
    Post.find({},function(err,posts){
        if(err){
            console.log("there is an error with showing all posts...");
            console.log(err);
        }
        else{
            //console.log(posts);
            //console.log({posts:posts});
            response.render("home.ejs",{posts:posts});
            
        }
    });
    
});


app.post("/uploadPost",function(request,response){
    //console.log(request.body);

    //create the new object for the new post request
    //and add it to the posts
    const title=request.body.postTitle.toString();
    const content=request.body.postContent.toString();
    var newObj = new Post({
        title: title,
        content: content
    })

    //put it into the database
    //console.log(typeof newObj);
    //newObj.save(function(err,newOne){
    //    if(err){
    //        console.log("there is an error...");
    //        console.log(err);
    //        response.redirect("/?adding=fail");
    //    }
    //    else{
    //        // newOne in here refers to the one that already came back from database
    //        console.log(newOne);
    //        response.redirect("/?adding=success");
    //    }
    //})


    ////anther way of doing that
    Post.create(newObj,function(err,newPost){
        if(err){
            console.log("there is an error for create()...");
            console.log(err);
            response.redirect("/");
        }
        else{
            // newOne in here refers to the one that already came back from database
            console.log(newPost);
            response.redirect("/");
        }
    });

    
});

//delete a post
app.post("/deletePost",function(request,response){
    console.log("\nTry to delete this post...");
    console.log(request.body.title+" "+request.body.content+"\n************************\n");
    const title = request.body.title.toString();
    const content = request.body.content.toString();
    response.redirect("/");
    Post.deleteOne({title:title},function(err,deleted){
        if(err){
            console.log("\ndeleting post failed!");
            console.log(err);
            
            //console.log("Moving back to home page!\n");
        }
        else{
            console.log("\npost was deleted successfully!");
            console.log(deleted);
            
            //console.log("Moving to home page!\n");
        }
    });
    
    
});
//start server
app.listen(3000,function(){
    console.log("Listening on port 3000 ...");
});