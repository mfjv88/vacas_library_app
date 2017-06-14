require("babel-register")({
  presets: ['es2015', 'react']
})

var path = require('path'),
    router = require('express').Router(),
    updateRoutes = require('./update'),
    resetRoutes = require('./resetid');

// DB
var Movie = require('../db/config');

var React = require('react'),
    app_routesToString = require('react-dom/server'),
    match = require('react-router').match,
    ReactRouter = require('react-router'),
    RouterContext = ReactRouter.RouterContext,
    routes = require('../../client/components/routes')
// console.log(ReactRouter.createRouter(routes));

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>Vacas Library</title>
    <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css>
    <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css>
    <link rel=stylesheet href=/assets/css/style.css>
    <div id=app>${appHtml}</div>
    <script>
    (function(){
      var ef = function(){};
      window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};
    }());
    </script>
    <script src=//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js></script>
    <script src=//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js></script>
    <script src=//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js></script>
    <script src=//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js></script>
    <script src=https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js></script>
    <script type=text/javascript src=./bundle.js></script>
  `
}


// Routes
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/movies', function(req, res){
  Movie.find(function(err, movies){
    res.send(movies);
  })
});

// router.get('/search', function(req, res){
//   res.send('search');
// });

// router.get('/add_movie', function(req, res){
//   res.send('add_movie');
// });

router.get('/movies/:movie_id', function(req, res){
  Movie.find({"movie_id": req.params.movie_id}, function(err, movie){
    res.send(movie);
  });
});

router.get('/search/:query', function(req, res){
  Movie.find({$text : {$search : req.params.query}}, function(err, movie){
    res.send(movie);
  });
});

router.get('*', (req, res) => {
  console.log(routes, req.url);
  match({routes: routes, location: req.url}, function(err, redirect, props){
    console.log(err, redirect, props);
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      var appHtml = renderToString(`<RouterContext {...props}/>`);
      res.status(200).send(renderPage(appHtml));
    } else {
      res.status(404).send('Not Fund')
    }
  });
});


module.exports = router;
