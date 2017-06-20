require("import-export");
require("babel-register")({
  presets: ["es2015", "react-app"]
});

// PACKAGES
var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    env = require('dotenv').config();

// CREATE APP
var app = express();

// IMPORTS
var indexRoutes = require('./routes/index');

var updateRoutes = require('./routes/update');

var resetRoutes = require('./routes/resetid');

var port = process.env.PORT || 3000;


// var staticFiles = [
//   '/static/*'
// ]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// VIEW ENGINES
app.set('view engine', 'html');

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../build')));

// ROUTES
app.post('/api/movies/add', updateRoutes);

app.post('/api/movies/edit/:movie_id', updateRoutes);

app.delete('/api/movies/delete/:movie_id', updateRoutes);

app.get('/api/movies', indexRoutes);

app.get('/api/movies/:movie_id', indexRoutes);

app.get('/api/search/:query', indexRoutes);

app.get('*', indexRoutes);

app.get('/api/movies/counter/reset', resetRoutes);

// ERROR HANDLER
app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

// LISTENING TO SERVER
app.listen(port, function(){
  console.log('running at localhost:' + port);
});

