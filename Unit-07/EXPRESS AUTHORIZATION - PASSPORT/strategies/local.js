const passport = require("passport");
const { findUser } = require("../users");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      (email, password, done) => {
        const user = findUser(email);
  
        if (!user) { return done(null, false); }
        if (user.password !== password) { 
          return done(null, false); 
        }
        return done(null, user);
      }
    )
);