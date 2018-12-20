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
						nick: profile.displayName,
						googleID: profile.id
					}).save().then(newUser => done(null, newUser))
				}
			})
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
						nick: profile.displayName,
						facebookID: profile.id
					}).save().then(newUser => done(null, newUser))
				}
			})
	})
)