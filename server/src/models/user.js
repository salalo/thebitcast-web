import mongoose from 'mongoose'
// import passportLocalMongoose from 'passport-local-mongoose'

const userSchema = mongoose.Schema({
  nick: {
    type: String,
    index: true,
    unique: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    index: true,
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
},
{
  timestamps: true
})

// userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

module.exports = mongoose.model('User', userSchema)
