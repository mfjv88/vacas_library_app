/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(1),
    bodyParser = __webpack_require__(5),
    env = __webpack_require__(22).config(),
    mongoose = __webpack_require__(23),
    Schema = mongoose.Schema,
    autoIncrement = __webpack_require__(24);;

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
  movie_id: { type: Number, ref: 'MovieId' },
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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _movies = __webpack_require__(7);

var _movies2 = _interopRequireDefault(_movies);

var _movie_form = __webpack_require__(13);

var _movie_form2 = _interopRequireDefault(_movie_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieFormBlock = function (_React$Component) {
  _inherits(MovieFormBlock, _React$Component);

  // Initial built-in React functions
  function MovieFormBlock() {
    _classCallCheck(this, MovieFormBlock);

    var _this = _possibleConstructorReturn(this, (MovieFormBlock.__proto__ || Object.getPrototypeOf(MovieFormBlock)).call(this));

    _this.state = {
      showMovies: false,
      movies: []
    };
    return _this;
  }

  // Functions for App Component


  _createClass(MovieFormBlock, [{
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
          onSave: _this2._saveEdit.bind(_this2) });
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

      var movies = [].concat(_toConsumableArray(this.state.movies));
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
          var movies = [].concat(_toConsumableArray(_this4.state.movies));
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
        moviesNodes = _react2.default.createElement(
          'div',
          { className: 'movie-list' },
          movies
        );
      }

      // JSX
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Vacas Library'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Current time: ',
          now.toTimeString()
        ),
        _react2.default.createElement(
          'h2',
          null,
          ' ',
          this._getMoviesTitle(movies.length),
          ' '
        ),
        _react2.default.createElement(_movie_form2.default, { addMovie: this._addMovie.bind(this) }),
        _react2.default.createElement(
          'button',
          { onClick: this._handleClick.bind(this) },
          buttonText
        ),
        moviesNodes
      );
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_React$Component) {
  _inherits(Movie, _React$Component);

  function Movie(props) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, props));

    _this.state = {
      editMovie: false,
      titleValue: _this.props.title,
      directorValue: _this.props.director
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);

    return _this;
  }

  _createClass(Movie, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.editMovie) {
        // editMovie = this.props.movie;
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("input", { type: "text", placeholder: "Director:", name: "directorValue", value: this.state.directorValue, ref: function ref(input) {
              return _this2._director = input;
            }, onChange: this.handleInputChange }),
          _react2.default.createElement("input", { type: "text", placeholder: "Movie:", name: "titleValue", value: this.state.titleValue, ref: function ref(input) {
              return _this2._title = input;
            }, onChange: this.handleInputChange }),
          _react2.default.createElement(
            "button",
            { onClick: this._handleSave.bind(this) },
            "Save changes"
          )
        );
      } else {
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "h3",
            null,
            this.props.title
          ),
          _react2.default.createElement(
            "p",
            null,
            "Directed by: ",
            this.props.director
          ),
          _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              "a",
              { href: "#", onClick: this._handleDelete.bind(this) },
              "Delete movie"
            )
          ),
          _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              "a",
              { href: "#", onClick: this._handleEdit.bind(this) },
              "Edit movie"
            )
          )
        );
      }
    }
  }, {
    key: "_handleDelete",
    value: function _handleDelete(event) {
      event.preventDefault();
      if (confirm('Are you sure?')) {
        this.props.onDelete(this.props.movie);
      }
    }
  }, {
    key: "_handleEdit",
    value: function _handleEdit(event) {
      event.preventDefault();
      this.setState({
        editMovie: true
      });
    }
  }, {
    key: "_handleSave",
    value: function _handleSave(event) {
      event.preventDefault();
      this.setState({
        editMovie: false
      });

      var director = this._director;
      var title = this._title;

      this.props.onSave(director.value, title.value, this.props.movie);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this._timer = setInterval(function () {
        return _this3.state.movies;
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this._timer);
    }
  }]);

  return Movie;
}(_react2.default.Component);

exports.default = Movie;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _search_bar = __webpack_require__(17);

var _search_bar2 = _interopRequireDefault(_search_bar);

var _movies = __webpack_require__(7);

var _movies2 = _interopRequireDefault(_movies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBarBlock = function (_React$Component) {
  _inherits(SearchBarBlock, _React$Component);

  function SearchBarBlock() {
    _classCallCheck(this, SearchBarBlock);

    var _this = _possibleConstructorReturn(this, (SearchBarBlock.__proto__ || Object.getPrototypeOf(SearchBarBlock)).call(this));

    _this.state = {
      movies: []
    };
    return _this;
  }

  _createClass(SearchBarBlock, [{
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
          onSave: _this2._saveEdit.bind(_this2) });
      });
    }
  }, {
    key: '_deleteMovie',
    value: function _deleteMovie(movie) {
      jQuery.ajax({
        method: 'DELETE',
        url: '/movies/delete/' + movie.movie_id
      });

      var movies = [].concat(_toConsumableArray(this.state.movies));
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
          var movies = [].concat(_toConsumableArray(_this3.state.movies));
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

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_search_bar2.default, { searchQuery: this._search.bind(this) }),
        _react2.default.createElement(
          'div',
          { className: 'movie-list' },
          movies
        )
      );
    }
  }]);

  return SearchBarBlock;
}(_react2.default.Component);

