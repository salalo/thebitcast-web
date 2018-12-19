const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const routes = require('./router.js')
const mongodb = require('./config/database.js')
const passportSetup = require('./config/passport-setup.js')

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

// connect to database
mongoose.connect(mongodb.DB, { useNewUrlParser: true }).then(
  () => { console.log('\nConnected successfully!') },
  err => console.log('\nCan not connect to the database\n\n' + err)
)

// app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.set('view engine', 'ejs')
app.use(flash())


app.listen(process.env.PORT || 8081)
