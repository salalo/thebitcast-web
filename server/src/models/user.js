const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  nick: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true
  },
  password: {
    type: String
  },

  googleID: {
    type: String
  },
  facebookID: {
    type: String
  }
})

module.exports = mongoose.model('User', userSchema)
