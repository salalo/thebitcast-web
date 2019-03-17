import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

import express from 'express'
import morgan from 'morgan'
import passport from 'passport'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
// import cookieSession from 'cookie-session'
import session from 'express-session'
import { join } from 'path'

import users from './routes/users.js'
import auths from './routes/auths.js'
import keys from './config/keys.js'
import passportAuth from './config/passport.js'
import { notFound, catchErrors } from './middlewares/errors.js'

const app = express()
passportAuth()

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

// connect to database
mongoose.connect(keys.mongodb.DB, { useNewUrlParser: true })
	.then(
  	() => { console.log('\nConnected successfully!') },
  	err => console.log('\nCan not connect to the database\n\n' + err)
  )

app.set('view engine', 'pug')
app.set('views', join(__dirname, 'views'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))


app.set('trust proxy', 1) // trust first proxy

app.use(session({
  name: 'session',
  secret: keys.cookie.secret,
  saveUninitialized: false,
  resave: false,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 60 * 60 * 1000 * 365
  }
}))

// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000 * 365,
//   keys: keys.cookie.secret
// }))

app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/auth', auths())
app.use('/users', users())

// err handling
app.use(notFound)
app.use(catchErrors)

app.listen(process.env.PORT || 8081)
