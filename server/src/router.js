const express = require('express')
const User = require('./models/user.js')
const passport = require('passport')
const router = express.Router()


router.post('/create', passport.authenticate('local'), (req, res) => {
  res.redirect('http://localhost:8080')
})

// Auth using google oauth2.0
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

router.get('/google/cb', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost:8080')
})

// Auth using facebook oauth
router.get('/facebook',
  passport.authenticate('facebook')
)

router.get('/facebook/cb', passport.authenticate('facebook'), (req, res) => {
  res.redirect('http://localhost:8080')
})

module.exports = router
