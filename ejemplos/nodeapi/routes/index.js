var express = require('express');
var router = express.Router();

//estoy cargando dos cosas de una libreria
const { query, validationResult } = require('express-validator/check')

//lo de arriba es esto mismo
/*
const check = require('express-validator/check');
const query = check.query;
const validationResult = check.validationResult;
*/
/* GET home page. */
router.get('/', function(req, res, next) {
  const segundo = (new Date()).getSeconds();
  res.locals.valor = '<script>alert("inyeccion de codigo!")</script>';
  res.locals.condicion = {
    segundo:segundo,
    estado: segundo % 2 == 0
  }
  res.locals.users = [
    {name: 'Smith', age: 22},
    {name: 'Thomas', age: 32},
    {name: 'Jones', age: 27},
  ]
  res.render('index', { title: 'Express' });
});

//recibiendo parametro en l;a ruta
router.get('/paramenruta/:dato', function(req, res, next) {
  console.log('req.params',req.params);
  res.send('ok recibido ' + req.params.dato);
});

//ruta con parametro opcional
router.get('/paramenrutaopcional/:dato?', function(req, res, next) {
  console.log('req.params',req.params);
  res.send('ok recibido ' + req.params.dato);
});

//ruta con expresiones regulares.
router.get('/param/:id([0-9]+)/piso/:piso/puerta/:puerta', (req, res, next) => {
  console.log('req.params',req.params);
  res.send('ok recibido ' + req.params.id);
});


//recibiendo parametros en query-string
router.get('/paramquery', [
  query('age').isNumeric().withMessage('must be numeric')
],  (req, res, next) => {
  console.log('req.query', req.query);
  validationResult(req).throw();
  res.send('ok');
});

//recibiendo parametros en el body
router.put('/enelbody', (req, res, next) => {
  console.log('req.body', req.body);
  res.send('ok');
});

module.exports = router;
