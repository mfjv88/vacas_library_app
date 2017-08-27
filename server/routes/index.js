require("import-export");
require("babel-register")({
  presets: ["es2015", "react-app"]
});

var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    router = require('express').Router();

// DB
var Movie = require('../db/config');

var react = require('react'),
    reactDomServer = require('react-dom/server'),
    reactRouter = require('react-router');

var renderToString = reactDomServer.renderToString,
    routerContext = reactRouter.RouterContext,
    match = reactRouter.match,
    routes = require('../../src/components/routes').default();

// Routes
router.get('/api/movies/:movie_id', function(req, res){
  Movie.find({"movie_id": req.params.movie_id}, function(err, movie){
    res.send(movie);
  });
});

router.get('/api/search/:query', function(req, res){
  Movie.find({$text : {$search : req.params.query}}, function(err, movie){
    res.send(movie);
  });
});

router.get('/api/movies', function(req, res){
  Movie.find(function(err, movies){
    res.send(movies);
  })
});

router.get('*', function(req, res) {
  var htmlFilePath = path.join( __dirname, '../../build', 'index.html');
  fs.readFile(htmlFilePath, 'utf8', function(err, htmlData){
    if (err){
      error();
    } else {
      match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
        if (error) {
          res.status(500).send(error.message)
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          var ReactApp = renderToString(react.createElement(routerContext,renderProps));
          var Rendered = htmlData.replace('{{SSR}}', ReactApp);
          res.status(200).send(Rendered);
        } else {
          res.status(404).send('Not found')
        }
      })
    }
  })
});

module.exports = router;
