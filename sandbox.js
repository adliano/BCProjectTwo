const express = require ('express');
const ejs = require ('ejs');
const multer = require ('multer');
const path = require ('path');

const app = express ();

const port = process.env.PORT || 3030

// from line 12 to 19 copy and paste from multer npm website to store
// 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/upload');

      console.log('at line 17');
      console.log(file)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    // cb(null, file.fieldname + '-' + Date.now() + path.extname("testName"))

}
  });
   
  var upload = multer({
       storage: storage 
    
    }).single('profilepic');




// set for ejs

// EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. 
// No religiousness about how to organize things. No reinvention of iteration and control-flow.

// app.set('view engine', 'ejs');

// set static folder

app.use(express.static('./public'));



app.get('/' , (req, res) => {
    res.render('index');
});

// Des

app.post('/upload', (req, res) =>{
    upload(req, res, (error) => {
        if (error){
            res.render('index', {
                message: error
            })
        } else {
            res.render('index', {
                message: 'Sucessfully uploaded',
                filename: `myupload/${req.file.filename}`
            });


        }

    });
});




app.listen(port, () => console.log (`Server is running at ${port}`));
