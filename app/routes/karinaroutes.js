// let filePath = ''

// // Dependencies

// const express = require ('express')

// const Pet = require('../models/pets')

// // require Multer
// const multer = require('multer')

// // TODO: remove if not in use
// const path = require('path')

// const ejs = require('ejs')

// const app = express();

// module.exports = function (app) {
//     // Get all examples
//     app.get('/api/findAll', function (req, res) {
//       Pet.findAll()
//         .then(function (dbExamples) {
//           res.json(dbExamples)
//         })
//     })

//     // Change code to find a specific ID
//     app.get('/api/:specific', function (req, res) {
//       Pet.findAll({
//         where: {
//           petName: req.params.specific
//         }
//       }).then(function (results) {
//         res.json(results)
//       })
//     })

//     app.post('/api/create', function (req, res, next) {
//         console.log('*'.repeat(80))
//         console.log(req.body)
//         console.log('*'.repeat(80))

//         Pet.create(req.body)
//       .then(function (dbExample) {
//         res.json(dbExample)
//       })

//       var storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//           cb(null, 'app/public/uploads');

//           console.log('at line 17');
//           console.log(file)
//         },
//         filename: function (req, file, cb) {
//           cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//         // cb(null, file.fieldname + '-' + Date.now() + path.extname("testName"))

//     }
//       });

//       var upload = multer({
//            storage: storage

//         }).single('profilepic');

//     // set for ejs

//     // EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
//     // No religiousness about how to organize things. No reinvention of iteration and control-flow.

//     app.set('view engine', 'ejs');

//     // set static folder

//     app.use(express.static('./public'));

//     app.get('/' , (req, res) => {
//         res.render('addPet');
//     });

//     // Description for routers

//     app.post('/upload', (req, res) =>{
//         upload(req, res, (error) => {
//             if (error){
//                 res.render('addPet', {
//                     message: error
//                 })
//             } else {
//                 res.render('addPet', {
//                     message: 'Sucessfully uploaded',
//                     filename: `myupload/${req.file.filename}`
//                 });

//             }

//         });
//     });

//       // Delete an example by id
//       app.delete('/api/delete/:id', function (req, res) {
//         Pet.destroy(req.params)
//           .then(function (dbExample) {
//             res.json(dbExample)
//           })
//       })
//       // PUT route for updating. The updated example will be available in req.body
//       app.put('/api/examples/:id', function (req, res) {
//         Pet.update(req.params, req.body)
//           .then(results => {
//             console.log(`
//           *****
//           Example.update():
//           ${results}`)

//             res.json(results)
//           })
//       })
//     }
