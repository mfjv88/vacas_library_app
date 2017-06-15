// PACKAGES
var path = require('path'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser');

// IMPORTS
var indexRoutes = require('./routes/index');
    port = process.env.PORT || 3000;


// CREATE APP
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// VIEW ENGINES
app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
  fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../client')));

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

