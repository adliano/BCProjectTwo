// Dependencies
const Pet = require('../models/pets')

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

  // Create a new example
  app.post('/api/create', function (req, res) {
    console.log(req.body)
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
