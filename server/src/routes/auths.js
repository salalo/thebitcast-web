import { Router } from 'express'
import passport from 'passport'
import AuthController from '../controllers/authController.js'

export default () => {
	const api = Router()

	api.post('/', (req, res) => {
		res.send(AuthController.login())
	})

  api.post('/login', passport.authenticate('local', { session: false }), AuthController.login)

  api.post('/create', AuthController.register)

	// Auth using google oauth2.0
	api.get('/google', passport.authenticate('google', {
	  scope: ['profile', 'email']
	}))

	api.get('/google/cb', passport.authenticate('google', { session: false }), (req, res) => {
	  res.redirect('http://localhost:8080')
	})

	// Auth using facebook oauth
	api.get('/facebook',
	  passport.authenticate('facebook')
	)

	api.get('/facebook/cb', passport.authenticate('facebook', { session: false }), (req, res) => {
	  res.redirect('http://localhost:8080')
	})
	
	return api
}
