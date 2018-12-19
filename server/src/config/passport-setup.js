const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')
const keys = require('./keys.js')
const user = require('../models/user.js')

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
				}
				else {
					new user({
						nick: profile.displayName,
						googleID: profile.id
					}).save()
				}
			})
	})
)