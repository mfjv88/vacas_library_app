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

mongoose.model('movies', {director: String, title:String, movie_id: Number});

app.get('/movies', function(req, res){
  mongoose.model('movies').find(function(err, movies){
    // console.log(movies);
    res.send(movies);
  })
});


app.get('/movies/:movie_id', function(req, res){
  mongoose.model('movies').find(function(err, movies){
    res.send(movies);
  })
});

app.post('/movies', function(req, res){
  mongoose.model('movies').create(req.body,function(err){
    if (err) {
      res.json({ message: 'Something went wrong'});
       res.send(err);
     } else {
       res.send(req.body)
     }
  })
});

app.delete('/movies/:movie_id', function(req, res){
  mongoose.model('movies').deleteOne({'movie_id' : req.params.movie_id}, function(err, docs){
    if (err) console.error(err);
  });
});


// ERROR HANDLER
app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

// EXPORT TO SERVER
module.exports = app;
