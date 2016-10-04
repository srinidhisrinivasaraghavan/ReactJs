const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrtegy = require('passport-local');

const localOptions = {usernameField : 'email'};
const localLogin = new LocalStrtegy(localOptions, function(email, password, done){
  //verify username and pwd
  //If correct call done with user
  User.findOne({email:email}, function(err,user){
    if(err){
      return done(err);
    }
    if(!user){ // user email incorrect
      return done(null,false)
    }
    //compare passwords
    user.comparePassword(password, function(err, isMatch){
      if(err){
        return done(err);
      }
      if(!isMatch){
        return done(null,false);
      }
      return done(null,user);
    })
  })
    //If wrong call done with false
})
//Setup options for JWT strategy
const jwtOptions ={
  jwtFromRequest :ExtractJwt.fromHeader('authorization'),
  secretOrKey : config.secret
};

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload,done){
  //payload is the decoded jwt token, going to have sub, iat

  //want to see if the user id in the payload exists in our database

  //if yes, call done with user object

  //if no call done with no user object
  User.findById(payload.sub, function(err, user){
    if(err){
      return done(err, false);
    }
    if(user){
      done(null, user);
    }
    else{
      done(null, false);
    }
  });
});

//Tell passport to use the Strategy
passport.use(jwtLogin);
passport.use(localLogin);
