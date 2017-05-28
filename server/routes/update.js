var path = require('path'),
    router = require('express').Router();

// DB
var Movie = require('../db/config');

// Routes
router.post('/movies/add', function(req, res){
  Movie.create(req.body,function(err, movie){
    if (err) {
      res.json({ message: 'Something went wrong'});
      res.send(err);
     } else {
       var result = {
         'director': movie.director,
         'title': movie.title,
         'movie_id': movie.movie_id
       };
       res.send(result)
     }
  })
});

router.delete('/movies/delete/:movie_id', function(req, res){
  Movie.deleteOne({'movie_id' : req.params.movie_id}, function(err, docs){
    if (err) console.error(err);
  });
});

router.post('/movies/edit/:movie_id', function(req, res){
  Movie.findOneAndUpdate({"movie_id": req.body.movie_id}, {$set:req.body}, {new:true}, function (err, movie) {
    if (err) {
      res.send(err);
    } else {
      res.send(req.body);
    }
  });
});

module.exports = router;
