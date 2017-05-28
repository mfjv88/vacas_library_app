var path = require('path'),
router = require('express').Router();

// DB
var Movie = require('../db/config');

// Routes
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/movies', function(req, res){
  Movie.find(function(err, movies){
    res.send(movies);
  })
});


router.get('/movies/:movie_id', function(req, res){
  Movie.find({"movie_id": req.params.movie_id}, function(err, movie){
    res.send(movie);
  })
});

module.exports = router;
