// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// Configuration -----------

// database
var db = require('./config/db');

// setar a porta de comunicação
var port = process.env.PORT || 8080;

// connect to our mongoDB database
mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded( { extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// Rotas
require('./app/routes')(app); //configura o arquivo que utilizara as rotas

//Faz com que o servidor escute a porta e inicialize a aplicação
app.listen(port);

//Realiza um log ao iniciar o server para o usuário
console.log('A magia acontece na porta: ' + port);

//Expõe o APP
exports = module.exports = app;