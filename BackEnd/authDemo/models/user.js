const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');   //all methods from this package will be used in userschema later on
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

/*
    "passportLocalMongoose" has methods like:
    serializeUser and deserializeUser
*/
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);