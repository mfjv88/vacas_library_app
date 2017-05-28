// PACKAGES
var path = require('path'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser'),
    env = require('dotenv').config(),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

// IMPORTS
var indexRoutes = require('./routes/index'),
    updateRoutes = require('./routes/update'),
    resetRoutes = require('./routes/resetid');

// CREATE APP
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// VIEW ENGINES
app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
  fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../client')));

// ROUTES
app.get('/', indexRoutes);

app.get('/movies', indexRoutes);

app.get('/movies/:movie_id', indexRoutes);

app.post('/movies/add', updateRoutes);

app.delete('/movies/delete/:movie_id', updateRoutes);

app.post('/movies/edit/:movie_id', updateRoutes);

app.get('/movies/counter/reset', resetRoutes);

// ERROR HANDLER
app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

// EXPORT TO SERVER
module.exports = app;
