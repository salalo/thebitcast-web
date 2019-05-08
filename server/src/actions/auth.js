import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import FacebookStrategy from "passport-facebook";
import LocalStrategy from "passport-local";
import Joi from "joi";
import bcrypt from "bcrypt";
import request from "request";

import userActions from "./user.js";
import keys from "../config/keys.js";
import notifs from "../config/notifications";

function checkCaptcha(captchaToken) {
  return new Promise((resolve, reject) => {
    let verificationUrl =
      "https://www.google.com/recaptcha/api/siteverify?" +
      "secret=" +
      keys.captcha.secret +
      "&response=" +
      captchaToken;

    request(verificationUrl, (error, resa, body) => {
      body = JSON.parse(body);

      if (body.success !== undefined && !body.success) resolve(false);
      else resolve(true);
    });
  });
}

export default {
  // Register function
  async register(req, res) {
    const { nick, email, password, captchaToken } = req.body; // get data from request
    console.log(req.body);
    // Create user schema
    // CHANGING THIS CHANGE HOMEDESKTOPLOGINFORM SCHEMA TOO
    const REG_SCHEMA = Joi.object().keys({
      nick: Joi.string()
        .alphanum()
        .min(4)
        .max(20)
        .required(),
      email: Joi.string()
        .email()
        .lowercase()
        .trim()
        .min(5)
        .required(),
      password: Joi.string()
        .trim()
        .min(8)
        .max(40)
        .required(),
      captchaToken: Joi.string()
    });

    if (Joi.validate(req.body, REG_SCHEMA).error) {
      res.json(notifs.incorrectData);
      return;
    }

    if (!(await checkCaptcha(captchaToken))) {
      res.json(notifs.captchaError);
      done(null, false);
      return;
    }

    const USER = { nick, email, password };

    USER.password = await bcrypt.hash(password, 10);

    let exist = await userActions.checkLocalUserExists(USER.nick, USER.email);

    if (exist === "dbError") {
      res.json(notifs.dbError);
      return;
    }
    if (exist) {
      res.json(notifs.userAlreadyRegistered);
      return;
    }

    if (!(await userActions.addUser(USER, "local"))) {
      res.json(notifs.dbError);
      return;
    }

    res.json(notifs.userRegister);
  }
};

passport.serializeUser((user, done) => done(null, user.ID));

passport.deserializeUser(async (id, done) => {
  let USER = await userActions.getUserByID(id);
  if (USER) done(null, USER);
  else console.log("database error");
});

// Passport local authentication strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      let user = await userActions.getUserByUnique(email, "local");
      
      if (user === undefined) {
        done(notifs.incorrectEmailOrPassword);
        return;
      }
      else if (!user) {
        done(notifs.dbError, false);
        return;
      }else{

      if (!(await bcrypt.compare(password, user.password))) {
        done(notifs.incorrectEmailOrPassword, false);
        return;
      }

      delete user.password;

      if (!(await userActions.updateLastLogin(user.ID))) {
        done(notifs.dbError, false);
        return;
      }
      done(null, user);
      return;
    }
    }
  )
);

// Setup passport google authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/cb"
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await userActions.getUserByUnique(profile.id, "google");
      if (user) {
        //  Login
        await userActions.updateLastLogin(user.ID);
        done(null, user);
      } else {
        //  Register
        await userActions.addUser(profile, "google");
        let result1 = await userActions.getUserByUnique(profile.id, "google");
        done(null, result1);
      }
    }
  )
);

// Setup passport facebook authentication
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      callbackURL: "/auth/facebook/cb",
      profileFields: [
        "id",
        "email",
        "gender",
        "link",
        "locale",
        "name",
        "timezone",
        "updated_time",
        "verified",
        "photos"
      ]
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await userActions.getUserByUnique(profile.id, "facebook");
      if (user) {
        //  Login
        await userActions.updateLastLogin(user.ID);
        done(null, user);
      } else {
        //  Register
        await userActions.addUser(profile, "facebook");
        let result1 = await userActions.getUserByUnique(profile.id, "facebook");
        done(null, result1);
      }
    }
  )
);
