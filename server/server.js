// PACKAGES
var path = require('path'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser'),
    env = require('dotenv').config(),
    mongoose = require('mongoose');

// IMPORTS
var indexRoutes = require('./routes/index');

// CREATE APP
var app = express();

// DB
var user = process.env.DB_USER,
    pwd = process.env.DB_PASS,
    host = process.env.DB_HOST;
mongoose.connect("mongodb://" + user + ":" + pwd + "@" + host);
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

mongoose.model('movies', {director: String, title:String});

app.get('/movies', function(req, res){
  mongoose.model('movies').find(function(err, movies){
    console.log(movies);
    res.send(movies);
  })
});


// ERROR HANDLER
app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

// EXPORT TO SERVER
module.exports = app;
