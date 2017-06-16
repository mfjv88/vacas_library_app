require("babel-register")({
  presets: ['es2015', 'react']
});

// PACKAGES
var path = require('path'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser');

// IMPORTS
var indexRoutes = require('./routes/index');
    port = process.env.PORT || 3000;

// Webpack Requirements
import webpack from 'webpack';
// import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// CREATE APP
var app = express();

var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    ReactRouter = require('react-router'),
    RouterContext = ReactRouter.RouterContext;
    routes = require('../client/components/app');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// VIEW ENGINES
app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
  fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../client')));

// console.log();

console.log(ReactRouter.match({routes: ReactRouter.createRoutes(routes), location: "/search_movie"}, function(error, redirectLocation, renderProps){
	console.log(error, redirectLocation, renderProps);
}));

app.use(function(req, res){
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  console.log(routes[0].props.path);
  ReactRouter.match({ routes: routes, location: req.url }, function(error, redirectLocation, renderProps) {
    console.log(error, redirectLocation, renderProps)
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      res.status(200).send(ReactDOMServer.renderToString(React.createElement(RouterContext,renderProps)))
    } else {
      res.status(404).send('Not found')
    }
  })
});

// ROUTES
app.get('/', indexRoutes);

app.get('/movies', indexRoutes);

app.get('/movies/:movie_id', indexRoutes);

app.get('/search/:query', indexRoutes);

app.post('/movies/add', indexRoutes);

app.delete('/movies/delete/:movie_id', indexRoutes);

app.post('/movies/edit/:movie_id', indexRoutes);

app.get('/movies/counter/reset', indexRoutes);

app.get('*', indexRoutes);

// ERROR HANDLER
app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

// LISTENING TO SERVER
app.listen(port, function(){
  console.log('running at localhost:' + port);
});

