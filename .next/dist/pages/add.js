'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _movies = require('./components/partials/movies');

var _movies2 = _interopRequireDefault(_movies);

var _movie_form = require('./components/add/movie_form');

var _movie_form2 = _interopRequireDefault(_movie_form);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/add.js?entry';


var MovieFormBlock = function (_React$Component) {
  (0, _inherits3.default)(MovieFormBlock, _React$Component);

  // Initial built-in React functions
  function MovieFormBlock() {
    (0, _classCallCheck3.default)(this, MovieFormBlock);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MovieFormBlock.__proto__ || (0, _getPrototypeOf2.default)(MovieFormBlock)).call(this));

    _this.state = {
      showMovies: false,
      movies: []
    };
    return _this;
  }

  // Functions for App Component


  (0, _createClass3.default)(MovieFormBlock, [{
    key: '_getMovies',
    value: function _getMovies() {
      var _this2 = this;

      return this.state.movies.map(function (movie) {
        return _react2.default.createElement(_movies2.default, {
          movie: movie,
          director: movie.director,
          title: movie.title,
          movie_id: movie.movie_id,
          key: movie.movie_id,
          onDelete: _this2._deleteMovie.bind(_this2),
          onSave: _this2._saveEdit.bind(_this2), __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        });
      });
    }
  }, {
    key: '_getMoviesTitle',
    value: function _getMoviesTitle(movieCount) {
      if (movieCount === 0) {
        return 'No movies in list YET!';
      } else if (movieCount === 1) {
        return '1 movie in list';
      } else {
        return movieCount + ' movies in list';
      }
    }

    // onClick methods

  }, {
    key: '_handleClick',
    value: function _handleClick() {
      this.setState({
        showMovies: !this.state.showMovies
      });
    }
  }, {
    key: '_addMovie',
    value: function _addMovie(director, title) {
      var _this3 = this;

      var movie = {
        title: title,
        director: director
      };

      jQuery.ajax({
        url: '/movies/add',
        method: 'POST',
        data: movie,
        success: function success(newMovie) {
          _this3.setState({
            movies: _this3.state.movies.concat([newMovie])
          });
        }
      });
    }
  }, {
    key: '_deleteMovie',
    value: function _deleteMovie(movie) {
      jQuery.ajax({
        method: 'DELETE',
        url: '/movies/delete/' + movie.movie_id
      });

      var movies = [].concat((0, _toConsumableArray3.default)(this.state.movies));
      var movieIndex = movies.indexOf(movie);
      movies.splice(movieIndex, 1);

      this.setState({ movies: movies });
    }

    // For editing

  }, {
    key: '_saveEdit',
    value: function _saveEdit(director, title, previousData) {
      var _this4 = this;

      var movie_id = previousData.movie_id;
      var updatedInput = {
        title: title,
        director: director,
        "movie_id": movie_id
      };

      jQuery.ajax({
        url: '/movies/edit/' + movie_id,
        method: 'POST',
        data: updatedInput,
        success: function success(updatedMovie) {
          var movies = [].concat((0, _toConsumableArray3.default)(_this4.state.movies));
          var movieIndex = movies.indexOf(previousData);
          movies[movieIndex] = updatedMovie;

          _this4.setState({ movies: movies });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      // Variables
      var now = new Date();

      var movies = this._getMovies();

      var moviesNodes = void 0;

      var buttonText = 'Show movies';

      // Conditionals
      if (this.state.showMovies) {
        buttonText = 'Hide movies';
        moviesNodes = _react2.default.createElement('div', { className: 'movie-list', __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, movies);
      }

      // JSX
      return _react2.default.createElement(_index2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, 'Vacas Library'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, 'Current time: ', now.toTimeString()), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, ' ', this._getMoviesTitle(movies.length), ' '), _react2.default.createElement(_movie_form2.default, { addMovie: this._addMovie.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), _react2.default.createElement('button', { onClick: this._handleClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, buttonText), moviesNodes));
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._fetchMovies();
    }
  }, {
    key: '_fetchMovies',
    value: function _fetchMovies() {
      var _this5 = this;

      // jQuery.ajax({
      //   method: 'GET',
      //   url: 'https://api.themoviedb.org/3/movie/550/credits?api_key=4a30a8c65888c1fac2a36e456ecba9b6',
      //   success: (movies) => {
      //     movies.crew.map((crew) => {
      //       if (crew.job == 'Director' || crew.job == 'Producer') {
      //         console.log(crew);
      //       }
      //     });
      //     this.setState({movies})
      //   }
      // });

      jQuery.ajax({
        method: 'GET',
        url: '/movies',
        success: function success(movies) {
          movies.map(function (movie) {
            _this5.setState({
              movies: _this5.state.movies.concat([movie])
            });
          });
        }
      });
    }

    // Built-in React functions AFTER render

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this6 = this;

      this._timer = setInterval(function () {
        return _this6.state.movies;
      }, 5000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this._timer);
    }
  }]);

  return MovieFormBlock;
}(_react2.default.Component);

exports.default = MovieFormBlock;