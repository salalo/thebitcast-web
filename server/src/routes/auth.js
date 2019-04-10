import { Router } from 'express'
import passport from 'passport'
import auth from '../actions/auth.js'

export default () => {
	const api = Router()

	//localhost:8081/auth/login
	api.post('/login', passport.authenticate('local', { session: true }), (req, res) => res.sendStatus(200))

	//localhost:8081/auth/create
	api.post('/create', auth.register)

	// Auth using google oauth2.0
	//localhost:8081/auth/google
	api.get('/google', passport.authenticate('google', {
		// get more info from google user's account
		scope: ['profile', 'email']
	}))

	//Google callback
	//localhost:8081/auth/google/cb
	api.get('/google/cb', passport.authenticate('google', { session: true }), (req, res) => {
		res.redirect('http://localhost:8080')
	})

	// Auth using facebook oauth
	//localhost:8081/auth/facebook
	api.get('/facebook', passport.authenticate('facebook'))

	//Facebook callback
	//localhost:8081/auth/facebook/cb
	api.get('/facebook/cb', passport.authenticate('facebook', { session: true }), (req, res) => {
		res.redirect('http://localhost:8080')
	})


	//Send actual user id if logged
	//localhost:8081/auth/getId
	api.get('/getUser', (req, res) => {
		if (req.isAuthenticated())
			res.status(200).send(req.user)
		else
			res.status(500).send('NotLogged')
	})

	//Logout user
	//localhost:8081/auth/logout
	api.get('/logout', (req, res) => {
		req.logout()
		req.session.destroy()
	})

	return api
}
