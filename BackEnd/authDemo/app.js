const express = require('express'),
        app   = express(),
     mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose');     //methods for user authentication
    User = require('./models/user.js');


/* connect to database */
mongoose.connect("mongodb://localhost:27017/authDemo",{useNewUrlParser: true, useUnifiedTopology: true});


/* app settings ... */
//app.set('view engine', 'ejs');
app.use(require('express-session')({
    /*
        these are regular patterns that're always to be followed where
        secret is like the Key to this session to decode and encode
    */
    secret: "Key is at here",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize()); //tell app to use package passport
app.use(passport.session());    //tell app to use session


/* encoding and decoding */
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


/* ============== Set Routes ====================*/
app.get('/secret',function(req,res){
    res.render('secret.ejs');
});
app.get('/', function(req,res){
    res.render('home.ejs');
});

/* server listening on port 3000 */
app.listen(3000,function(){
    console.log("listening on port 3000.....");
})