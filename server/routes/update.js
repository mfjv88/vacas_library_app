var router = require('express').Router();

// DB
var Movie = require('../db/config');

// Routes
router.post('/api/movies/add', function(req, res){
  var result = {
    'director': req.body.director,
    'title': req.body.title,
    'movie_id': req.body.movie_id,
    'created_at': new Date(),
    'updated_at': new Date()
  };
  Movie.create(result,function(err, movie){
    if (err) {
      res.json({ message: 'Something went wrong'});
      res.send(err);
     } else {
       res.send(movie);
     }
  })
});

router.delete('/api/movies/delete/:movie_id', function(req, res){
  Movie.deleteOne({'movie_id' : req.params.movie_id}, function(err){
    if (err) console.error(err);
  });
});

router.post('/api/movies/edit/:movie_id', function(req, res){
  var result = {
    'director': req.body.director,
    'title': req.body.title,
    'updated_at': new Date()
  };
  Movie.findOneAndUpdate({"movie_id": req.body.movie_id}, {$set:result}, {new:true}, function (err, movie) {
    if (err) {
      res.send(err);
    } else {
      console.log(movie);
      res.send(movie);
    }
  });
});

module.exports = router;