exports.default = SearchBarBlock;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

__webpack_require__(21)({
  presets: ['es2015', 'react']
});

var path = __webpack_require__(1),
    router = __webpack_require__(2).Router(),
    updateRoutes = __webpack_require__(19),
    resetRoutes = __webpack_require__(18);

// DB
var Movie = __webpack_require__(3);

var React = __webpack_require__(0),
    app_routesToString = __webpack_require__(26),
    match = __webpack_require__(10).match,
    ReactRouter = __webpack_require__(10),
    RouterContext = ReactRouter.RouterContext,
    routes = __webpack_require__(16);

// console.log(routes);

function renderPage(appHtml) {
  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>Vacas Library</title>\n    <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css>\n    <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css>\n    <link rel=stylesheet href=/assets/css/style.css>\n    <div id=app>' + appHtml + '</div>\n    <script>\n    (function(){\n      var ef = function(){};\n      window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};\n    }());\n    </script>\n    <script src=//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js></script>\n    <script src=//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js></script>\n    <script src=//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js></script>\n    <script src=//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js></script>\n    <script src=https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js></script>\n    <script type=text/javascript src=./bundle.js></script>\n  ';
}

// Routes
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/movies', function (req, res) {
  Movie.find(function (err, movies) {
    res.send(movies);
  });
});

// router.get('/search', function(req, res){
//   res.send('search');
// });

// router.get('/add_movie', function(req, res){
//   res.send('add_movie');
// });

router.get('/movies/:movie_id', function (req, res) {
  Movie.find({ "movie_id": req.params.movie_id }, function (err, movie) {
    res.send(movie);
  });
});

router.get('/search/:query', function (req, res) {
  Movie.find({ $text: { $search: req.params.query } }, function (err, movie) {
    res.send(movie);
  });
});

router.get('*', function (req, res) {
  console.log(routes, req.url);
  match({ routes: routes, location: req.url }, function (err, redirect, props) {
    console.log(err, redirect, props);
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      var appHtml = renderToString('<RouterContext {...props}/>');
      res.status(200).send(renderPage(appHtml));
    } else {
      res.status(404).send('Not Fund');
    }
  });
});

module.exports = router;
/* WEBPACK VAR INJECTION */}.call(exports, "server/routes"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieForm = function (_React$Component) {
  _inherits(MovieForm, _React$Component);

  function MovieForm() {
    _classCallCheck(this, MovieForm);

    return _possibleConstructorReturn(this, (MovieForm.__proto__ || Object.getPrototypeOf(MovieForm)).apply(this, arguments));
  }

  _createClass(MovieForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "form",
        { className: "movie-form", onSubmit: this._handleSubmit.bind(this) },
        _react2.default.createElement(
          "label",
          null,
          "Add a movie"
        ),
        _react2.default.createElement(
          "div",
          { className: "add-movie-form" },
          _react2.default.createElement("input", { placeholder: "Director:", ref: function ref(input) {
              return _this2._director = input;
            } }),
          _react2.default.createElement("input", { placeholder: "Movie:", ref: function ref(input) {
              return _this2._movie = input;
            } })
        ),
        _react2.default.createElement(
          "div",
          { className: "add-movie-actions" },
          _react2.default.createElement(
            "button",
            { type: "submit" },
            "Add movie"
          )
        )
      );
    }
  }, {
    key: "_handleSubmit",
    value: function _handleSubmit(event) {
      event.preventDefault();
      var director = this._director;
      var movie = this._movie;

      this.props.addMovie(director.value, movie.value);
    }
  }]);

  return MovieForm;
}(_react2.default.Component);

exports.default = MovieForm;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _navbar = __webpack_require__(15);

var _navbar2 = _interopRequireDefault(_navbar);

var _movie_form_block = __webpack_require__(6);

var _movie_form_block2 = _interopRequireDefault(_movie_form_block);

var _search_bar_block = __webpack_require__(8);

var _search_bar_block2 = _interopRequireDefault(_search_bar_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  // Initial built-in React functions
  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      showMovies: false,
      movies: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      // JSX
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_navbar2.default, null),
        _react2.default.createElement(
          'div',
          { id: 'body' },
          this.props.children
        )
      );
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
    // this._fetchMovies();


    // Built-in React functions AFTER render

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this._timer = setInterval(function () {
        return _this2.state.movies;
      }, 5000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this._timer);
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(4);

