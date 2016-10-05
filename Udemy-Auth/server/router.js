const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session:false});
const requireSignin = passport.authenticate('local', {session:false});

module.exports= function(app) {
  // next for error handling
  //here we tell the router, 1st pass the request via requireAuth and if valid token present
  //then continue to call back function nu
  app.get('/', requireAuth, function(req,res){
    res.send({message: 'Super secrect code is ABC123!'});
  });

  app.post('/signup', Authentication.signup);

  app.post('/signin', requireSignin, Authentication.signin)
}
