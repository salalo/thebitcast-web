import express from 'express'
import morgan from 'morgan'
import passport from 'passport'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import flash from 'connect-flash'
import ejs from 'ejs'

import users from './routes/users.js'
import auths from './routes/auths.js'
import keys from './config/keys.js'
import authController from './controllers/authController.js'
import { notFound, catchErrors } from './errors.js'

const app = express()
app.set('view engine', 'ejs')

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

app.use(passport.initialize())

app.disable('etag')
app.use('/about-us', express.static('views'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))
app.use(flash())

// routes
app.use('/auth', auths())
app.use('/users', users())

// err handling
app.use(notFound)
app.use(catchErrors)

app.listen(process.env.PORT || 8081)
