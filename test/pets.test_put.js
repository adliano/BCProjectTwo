var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../server')
var Pet = require('../app/models/pets')
var expect = chai.expect

/* globals describe, it, beforeEach */

// Setting up the chai http plugin
chai.use(chaiHttp)

var request

/* eslint-disable no-undef */
describe('PUT/api/create', function () {
/* eslint-enable no-undef */
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function () {
    request = chai.request(server)
    return Pet.reset()
  })

  it('should save an example', function (done) {
    // Create an object to send to the endpoint
    Pet.create([
      { petName: 'abc', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'dkdkdkd' },
      { petName: 'ddd', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'dkdkdkd' }
    ]).then(function () {
      var reqBody = { id: 1, petName: 'jkl', type: '1234', attitude: '0000', isAdopted: true, age: 9999, imgPath: 'dkdkdkd' }

      // POST the request body to the server
      request
        .put('/api/examples/1')
        .send(reqBody)
        .end(function (err, res) {
          var responseStatus = res.status
          var responseBody = res.body

          // Run assertions on the response

          expect(err).to.be.null // eslint-disable-line no-unused-expressions

          expect(responseStatus).to.equal(200)

          expect(responseBody)
            .to.equal(1)

          // The `done` function is used to end any asynchronous tests
          done()
        })
    })
  })
})
