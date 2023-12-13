const User = require('../model/userModel');

const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {
    passport.use(
      new LocalStrategy(async (username, password, done) => {
        try {
          const user = await User.findOne({ username });
  
          if (!user) {
            return done(null, false);
          }
  
          if (user.password !== password) {
            return done(null, false);
          }
  
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      })
    );
  };