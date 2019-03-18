import { Router } from 'express'
import passport from 'passport'
import AuthController from '../controllers/authController.js'

export default () => {
	const api = Router()

	//localhost:8081/auth/login
	api.post('/login', passport.authenticate('local', { session: true }), (req, res) => {
		res.redirect('http://localhost:8080')
	})

	//localhost:8081/auth/create
	api.post('/create', AuthController.register)

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
	api.get('/getId', (req, res) => {
		console.log(req.isAuthenticated())
		if (req.isAuthenticated())
			res.send(req.user._id)
		else
			res.send('NotLogged')
	})

	//Logout user
	//localhost:8081/auth/logout
	api.get('/logout', (req, res) => {
		req.logout()
		req.session.destroy()
	})

	return api
}
