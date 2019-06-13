// *********************************************************************************
// SERVER.JS - THIS FILE INITIATES YOUR ENTIRE APPLICATION. IT"S YOUR APP FOUNDATION!
// *********************************************************************************
// ********************** 🌏 GLOBALS 🌍 ********************** \\
let filePath = ''
// Require dotenv
require('dotenv').config()
// Express server
const express = require('express')
// require Multer
const multer = require('multer')
// const exphbs = require('express-handlebars')
// const db = require('./models/example') // eslint-disable no-unused-consts
// Init Express app
const app = express()
// Set the Port
const PORT = process.env.PORT || 3000
// /* eslint-disable */
// const ENV = process.env.NODE_ENV || 'development'
// /* eslint-enable */

/*
 ** Set Multer storage **
The next thing will be to define a storage location for our files.
Multer gives the option of storing files to disk, as shown below.
Here, we set up a directory where all our files will be saved,
and we'll also give the files a new identifier.
*/
let storage = multer.diskStorage({
  // Set Destination
  // Note: You are responsible for creating the directory when providing destination as a function.
  //  When passing a string, multer will make sure that the directory is created for you.
  destination: 'uploads/',
  // Set File Name
  filename: function (req, file, cb) {
    console.log(file)
    // HERE is where we can decide the name of the file
    // We will name as thepetinder + current time im miliseconds + minetype of original file
    filePath = `thepetinder${Date.now()}.${file.mimetype.split('/')[1]}`
    cb(null, filePath)

    /* output of file
      { fieldname: 'singleFile',
        originalname: '<File original name>',
        encoding: '7bit',
        mimetype: 'image/jpeg' }
      */
  }
})

// Init Multer upload storage
let upload = multer({ storage: storage })

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
