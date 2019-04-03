import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'
import FacebookStrategy from 'passport-facebook'
import LocalStrategy from 'passport-local'
import Joi from 'joi'
import bcrypt from 'bcrypt'
import request from 'request'

import userActions from './users.js'
import keys from '../config/keys.js'

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

							userActions.checkLocalUserExists(USER.nick, USER.email, exist => {
								if(!exist) {
									userActions.addUser(USER, 'local')
									res.sendStatus(200)
								} else res.send('User already registered')
							})
						})
					}
				})
			}
		})
	}
}


passport.serializeUser((user, done) => done(null, user.ID))

passport.deserializeUser((id, done) => userActions.getUserByID(id, USER => {
	done(null, USER)
}))


// Passport local authentication strategy
passport.use(
	new LocalStrategy({
	  usernameField: 'email',
	  passwordField: 'password'
	},
  (email, password, done) => {
		userActions.getUserByUnique(email, 'local', result => {
			if(result)
			{
				bcrypt.compare(password, result.password, (err, res) => {

					delete result.password //Delete password from req.user
					if (res == false) 
						done(null, false)
						
					else {
						//Loging in
						userActions.updateLastLogin(result.ID)
						done(null, result)
					}
				})
			} else done(null, false)
		})
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

		userActions.getUserByUnique(profile.id, 'google', result => {
			if (result) {
				//  Login
				delete result.password //Delete password from req.user
				userActions.updateLastLogin(result.ID)
				done(null, result)

			} else {
				//  Register
				userActions.addUser(profile, 'google')
				userActions.getUserByUnique(profile.id, 'google', result1 => {
					// delete result1.password //Delete password from req.user
					done(null, result1)
				})
			}
		})
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
	(accessToken, refreshToken, profile, done) => {

		userActions.getUserByUnique(profile.id, 'facebook', result => {
			if(result){
				//  Login
				delete result.password //Delete password from req.user
				userActions.updateLastLogin(result.ID)
				done(null, result)

			} else {
				//  Register
				userActions.addUser(profile, 'facebook')
				userActions.getUserByUnique(profile.id, 'facebook', result1 => {
					// delete result1.password //Delete password from req.user
					done(null, result1)
				})
			}
		})
	})
)
