var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../server')
var Example = require('../app/models/example')
var expect = chai.expect

/* globals describe, it, beforeEach */

// Setting up the chai http plugin
chai.use(chaiHttp)

var request

describe('GET /api/findAll', function () {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function () {
    request = chai.request(server)
    return Example.reset()
  })

  it('should find all pets', function (done) {
    // Add some examples to the db to test with
    Example.create([
      { petName: 'abc', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'dkdkdkd' },
      { petName: 'ddd', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'dkdkdkd' },
      { petName: 'ccc', type: 'abd', attitude: 'abd', age: 11, imgPath: 'dkdkdkd' }
    ]).then(function () {
      // Request the route that returns all examples
      request.get('/api/findAll').end(function (err, res) {
        var responseStatus = res.status
        var responseBody = res.body

        // Run assertions on the response

        expect(err).to.be.null // eslint-disable-line no-unused-expressions

        expect(responseStatus).to.equal(200)

        expect(responseBody)
          .to.be.an('array')
          .that.has.lengthOf(3)

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({ petName: 'abc', type: 'abd', attitude: 'abd', isAdopted: 1, age: 11, imgPath: 'dkdkdkd' })

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({ petName: 'ddd', type: 'abd', attitude: 'abd', isAdopted: 1, age: 11, imgPath: 'dkdkdkd' })

        expect(responseBody[2])
          .to.be.an('object')
          .that.includes({ petName: 'ccc', type: 'abd', isAdopted: 0, attitude: 'abd', age: 11, imgPath: 'dkdkdkd' })
        // The `done` function is used to end any asynchronous tests
        done()
      })
    })
  })
})
