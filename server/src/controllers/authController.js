import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'
import FacebookStrategy from 'passport-facebook'
import LocalStrategy from 'passport-local'
import Joi from 'joi'
import bcrypt from 'bcrypt'
import request from 'request'
import dateTime from 'node-datetime'

import keys from '../config/keys.js'
import db from '../config/db.js'
// import usersModel from '../models/user.js'

export default {

	// Register function
	async register(req, res, done) {

		const { nick, email, password, captchaToken } = req.body // get data from request

		// Create user schema
		// CHANGING THIS CHANGE HOMEDESKTOPLOGINFORM SCHEMA TOO
		const REG_SCHEMA = Joi.object().keys({
			nick: Joi.string().alphanum().min(4).max(20).required(),
			email: Joi.string().email().lowercase().trim().min(5).required(),
			password: Joi.string().trim().min(8).max(40).required(),
			captchaToken: Joi.string()
		})

		// Validate user schema
		Joi.validate(req.body, REG_SCHEMA, (err, value) => {
	
			if (err) {
				//Validation error
				res.send('Inserted data are incorrect.')
				console.log("authController [REG37]: Inserted data are incorrect.")
				 done(null, false)
			}

			//Validation successfull
			else {

				// Captcha request address
				let verificationUrl = "https://www.google.com/recaptcha/api/siteverify?"
					+ "secret=" + keys.captcha.secret
					+ "&response=" + captchaToken;

				// Send captcha request to google
				request(verificationUrl, (error, resa, body) => {
					body = JSON.parse(body)

					//Captcha error
					if (body.success !== undefined && !body.success) {
						// Send notification to frontend 
						res.send('Captcha error')

						console.log("authController [REG60]: Captcha error")
						done(null, false)
					}

					//If captcha works
					else {
						// create user object
						const USER = { nick, email, password }
						
						// hashing the password
						bcrypt.hash(password, 10, (err, hash) => {
							USER.password = hash

							//Check user is already registered
							let sql = "SELECT ID FROM Users WHERE nick=\""+USER.nick+"\" OR email=\""+USER.email+"\""

							db.query(sql, (err, result) => {
								if (err) console.log("authController [REG70]", err)
								
								if(result.length == 0) {

									//Add user to DB
									const dt = dateTime.create()
									const datetime = dt.format('Y-m-d H:M:S')
									
									let sql = "INSERT INTO Users ("+
										"ID, nick, email, password, register_date, last_login, avatar_href, google_ID, facebook_ID, twitter_ID,"+
										" facebook_link, twitter_link, instagram_link, gender, description, activated, premium, banned) VALUES"+
										"(NULL, \"" + USER.nick+"\", \"" + USER.email + "\",\"" + USER.password+"\",\""+datetime+"\",\""+datetime+"\",NULL, NULL, NULL, NULL,"+
										"NULL, NULL, NULL, NULL, NULL, 0, 0, 0)"

									db.query(sql, (err, result) => {
										if (err) console.log("authController [REG90]", err)
										res.send('success')
									})
									
								} else res.send('User already registered.')			
							})
						})
					}
				})
			}
		})
	}
}


passport.serializeUser((user, done) => done(null, user._id))

passport.deserializeUser((id, done) => {
	usersModel.findById(id, (err, user) => done(null, user))
})


// Passport local authentication strategy
passport.use(
	new LocalStrategy({
	  usernameField: 'email',
	  passwordField: 'password'
	},
  (email, password, done) => {
    /*usersModel.findOne({ email: email })
    	.then(currentUser => {
    		if (currentUser) {
					bcrypt.compare(password, currentUser.password, (err, res) => {
    				if (!res) {
	    				console.log("authController [LOCAL3]: Given password is incorrect.")
	    				done(null, false)
    				}
    				else done(null, currentUser)
					})
				}
    		else if (!currentUser) {
    			console.log("authController [LOCAL2]: User with given data does not exist.")
    			done(null, false)
    		}
    	})
    	.catch(err => console.error("authController [LOCAL1]:", err))*/
  })
)


// Setup passport google authentication
passport.use(
	new GoogleStrategy({
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret,
		callbackURL: '/auth/google/cb'
	},
	(accessToken, refreshToken, profile, done) => {/*
		usersModel.findOne({ googleID: profile.id })
			.then(currentUser => {
				if (currentUser) {
					done(null, currentUser)
				} else {
					// Register user
					new usersModel({
						email: profile.emails[0].value,
						googleID: profile.id,

					}).save()
						.then(newUser => done(null, newUser))
						.catch(err => console.error("authController [GOOGLE1]:", err))
				}
			})
			.catch(err => console.error("authController [GOOGLE2]:", err))*/
	})
)

// Setup passport facebook authentication 
passport.use(
	new FacebookStrategy({
		clientID: keys.facebook.clientID,
		clientSecret: keys.facebook.clientSecret,
		callbackURL: '/auth/facebook/cb',
		profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified', 'photos'],
	},
	(accessToken, refreshToken, profile, done) => {/*
		usersModel.findOne({ facebookID: profile.id })
			.then(currentUser => {
				if (currentUser) {
					done(null, currentUser)
				} else {
					// Register user
					new usersModel({
						nick: profile.displayName || profile._json.first_name + " " + profile._json.last_name,
						email: profile._json.email,
						facebookID: profile.id

					}).save()
						.then(newUser => done(null, newUser))
						.catch(err => console.error("authController [FB1]:", err))
				}
			})
			.catch(err => console.error("authController [FB2]:", err))*/
	})
)

// passport.use(
// 	new twitterStrategy({
// 		consumerKey: keys.twitter.clientID,
// 		consumerSecret: keys.twitter.clientSecret,
// 		callbackURL: '/auth/twitter/cb'
// 	},
// 	(accessToken, refreshToken, profile, done) => {
// 		user.findOne({ twitterID: profile.id })
// 			.then(currentUser => {
// 				if (currentUser) {
// 					console.log('user already exists')
// 					// log in
// 					done(null, currentUser)
// 				}
// 				else {
// 					new user({
// 						nick: profile.displayName,
// 						twitterID: profile.id
// 					}).save()
// 						.then(newUser => done(null, newUser))
// 						.catch(err => console.error(err))
// 				}
// 			})
// 			.catch(err => console.error(err))
// 	})
// )
