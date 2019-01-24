import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

import express from 'express'
import morgan from 'morgan'
import passport from 'passport'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { join } from 'path'

import users from './routes/users.js'
import auths from './routes/auths.js'
import keys from './config/keys.js'
import passportAuth from './config/passport.js'
import { notFound, catchErrors } from './middlewares/errors.js'
import authController from './controllers/authController.js'



const app = express()
passportAuth()

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

// connect to database
mongoose.connect(keys.mongodb.DB, { useNewUrlParser: true }).then(
  () => { console.log('\nConnected successfully!') },
  err => console.log('\nCan not connect to the database\n\n' + err)
)

app.set('view engine', 'pug')
app.set('views', join(__dirname, 'views'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(passport.initialize())

// routes
app.use('/auth', auths())
app.use('/users', users())

// err handling
app.use(notFound)
app.use(catchErrors)

app.listen(process.env.PORT || 8081)
