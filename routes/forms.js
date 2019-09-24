var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.memoryStorage()
var upload = multer({storage: storage, limits: {fileSize: 10000000}});

var validator = require('../src/validator/form-lab-validator');

router.get('/course', function(req, res, next) {
  var data = req.query;
  if (validator.validaCourseRequest(data)) {
    res.render('course', data);
  } else {
    res.status(501).send('Error en validación de datos');
  }
});

router.post('/subscribe', function(req, res, next) {
  var data = req.body;
  if (validator.validaSubscribeRequest(data)) {
    if (data.password !== data.password_confirmation) {
      res.status(501).send('Las contraseñas no coinciden');
    } else {
      var users = req.cookies.users;
      if (!users) {
        users = [];
      }
      users.push(data);
      res.cookie('users', users);
      res.render('subscription', data);
    }
  } else {
    res.status(501).send('Error en validación de datos');
  }
});

router.post('/login', function(req, res, next) {
  var data = req.body;
  if (validator.validaLoginRequest(data)) {
    var users = req.cookies.users;
    if (users) {
      var currentUserData = null;
      for (let user of users) {
        if (user.username === data.username && user.password === data.password) {
          currentUserData = user;
          break;
        }
      }
      if (currentUserData) {
        res.render('login-success', currentUserData);
      } else {
        res.render('login-unsuccess', data);
      }
    }
  } else {
    res.status(501).send('Error en validación de datos');
  }
});

router.post('/cv', upload.single('cv_file'), function(req, res, next) {
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