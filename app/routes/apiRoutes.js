// ********************** 🌏 GLOBALS 🌍 ********************** \\
let filePath = ''

// Dependencies
const Pet = require('../models/pets')

// require Multer
const multer = require('multer')

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
  destination: 'app/public/uploads',
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

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  // Get all examples
  app.get('/api/findAll', function (req, res) {
    Pet.findAll()
      .then(function (dbExamples) {
        res.json(dbExamples)
      })
  })

  // Change code to find a specific ID
  app.get('/api/:specific', function (req, res) {
    Pet.findAll({
      where: {
        petName: req.params.specific
      }
    }).then(function (results) {
      res.json(results)
    })
  })

  // Create a new example ////////// ******* changed ******** \\\\\\
  app.post('/api/create', upload.single('petPicture'), function (req, res, next) {
    console.log(req.body)
    // Get the img file (multer)
    let imgFile = req.file
    console.log(imgFile)
    // Check for file
    // if (!imgFile) {
    //   console.log('not a file')
    //   // Create error
    //   let err = new Error('missing or invalid file')
    //   // Set ststus code
    //   err.httpStatusCode = 400
    //   // return the error
    //   return next(err)
    // }

    console.log(filePath)

    Pet.create(req.body)
      .then(function (dbExample) {
        res.json(dbExample)
      })
  })

  // Delete an example by id
  app.delete('/api/delete/:id', function (req, res) {
    Pet.destroy(req.params)
      .then(function (dbExample) {
        res.json(dbExample)
      })
  })
  // PUT route for updating. The updated example will be available in req.body
  app.put('/api/examples/:id', function (req, res) {
    Pet.update(req.params, req.body)
      .then(results => {
        console.log(`
      *****
      Example.update():
      ${results}`)

        res.json(results)
      })
  })
}
