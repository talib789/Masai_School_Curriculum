const passport = require('passport');
const { findUserByGithubId, users } = require('../users');
const GithubStrategy = require('passport-github2').Strategy;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

 passport.use(
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/github/callback', 
        passReqToCallback: true,
       },
      function(req, accessToken, refreshToken, profile, done) {

        profile = profile._json;
        
        let user = findUserByGithubId(profile.login);

        if (!user) {
          user = {
            ...profile,
            githubId: profile.login,
            id: profile.login,
          }
          users.push(user)
        }

        done(null, user);
      }
    )
);
