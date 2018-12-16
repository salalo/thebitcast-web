const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const UserRouter = require('./UserRouter.js')
const mongodb = require('./config/database.js')

// connect to database
mongoose.connect(mongodb.DB, { useNewUrlParser: true }).then(
  () => { console.log('\nConnected successfully!') },
  err => console.log('\nCan not connect to the database\n\n' + err)
)

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(UserRouter)

app.set('view engine', 'ejs')
app.use(flash())

app.listen(process.env.PORT || 8081)
