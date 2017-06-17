require("import-export");
require("babel-register")({
  presets: ['es2015', 'react']
});

// PACKAGES
var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser');

// CREATE APP
var app = express();

var Movie = require('./db/config');

var react = require('react'),
    reactDomServer = require('react-dom/server'),
    reactRouter = require('react-router'),
    routerContext = reactRouter.RouterContext;

var renderToString = reactDomServer.renderToString,
    match = reactRouter.match,
    routes = require('../src/components/routes').default();

// IMPORTS
  var indexRoutes = require('./routes/index'),
      port = process.env.PORT || 3000;

// var staticFiles = [
//   '/static/*'
// ]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// VIEW ENGINES
app.set('view engine', 'html');

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../build')));

// console.log(indexRoutes.stack[1].route);

// Movie.find(function(err, movies){
//     console.log(movies);
// });

// ROUTES
// app.get('api/movies/:movie_id', indexRoutes);
app.get('/api/movies/:movie_id', function(req, res){
  console.log('7');
});
// app.get('/search/:query', indexRoutes);

app.post('/api/movies/add', function(req, res){
  console.log('8');
});

app.delete('/api/movies/delete/:movie_id', function(req, res){
  console.log('9');
});

app.post('/api/movies/edit/:movie_id', function(req, res){
  console.log('10');
});

app.get('/movies', function(req, res){
  console.log('6');
});

// app.get('/search_movie', indexRoutes);

// app.get('/add_movie', indexRoutes);

app.get('/', indexRoutes);

// app.get('/movies/counter/reset', indexRoutes);
app.get('*', function(req, res){
  console.log(req.body);
  var htmlFilePath = path.join( __dirname, '../build', 'index.html');
  fs.readFile( htmlFilePath, 'utf8', function(err, htmlData){
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


// ERROR HANDLER
app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

// LISTENING TO SERVER
app.listen(port, function(){
  console.log('running at localhost:' + port);
});

