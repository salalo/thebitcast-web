import passport from 'passport'
import googleStrategy from 'passport-google-oauth20'
import facebookStrategy from 'passport-facebook'
import Joi from 'joi'
import jwt from 'jsonwebtoken'
import sessionStorage from 'sessionstorage'

import keys from '../config/keys.js'
import User from '../models/user.js'

const schema = Joi.object().keys({
  nick: Joi.string().min(4).required(),
  email: Joi.string().lowercase().trim().required(),
  password: Joi.string().trim().min(6).required()
})

export default {

	async login(req, res, next) {
	  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET)
	  sessionStorage.setItem('token', token)
	  return res.send({ token })
	},

	async register(req, res, next) {
	  const { nick, email, password } = req.body
	  const user = new User({ nick, email })
	  await User.register(user, password)

	  res.send('User created successfully. Now you can log in.')
	},
}

passport.use(
	new googleStrategy({
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret,
		callbackURL: '/auth/google/cb'
	},
	(accessToken, refreshToken, profile, done) => {
		User.findOne({ googleID: profile.id })
			.then(currentUser => {
				if (currentUser) {
					// log in (jwt)
					done(null, currentUser)
				}
				else {
					new user({
						email: profile.emails[0].value,
						googleID: profile.id,
					}).save()
						.then(newUser => done(null, newUser))
						.catch(err => console.error(err))
				}
			})
			.catch(err => console.error(err))
	})
)

passport.use(
	new facebookStrategy({
		clientID: keys.facebook.clientID,
		clientSecret: keys.facebook.clientSecret,
		callbackURL: '/auth/facebook/cb'
	},
	(accessToken, refreshToken, profile, done) => {
		User.findOne({ facebookID: profile.id })
			.then(currentUser => {
				if (currentUser) {
					// log in (jwt)
					done(null, currentUser)
				}
				else {
					new user({
						email: "email-dump_" + profile.id,
						facebookID: profile.id

					}).save()
						.then(newUser => done(null, newUser))
						.catch(err => console.error(err))
				}
			})
			.catch(err => console.error(err))
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