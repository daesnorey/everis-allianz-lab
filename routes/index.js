var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.memoryStorage()
var upload = multer({storage: storage, limits: {fileSize: 10000000}});

var validator = require('../src/validator/form-lab-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/form-cv', upload.single('cv_file'), function(req, res, next) {
  var data = req.body;
  data.cv_file = req.file;
  if (validator.validaCvRequest(data)) {
    data.cv_file.url = `data:${data.cv_file.mimetype};base64,${data.cv_file.buffer.toString('base64')}`;
    res.render('cv-preview', data);
  } else {
    res.status(501).send('Error en validación de datos');
  }
});

module.exports = router;
