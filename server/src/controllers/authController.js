import passport from 'passport'
import googleStrategy from 'passport-google-oauth20'
import facebookStrategy from 'passport-facebook'
import Joi from 'joi'
// import session from 'express-session'
import jwt from 'jsonwebtoken'
import request from 'request'

import keys from '../config/keys.js'
import usersModel from '../models/user.js'

export default {

	// Login function
	async login(req, res, next) {

		const TOKEN_JWT = await jwt.sign({ id: req.user._id }, process.env.JWT_SECRET) // sign and get new TOKEN_JWT
		console.log("authController[LOGIN1]:", req.user._id) // add user._id to session [LOG1]
		return res.send(TOKEN_JWT) // return TOKEN_JWT to frontend
	},
	

	// Register function
	async register(req, res, next) {

		const { nick, email, password, captchaToken } = req.body // get data from request

		// Create user schema
		// ON CHANGING THIS CHANGE HOMEDESKTOPLOGINFORM SCHEMA TOO
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
				res.status(400).send({
					message: 'Inserted data are not correct.',
					type: 'negative'
				})
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

					//If captcha error
					if(body.success !== undefined && !body.success) {
						// Send notification to frontend 
						res.status(400).send({
							message: 'Captcha error',
							type: 'negative'
						})
					}

					//If captcha works
					else{

						// Create user object from request data
						const USER = new usersModel({ nick, email })
						
						usersModel.register(USER, password)
							.then(() => {

								// Users id is in USER._id

								// Send notification to frontend
								res.send({
										message: 'User created successfully',
										type: 'positive'
									}
								)
							})
							.catch(() => {
								res.send({
									message: 'User with given data is already created.',
									type: 'negative'
								})
							})
					}
				})
			}
		})
	}
}



// Setup passport google authentication 
passport.use(
	new googleStrategy({
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret,
		callbackURL: '/auth/google/cb'
	},
	(accessToken, refreshToken, profile, done) => {
		usersModel.findOne({ googleID: profile.id })
			.then(currentUser => {
				if (currentUser) {
					// Log user in
					const TOKEN_JWT = jwt.sign({ id: currentUser._id }, process.env.JWT_SECRET)
					console.log("GOOGLE login token:", TOKEN_JWT)
					
					done(null, currentUser)
				}
				else {

					// Register user
					new usersModel({
						nick: "nick-dump_" + profile.id,
						email: profile.emails[0].value,
						googleID: profile.id,

					}).save()
						.then(newUser => {
							const TOKEN_JWT = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET)
							console.log("GOOGLE register token:", TOKEN_JWT)

							done(null, newUser)
						})
						.catch(err => console.error("authController [GOOGLE1]:", err))
				}
			})
			.catch(err => console.error("authController [GOOGLE2]:", err))
	})
)


// Setup passport facebook authentication 
passport.use(
	new facebookStrategy({
		clientID: keys.facebook.clientID,
		clientSecret: keys.facebook.clientSecret,
		callbackURL: '/auth/facebook/cb'
	},
	(accessToken, refreshToken, profile, done) => {
		usersModel.findOne({ facebookID: profile.id })
			.then(currentUser => {
				if (currentUser) {
					// Log user in
					const TOKEN_JWT = jwt.sign({ id: currentUser._id }, process.env.JWT_SECRET)
					console.log("FB login token:", TOKEN_JWT)

					done(null, currentUser)
				}
				else {

					// Register user
					new usersModel({
						nick: "nick-dump_" + profile.id,
						email: "email-dump_" + profile.id,
						facebookID: profile.id

					}).save()
						.then(newUser => {
							const TOKEN_JWT = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET)
							console.log("FB register token:", TOKEN_JWT)

							done(null, newUser)
						})
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
