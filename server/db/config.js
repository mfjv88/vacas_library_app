var path = require('path'),
    bodyParser = require('body-parser'),
    env = require('dotenv').config(),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');;

// DB
if (process.env.NODE_ENV == 'production') {
  var user = process.env.DB_USER,
      pwd = process.env.DB_PASS,
      host = process.env.DB_HOST;

  
  var connection = mongoose.createConnection("mongodb://" + user + ":" + pwd + "@" + host);
} else {

  var connection = mongoose.createConnection("mongodb://localhost:27017/movies");
}
autoIncrement.initialize(connection);

var movieSchema = new Schema({
  movie_id: {type: Number, ref: 'MovieId'},
  director: String,
  title: String,
  created_at: Date,
  updated_at: Date
});

movieSchema.plugin(autoIncrement.plugin, {
  model: 'movies',
  field: 'movie_id',
  startAt: 1,
  incrementBy: 1
});

var Movie = connection.model('Movie', movieSchema);

module.exports = Movie;
