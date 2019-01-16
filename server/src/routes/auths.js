import { Router } from 'express'
import passport from 'passport'

export default () => {
	const api = Router()

	api.post('/create', passport.authenticate('local'), (req, res) => {
		res.status(200)
	  res.redirect('http://localhost:8080')
	})

	// Auth using google oauth2.0
	api.get('/google', passport.authenticate('google', {
	  scope: ['profile', 'email']
	}))

	api.get('/google/cb', passport.authenticate('google'), (req, res) => {
	  res.redirect('http://localhost:8080')
	})

	// Auth using facebook oauth
	api.get('/facebook',
	  passport.authenticate('facebook')
	)

	api.get('/facebook/cb', passport.authenticate('facebook'), (req, res) => {
	  res.redirect('http://localhost:8080')
	})
	
	return api
}
