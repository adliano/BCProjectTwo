// *********************************************************************************
// SERVER.JS - THIS FILE INITIATES YOUR ENTIRE APPLICATION. IT"S YOUR APP FOUNDATION!
// *********************************************************************************

// Require dotenv
require('dotenv').config()
// Express server
const express = require('express')
// const exphbs = require('express-handlebars')
// const db = require('./models/example') // eslint-disable no-unused-consts
// Init Express app
const app = express()
// Set the Port
const PORT = process.env.PORT || 3000
// /* eslint-disable */
// const ENV = process.env.NODE_ENV || 'development'
// /* eslint-enable */

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('app/public'))

// Handlebars
// app.engine(
//   'handlebars',
//   exphbs({
//     defaultLayout: 'main'
//   })
// )
// app.set('view engine', 'handlebars')

// Routes
require('./app/routes/apiRoutes')(app)
require('./app/routes/htmlRoutes')(app)

// Starting our Express app
// =============================================================
app.listen(PORT, function () {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT)
})

module.exports = app
