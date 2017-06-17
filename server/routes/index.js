require("import-export");
require("babel-register")({
  presets: ['es2015', 'react']
});

var path = require('path'),
    router = require('express').Router(),
    updateRoutes = require('./update'),
    resetRoutes = require('./resetid');

// DB

var react = require('react'),
    reactDomServer = require('react-dom/server'),
    reactRouter = require('react-router');

var renderToString = reactDomServer.renderToString,
    routerContext = reactRouter.RouterContext,
    match = reactRouter.match,
    routes = require('../../src/components/routes').default();

// Movie.find(function(err, movies){
//     console.log(movies);
// });
console.log('hi');
// Routes
router.get('/movies/:movie_id', function(req, res){
  console.log('1');
  Movie.find({"movie_id": req.params.movie_id}, function(err, movie){
    console.log(movie);
    res.send(movie);
  });
});

router.get('/search/:query', function(req, res){
  console.log('2');
  Movie.find({$text : {$search : req.params.query}}, function(err, movie){
    res.send(movie);
  });
});

router.get('/movies', function(req, res){
  console.log('3');
  Movie.find(function(err, movies){
    console.log(movies);
    res.send(movies);
  })
});

// var htmlFilePath = path.join( __dirname, '../../build', 'index.html');
//   fs.readFile( htmlFilePath, 'utf8', function(err, htmlData){
//     console.log(err);
//     if (err){
//       error();
//     } else {

// router.get('/add_movie', (req, res) => {
//       console.log('before match');
//       console.log(routes);
//       console.log(req.url);
//       match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
//         console('after match');
//         if (error) {
//           res.status(500).send(error.message)
//         } else if (redirectLocation) {
//           res.redirect(302, redirectLocation.pathname + redirectLocation.search)
//         } else if (renderProps) {
//           var ReactApp = renderToString(react.createElement(routerContext,renderProps));
//           var Rendered = htmlData.replace('{{SSR}}', ReactApp);
//           res.status(200).send(Rendered);
//         } else {
//           res.status(404).send('Not found')
//         }
//       })
// });

// router.get('/search_movie', (req, res) => {
//   console.log('5');
//   var htmlFilePath = path.join( __dirname, '../../build', 'index.html');
//   fs.readFile( htmlFilePath, 'utf8', function(err, htmlData){
//     if (err){
//       error();
//     } else {
//       match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
//         if (error) {
//           res.status(500).send(error.message)
//         } else if (redirectLocation) {
//           res.redirect(302, redirectLocation.pathname + redirectLocation.search)
//         } else if (renderProps) {
//           var ReactApp = renderToString(react.createElement(routerContext,renderProps));
//           var Rendered = htmlData.replace('{{SSR}}', ReactApp);
//           res.status(200).send(Rendered);
//         } else {
//           res.status(404).send('Not found')
//         }
//       })
//     }
//   })
// });

router.get('/', function(req, res) {
  console.log('4');
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});




// function renderPage(appHtml) {
//   return `
//     <!doctype html public="storage">
//     <html>
//     <meta charset=utf-8/>
//     <title>Vacas Library</title>
//     <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css>
//     <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css>
//     <link rel=stylesheet href=/assets/css/style.css>
//     <div id=app>${appHtml}</div>
//     <script>
//     (function(){
//       var ef = function(){};
//       window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};
//     }());
//     </script>
//     <script src=//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js></script>
//     <script src=//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js></script>
//     <script src=//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js></script>
//     <script src=//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js></script>
//     <script src=https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js></script>
//     <script type=text/javascript src=./bundle.js></script>
//   `
// }


module.exports = router;
