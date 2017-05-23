var path = require('path');
var router = require('express').Router();
var mongoose = require('mongoose');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

// mongoose.model('movies', {director: String, title:String});
//
// router.get('/movies', function(req, res){
//   mongoose.model('movies').find(function(err, movies){
//     res.send(movies);
//   })
// });

module.exports = router;
