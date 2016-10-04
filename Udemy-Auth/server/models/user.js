const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Define a model
const userSchema = new Schema({
  email: {type:String, unique:true, lowercase:true},
  password: String
});


//on save hook, encrypt password
//Before saving a model, this function is ran
userSchema.pre('save', function(next){

  //get access to user (email and pwd)
  const user = this;

  // generate a salt
  bcrypt.genSalt(10, function(err,salt){
    if(err){
      return next(err);
    }

    // hash/password our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash){
      //hash is the encrypted password
      if(err){
        return next(err);
      }
      //overwrite password with encrypted pwd
      user.password = hash;

      //continue to save
      next();
    });
  })
});


userSchema.methods.comparePassword = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err){
      return callback(err);
    }
    callback(null, isMatch);
  })
}

//Create the model class
const ModelClass = mongoose.model('user', userSchema);

//Export the model
module.exports = ModelClass;
