var path = require('path'),
    bodyParser = require('body-parser'),
    env = require('dotenv').config(),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');;

// DB
var user = process.env.DB_USER,
    pwd = process.env.DB_PASS,
    host = process.env.DB_HOST;

var connection = mongoose.createConnection("mongodb://" + user + ":" + pwd + "@" + host);

autoIncrement.initialize(connection);

var movieSchema = new Schema({
  movie_id: {type: Number, ref: 'MovieId'},
  director: String,
  title: String,
});

movieSchema.plugin(autoIncrement.plugin, {
  model: 'movies',
  field: 'movie_id',
  startAt: 1,
  incrementBy: 1
});

var Movie = connection.model('Movie', movieSchema);

module.exports = Movie;
