import mongoose from 'mongoose'
import URLSlugs from 'mongoose-url-slugs'

const userSchema = mongoose.Schema({
  nick: {
    type: String,
    required: true
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
},
{
  timestamps: true
})

userSchema.plugin(URLSlugs('nick', { field: 'slug', update: true }))

module.exports = mongoose.model('User', userSchema)
