//initial setup
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressSanitizer = require('express-sanitizer');

//app config
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

/*database config and connection

    blogSchema is a schema that has several attributes:
    String title, String image, String body, Date created
    the model of blogSchema is used for collection of all blogs
*/
mongoose.connect("mongodb://localhost:27017/blog_app",{useNewUrlParser: true, useUnifiedTopology: true});
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
//now modeling this schema
var Blog = mongoose.model("Blog", blogSchema);

//Blog.create(
//    {
//        title: "a blog title",
//        image: "a link to a image",
//        body: "this is the body of this blog",
//    });


//Restful routes

// 1-INDEX - home page to display all blogs
app.get("/",function(req,res){
    //redirect to /blogs
    res.redirect("/blogs");
});

app.get("/blogs",function(req,res){
    //get all data objects from database
    Blog.find({},function(err,blogs){
        if(err){
            console.log("There is an error for display all blogs!");
            console.log(err);
        }

        else{
            console.log("displaying all blogs");
            //console.log(blogs);
            res.render("index.ejs",{blogs: blogs});
        }
    });
});

// 2-NEW ROUTE
app.get("/blogs/new",function(req,res){
    // render a form to create a new blog
    res.render("new.ejs");
});

// 3-CREATE ROUTE
app.post("/blogs",function(req,res){
    //middleware
    req.body.blog.body = req.sanitize(req.body.blog.body);
    
    //create blog- fetch data from form
    Blog.create(req.body.blog,function(err,newBlog){
        if(err){
            res.render("new.ejs");
        }
        else{
            console.log("create successfully!");
            res.redirect("/blogs");
        }
    });
});

// 4-SHOW ROUTE
app.get("/blogs/:id",function(req,res){
    //Both two below are find to do the find

    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){
            res.redirect("/blogs");
            console.log("fingding failed");
        }
        else{
            console.log("find one blog!");
            res.render("show.ejs",{blog: foundBlog});
        }
    });

    
    //Blog.findOne({_id:req.params.id},function(err,foundBlog){
    //    if(err){
    //        res.redirect("/blogs");
    //        console.log("fingding failed");
    //    }
    //    else{
    //        console.log("find one blog!");
    //        res.render("show.ejs",{blog: foundBlog});
    //    }
     
    //});
});

// 5-EDIT ROUTE
app.get("/blogs/:id/edit",function(req,res){
    //fetch the object with _id from db
    Blog.findOne({_id:req.params.id},function(err,foundBlog){
        if(err){
            res.redirect("/blogs");
            console.log("Error: cannot get object by ID from db");
        }
        else {
            console.log("Fing object successfully");
            res.render("edit.ejs",{blog: foundBlog});
        }
    });
    
});

// 6-UPDATE ROUTE
app.put("/blogs/:id",function(req,res){
    //middleware
    req.body.blog.body = req.sanitize(req.body.blog.body);
    //update the date
    req.body.blog['created'] = new Date();
    console.log(req.body.blog);

    Blog.updateOne({_id:req.params.id},req.body.blog,function(err,updatedBlog){
        if(err){
            res.redirect("/blogs?update=false");
        }
        else{
            console.log(updatedBlog);
            res.redirect("/blogs/"+req.params.id);
        }
    });
    //Alternative:
    //Blog.findByIdAndUpdate(req.params.id, req.body.blog,function(re))
});

// 7-DELETE ROUTE
app.delete("/blogs/:id",function(req,res){
    Blog.deleteOne({_id:req.params.id},function(err,deleted){
        if(err){
            console.log("deleted: false");
            res.redirect("/blogs?delete=false");
        }
        else{
            console.log(deleted);
            res.redirect("/blogs?delete=true");
        }
    })
});


//start the server
app.listen(3000,function(){
    console.log("listening on port 3000.....");
})