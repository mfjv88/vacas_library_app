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

var _search_bar = require('./search_bar');

var _search_bar2 = _interopRequireDefault(_search_bar);

var _movies = require('../partials/movies');

var _movies2 = _interopRequireDefault(_movies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/search/search_bar_block.js';


var SearchBarBlock = function (_React$Component) {
  (0, _inherits3.default)(SearchBarBlock, _React$Component);

  function SearchBarBlock() {
    (0, _classCallCheck3.default)(this, SearchBarBlock);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchBarBlock.__proto__ || (0, _getPrototypeOf2.default)(SearchBarBlock)).call(this));

    _this.state = {
      movies: []
    };
    return _this;
  }

  (0, _createClass3.default)(SearchBarBlock, [{
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
            lineNumber: 17
          }
        });
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
      var _this3 = this;

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
          var movies = [].concat((0, _toConsumableArray3.default)(_this3.state.movies));
          var movieIndex = movies.indexOf(previousData);
          movies[movieIndex] = updatedMovie;

          _this3.setState({ movies: movies });
        }
      });
    }
  }, {
    key: '_search',
    value: function _search(query) {
      var _this4 = this;

      this.setState({
        movies: []
      });
      jQuery.ajax({
        method: 'GET',
        url: '/search/' + query,
        success: function success(movies) {
          movies.map(function (movie) {
            _this4.setState({
              movies: _this4.state.movies.concat([movie])
            });
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var movies = this._getMovies();

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_search_bar2.default, { searchQuery: this._search.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement('div', { className: 'movie-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, movies));
    }
  }]);

  return SearchBarBlock;
}(_react2.default.Component);

exports.default = SearchBarBlock;