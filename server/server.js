// PACKAGES
var path = require('path');
var fs = require('fs');
var express = require('express');

// IMPORTS
var indexRoutes = require('./routes/index');

// CREATE APP
var app = express();


// VIEW ENGINES
app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
  fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../client')));

// ROUTES
app.get('/', indexRoutes);

// ERROR HANDLER
app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

// EXPORT TO SERVER
module.exports = app;
