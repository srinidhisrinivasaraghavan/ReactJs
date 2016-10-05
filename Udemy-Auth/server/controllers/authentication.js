const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenforUser(user){
  const timestamp= new Date().getTime();
  return jwt.encode({ sub:user.id, iat: timestamp}, config.secret);
}

exports.signup = function(req,res,next){
  const email = req.body.email;
  const password = req.body.password;
  //see if use with email exists
  User.findOne({email:email}, function(err, existingUser){
    if(err){
      return next(err);
    }
    //if exists return Error
    if(existingUser){
      return res.status(422).send({error: 'Email is in use'});
    }
    //if not exists, create and save user record
    const user = new User({
      email:email,
      password: password
    });

    user.save(function(err){
      if(err){
        return next(err);
      }
      res.json({token:tokenforUser(user)});
    });
    //Respond to request
  });
}

exports.signin = function(req,res,next){
  //user already is validated by strategy at this point, we just need
  //to provide the token here

  //req.user is the user object from passport
  res.send({token: tokenforUser(req.user)});
}
