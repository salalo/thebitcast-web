const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const User = require('./models/user.js')
const passport = require('passport')

const router = express.Router()

router.route('/create').post((req, res) => {
  let hash = bcrypt.hashSync(req.body.local.password) // default salt = 10
  const user = new User(req.body.local)

  // double check if password is not empty (1st in axios)
  if (user.password !== '') {
    user.save()
      .then(user => {
        res.json('User registered successfully')
      })
      .catch(err => {
        res.status(400).send('Unable to registered new user' + err)
      })
  } else { console.log('Password can not be empty') }
  user.password = hash
})

// Auth using google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

router.get('/google/cb', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost:8080')
})


// Auth using facebook
router.get('/facebook',
  passport.authenticate('facebook')
)

router.get('/facebook/cb', passport.authenticate('facebook'), (req, res) => {
  res.redirect('http://localhost:8080')
})

module.exports = router