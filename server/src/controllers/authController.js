import passport from 'passport'
import googleStrategy from 'passport-google-oauth20'
import facebookStrategy from 'passport-facebook'
// import Joi from 'joi'
import jwt from 'jsonwebtoken'
import request from 'request'

import keys from '../config/keys.js'
import User from '../models/user.js'


export default {
	async login(req, res, next) {
		const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET)
		return res.send(token)
	},

	async register(req, res, next) {

		const { nick, email, password, captchaToken } = req.body;

		// const schemaRegister = Joi.object().keys({
		//    nick: Joi.string().min(4).required(),
		//    email: Joi.string().lowercase().trim().required(),
		//    password: Joi.string().trim().min(6).required(),
		//  	captchaToken: Joi.string().trim().required()
		//  })

		// const resultRegister = Joi.validate(User, schemaRegister)

		//Sprawdzenie captchy
		const ip = req.headers['x-forwarded-for'] || (req.connection && req.connection.remoteAddress) || '';

		//Zapytanie do googla
		var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?"
			+ "secret=" + keys.captcha.secret
		  + "&response=" + captchaToken;
		console.log("SPRAWDZANIE CAPTCHY POD ADRESEM:" + verificationUrl + "\n");

		//Wyslanie zapytania do googla
		request(verificationUrl,function(error, response, body) {

	    body = JSON.parse(body);

	    if(body.success !== undefined && !body.success) {
				return res.send({
					message: 'Captcha error',
					type: 'negative'
				});
			};
		});

	  const user = new User({ nick, email })
	  User.register(user, password).catch(err => {
			return res.send({
				message: 'User with given data is already created.',
				type: 'negative'
			})
		})
		.then(()=>{
			return res.send(
				{
					message: 'User created successfully',
					type: 'positive'
				}
			);
		})
	},

	async getUserByToken(req, res, next) {

		var token = req.body.data;
		//console.log(token);
		//conole.log(process.env.JWT_PUBLIC)
		var result = jwt.verify(token, process.env.JWT_SECRET,
			function(err, decoded) {
				console.log("ID: " + decoded.id);
				return res.send(decoded.id);
			});
		//console.log(JSON.stringify(result));
		//return res.send(result);
	}
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
					console.log('logged in using google')
					done(null, currentUser)
				}
				else {
					new User({
						nick: "nick-dump_" + profile.id,
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
					console.log('logged in using fb')
					done(null, currentUser)
				}
				else {
					new User({
						nick: "nick-dump_" + profile.id,
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
