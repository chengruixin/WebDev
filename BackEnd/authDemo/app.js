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
app.use(bodyParser.urlencoded({extended: true}));

/* encoding and decoding */
passport.use(new localStrategy(User.authenticate()));// it makes sure passport.authenticate work as a middleware
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


/* ============== Set Routes ====================*/
app.get('/', function(req,res){
    res.render('home.ejs');
});


app.get('/secret', isLoggedIn,function(req,res){
    res.render('secret.ejs');
});

//auth routes
app.get('/register', function(req,res){
    res.render('register.ejs');
});

app.post('/register', function(req,res){
    //res.send('registering...' + " username: " + req.body.username + " password: " + req.body.password + "params: "+ req.query.hei);
    let username = req.body.username;
    let password = req.body.password;
    //use User to register a new user, pass password as second arg as it will be encoded by this way
    User.register(new User({username: username}), password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        else{
            console.log(err);
            console.log(user);
            //passport.authenticate is to log in the user
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secret");
            });
        }
    });
});

//login
app.get('/login', function(req,res){
    res.render('login.ejs');
});
// middleware: passport.authenticate
// handler : function(req,res)()
app.post('/login', passport.authenticate("local", {     //middleware it will automatically extract values 
    successRedirect: "/secret",                         //from the submitted form and compare them with the ones 
    failureRedirect: "/login?fail=true"                 //stored in database
}) ,function(req,res){  //handler
    
});

//logout
app.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
    //passport.logout();
})

function isLoggedIn(req,res, next){
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect("/login");
}
/* server listening on port 3000 */
app.listen(3000,function(){
    console.log("listening on port 3000.....");
})