const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  nick: {
    type: String,
    required: true,
    trim: true
  },
  googleID: {
    type: String,
    unique: true
  },
  facebookID: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
  }
});

module.exports = mongoose.model('User', userSchema);