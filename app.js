require('dotenv').config();

const express      = require('express');
const bodyParser   = require('body-parser'); //permet de gerer les données postées
const hbs          = require('hbs');//handlebars - moteur de template
const mongoose     = require('mongoose');//sert de passerelle entre le serveur Node et MongoDB en utilisant des Schemas
const path         = require('path');//utilitaire pour accéder et interragir avec le syteme de fichiers
const favicon      = require('serve-favicon');//utilitaire pour ajouter un favicon au site


mongoose
  .connect('mongodb://localhost/memory', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;

const app = express();

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express View engine setup
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

const index = require('./routes/index');
app.use('/', index);


module.exports = app;
