const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  nick: {
    type: String,
    required: true,
    trim: true
  },

  googleID: {
    type: String
  },

  facebookID: {
    type: String
  },

  email: {
    type: String,
    lowercase: true,
    trim: true
  },

  password: {
    type: String
  }
})

module.exports = mongoose.model('User', userSchema)
