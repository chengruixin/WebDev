var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/data_asso_demo",{useNewUrlParser: true, useUnifiedTopology: true});

//schemas for users and blogs
var blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog",blogSchema);

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    blogs: [blogSchema]
    /*
    blogs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }]
    */
});
var User = mongoose.model("User",userSchema);

//User.create(
//    {
//        name: "Ruixin Cheng",
//        email:"chengruixin2018@gmail.com"
//    },function(err,created){
//    if(err){
//        console.log("failed to add a new object to database");
//    }
//    else{
//        console.log(created);
//    }
//});

//User.findById("5e6513283ad5e90c1e839d17",function(err,found){
//    if(err){
//        console.log("Failed to find this Id: " + "5e6513283ad5e90c1e839d17");
//    }
//    else{
        
//        Blog.create({
//            title:"a new blog",
//            content:" no idea about content"
//        },function(err,created){
//            if(err){
//                console.log("Failed to create a new blog");
//            }
//            else{
//                found.blogs.push(created);
//                found.save(function(err,saved){
//                    if(err){
//                        console.log("Failed to save");
//                    }
//                    else{
//                        console.log(saved);
//                    }
//                })
//            }
//        });
        
//    }
//})

//User.findOne({name:"Ruixin Cheng"}).populate("blogs").exec(function(err,user){

//})
User.findOne({name:"Ruixin Cheng"},function(err,user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});