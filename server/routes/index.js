// PACKAGES
var path = require('path'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser'),
    next = require('next');

// IMPORTS
var indexRoutes = require('./routes/index'),
    port = process.env.PORT || 3000,
    dev = process.env.NODE_ENV !== 'production',
    app = next({dev}),
    handle = app.getRequestHandler();


app.prepare().then(function(){
  // CREATE server
  var server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded());

  // VIEW ENGINES
  server.set('view engine', 'html');
  server.engine('html', function(path, options, callbacks){
    fs.readFile(path, 'utf-8', callback);
  });

  // MIDDLEWARE
  server.use(express.static(path.join(__dirname, '../client')));

  // ROUTES
  server.get('/', indexRoutes);

  server.get('/movies', indexRoutes);

  server.get('/movies/:movie_id', indexRoutes);

  server.get('/search/:query', indexRoutes);

  server.post('/movies/add', indexRoutes);

  server.delete('/movies/delete/:movie_id', indexRoutes);

  server.post('/movies/edit/:movie_id', indexRoutes);

  server.get('/movies/counter/reset', indexRoutes);

  server.get('*', indexRoutes);

  // ERROR HANDLER
  server.use(function(err, req, res, next){
    res.status(err.status || 500);
  });

  // LISTENING TO SERVER
  server.listen(port, function(err){
    if (err) throw err;
    console.log('running at localhost:' + port);
  });
})