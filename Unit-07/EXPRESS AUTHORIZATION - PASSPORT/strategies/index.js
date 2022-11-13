
const passport = require("passport");
const { findUserById } = require("../users");
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {

  done(null, user);
});

require('./local') 
require('./github') 