var _reactRouterBootstrap = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainNav = function (_React$Component) {
  _inherits(MainNav, _React$Component);

  function MainNav() {
    _classCallCheck(this, MainNav);

    return _possibleConstructorReturn(this, (MainNav.__proto__ || Object.getPrototypeOf(MainNav)).apply(this, arguments));
  }

  _createClass(MainNav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Navbar,
        { inverse: true, collapseOnSelect: true },
        _react2.default.createElement(
          _reactBootstrap.Navbar.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Navbar.Brand,
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              'Master Seeker'
            )
          ),
          _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
        ),
        _react2.default.createElement(
          _reactBootstrap.Navbar.Collapse,
          null,
          _react2.default.createElement(
            _reactBootstrap.Nav,
            { pullRight: true },
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/add_movie' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 1 },
                'Add Movie'
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/search_movie' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 2 },
                'Search'
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/login' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 3 },
                'Log in'
              )
            )
          )
        )
      );
    }
  }]);

  return MainNav;
}(_react2.default.Component);

exports.default = MainNav;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _movie_form_block = __webpack_require__(6);

var _movie_form_block2 = _interopRequireDefault(_movie_form_block);

var _search_bar_block = __webpack_require__(8);

var _search_bar_block2 = _interopRequireDefault(_search_bar_block);

var _app = __webpack_require__(14);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createElement(
	_reactRouterDom.Route,
	{ path: '/', component: _app2.default },
	_react2.default.createElement(_reactRouterDom.Route, { path: '/add_movie', component: _movie_form_block2.default }),
	_react2.default.createElement(_reactRouterDom.Route, { path: '/search_movie', component: _search_bar_block2.default })
);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this));

    _this.state = {
      query: ''
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: '_handleChange',
    value: function _handleChange(e) {
      var query = e.target.value;
      this.setState({
        query: query
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          {
            controlId: 'formBasicText'
          },
          _react2.default.createElement(
            _reactBootstrap.InputGroup,
            null,
            _react2.default.createElement(_reactBootstrap.FormControl, {
              type: 'text',
              ref: function ref(input) {
                return _this2._query = input;
              },
              placeholder: 'Search movie here...',
              onChange: this._handleChange.bind(this)
            }),
            _react2.default.createElement(
              _reactBootstrap.InputGroup.Addon,
              { onClick: this._handleSubmit.bind(this) },
              _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'search' })
            )
          )
        )
      );
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit(event) {
      event.preventDefault();
      var query = this.state.query;

      this.props.searchQuery(query);
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(1),
    router = __webpack_require__(2).Router();

// DB
var Movie = __webpack_require__(3);

// Routes
router.get('/movies/counter/reset', function (req, res) {
    Movie.resetCount(function (err, nextCount) {
        if (err) console.error(err);
        res.send("<h1>Movie ID successfully reset</h1>");
    });
});

module.exports = router;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(1),
    router = __webpack_require__(2).Router();

// DB
var Movie = __webpack_require__(3);

// Routes
router.post('/movies/add', function (req, res) {
  var result = {
    'director': req.body.director,
    'title': req.body.title,
    'movie_id': req.body.movie_id,
    'created_at': new Date(),
    'updated_at': new Date()
  };
  console.log(result);
  Movie.create(result, function (err, movie) {
    if (err) {
      res.json({ message: 'Something went wrong' });
      res.send(err);
    } else {
      res.send(movie);
    }
  });
});

router.delete('/movies/delete/:movie_id', function (req, res) {
  Movie.deleteOne({ 'movie_id': req.params.movie_id }, function (err) {
    if (err) console.error(err);
  });
});

router.post('/movies/edit/:movie_id', function (req, res) {
  var result = {
    'director': req.body.director,
    'title': req.body.title,
    'updated_at': new Date()
  };
  Movie.findOneAndUpdate({ "movie_id": req.body.movie_id }, { $set: result }, { new: true }, function (err, movie) {
    if (err) {
      res.send(err);
    } else {
      console.log(movie);
      res.send(movie);
    }
  });
});

module.exports = router;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

// PACKAGES
var path = __webpack_require__(1),
    fs = __webpack_require__(12),
    express = __webpack_require__(2),
    bodyParser = __webpack_require__(5);
var port = process.env.PORT || 3000;

// IMPORTS
var indexRoutes = __webpack_require__(11);

// CREATE APP
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// VIEW ENGINES
app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
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
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

// LISTENING TO SERVER
app.listen(port, function () {
  console.log('running at localhost:' + port);
});
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-register");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("mongoose-auto-increment");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ })
/******/ ]);