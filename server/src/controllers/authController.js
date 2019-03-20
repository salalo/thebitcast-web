import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'
import FacebookStrategy from 'passport-facebook'
import LocalStrategy from 'passport-local'
import Joi from 'joi'
import bcrypt from 'bcrypt'
import request from 'request'

import keys from '../config/keys.js'
import usersModel from '../models/user.js'

export default {

	// Register function
	async register(req, res, done) {

		const { nick, email, password, captchaToken } = req.body.user // get data from request

		// Create user schema
		// CHANGING THIS CHANGE HOMEDESKTOPLOGINFORM SCHEMA TOO
		const REG_SCHEMA = Joi.object().keys({
			nick: Joi.string().alphanum().min(4).max(20).required(),
			email: Joi.string().email().lowercase().trim().min(5).required(),
			password: Joi.string().trim().min(8).max(40).required(),
			captchaToken: Joi.string()
		})

		// Validate user schema
		Joi.validate(req.body.user, REG_SCHEMA, (err, value) => {
	
			if (err) {
				//Validation error
				res.send({
					message: 'Inserted data are incorrect.',
					type: 'negative'
				})
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
						res.send({
							message: 'Captcha error.',
							type: 'negative'
						})
						console.log("authController [REG60]: Captcha error")
						done(null, false)
					}

					//If captcha works
					else {
						// create user object
						const USER = new usersModel({ nick, email, password })

						// hashing the password
						bcrypt.hash(password, 10, (err, hash) => {
							USER.password = hash

							// saving user object to db
							USER.save()
							.then(currentUser => {
								 res.send({
								 	message: 'User registered successfully.',
								 	type: 'positive'
								 })
								console.log("authController [REG80]: User registered successfully.")
								done(null, currentUser)
							})
							.catch(err => console.error("authController [REG82]: User not registered.", err))
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
	  passwordField: 'password',
	  passReqToCallback: true
	},
  (req, email, password, done) => {
		console.log(email, password)
    usersModel.findOne({ email: email })
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
    	.catch(err => console.error("authController [LOCAL1]:", err))
  })
)


// Setup passport google authentication
passport.use(
	new GoogleStrategy({
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret,
		callbackURL: '/auth/google/cb'
	},
	(accessToken, refreshToken, profile, done) => {
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
			.catch(err => console.error("authController [GOOGLE2]:", err))
	})
)

// Setup passport facebook authentication 
passport.use(
	new FacebookStrategy({
		clientID: keys.facebook.clientID,
		clientSecret: keys.facebook.clientSecret,
		callbackURL: '/auth/facebook/cb'
	},
	(accessToken, refreshToken, profile, done) => {
		usersModel.findOne({ facebookID: profile.id })
			.then(currentUser => {
				if (currentUser) {
					done(null, currentUser)
				} else {
					// Register user
					new usersModel({
						// nick: "nick-dump_" + profile.id,
						// email: "email-dump_" + profile.id,
						facebookID: profile.id

					}).save()
						.then(newUser => done(null, newUser))
						.catch(err => console.error("authController [FB1]:", err))
				}
			})
			.catch(err => console.error("authController [FB2]:", err))
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
