// Dependecies
// const Pet = require('../models/pets')
const path = require('path')

/**
 * htmlRoutes: This routes file renders views e.g. handlebars pages
 * It differs from the apiRoutes.js file in that it responds to the client/view requests with a
 * handlebars page where the apiRoutes.js responds with data onlu
 *
 */
module.exports = function (app) {
  // Html route for home (root)
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

  // Html route for addPet
  app.get('/addPet', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/addPet.html'))
  })

  // Html route for availablePets
  app.get('/availablePets', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/availablePets.html'))
  })

  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    // res.render('404')
    res.sendFile(path.join(__dirname, '../public/404.html'))
  })
}
//
//
/*
NOTES DROPED because of time to finish project

// Html route for findPet
  app.get('/findPet', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/questions.html'))
  })

  // Load example page and pass in an example by id
  app.get('/find/:id', function (req, res) {
    Pet.findOne({ where: { id: req.params.id } })
      .then(function (dbExample) {
        res.render('example', {
          example: dbExample
        })
      })
  })

  // we are in production so let's not remove any old code for now
  // Load index page
  app.get('/', function (req, res) {
    Example.findAll({})
      .then(function (dbExamples) {
        res.render('index', {
          msg: 'Welcome!',
          examples: dbExamples
        })
      })
  })
*/
