var path = require('path'),
    router = require('express').Router();

// DB
var Movie = require('../db/config');

// Routes
router.get('/movies/counter/reset', function(req, res){
    Movie.resetCount(function(err, nextCount) {
      if (err) console.error(err);
      res.send("<h1>Movie ID successfully reset</h1>");
    });
});

module.exports = router;
