const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')
const facebookStrategy = require('passport-facebook')
const keys = require('./keys.js')
const user = require('../models/user.js')

passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
	user.findById(id).then(user => done(null, user))
})

passport.use(
	new googleStrategy({
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret,
		callbackURL: '/google/cb'
	},
	(accessToken, refreshToken, profile, done) => {
		user.findOne({googleID: profile.id})
			.then(currentUser => {
				if(currentUser) {
					console.log('user already exists')
					// log in
					done(null, currentUser)
				}
				else {
					new user({

						/* Prefix for nick to enable same user
							registered using different social media
							accounts will have the same nicks */
							
						nick: "google_" + profile.displayName,
						googleID: profile.id,
						email: profile.emails[0].value,

						// Generates value holders to prevent null value crashes
						password: "password-dump_" + profile.id,
						facebookID: "facebook-dump_" + profile.id
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
		callbackURL: '/facebook/cb'
	},
	(accessToken, refreshToken, profile, done) => {
		user.findOne({facebookID: profile.id})
			.then(currentUser => {
				if(currentUser) {
					console.log('user already exists')
					// log in
					done(null, currentUser)
				}
				else {
					new user({
						nick: "facebook_" + profile.displayName,
						facebookID: profile.id,

						// Generates value holders to prevent null value crashes
						email: "email-dump_" + profile.id,
						password: "password-dump_" + profile.id,
						googleID: "google-dump_" + profile.id

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
// 		callbackURL: '/twitter/cb'
// 	},
// 	(accessToken, refreshToken, profile, done) => {
// 		user.findOne({twitterID: profile.id})
// 			.then(currentUser => {
// 				if(currentUser) {
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