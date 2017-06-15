
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _movies = __webpack_require__(594);

var _movies2 = _interopRequireDefault(_movies);

var _movie_form = __webpack_require__(654);

var _movie_form2 = _interopRequireDefault(_movie_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/add/movie_form_block.js';


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
            lineNumber: 21
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
            lineNumber: 119
          }
        }, movies);
      }

      // JSX
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, 'Vacas Library'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, 'Current time: ', now.toTimeString()), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, ' ', this._getMoviesTitle(movies.length), ' '), _react2.default.createElement(_movie_form2.default, { addMovie: this._addMovie.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), _react2.default.createElement('button', { onClick: this._handleClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, buttonText), moviesNodes);
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/add/movie_form_block.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/add/movie_form_block.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/components/add/movie_form_block")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _search_bar = __webpack_require__(657);

var _search_bar2 = _interopRequireDefault(_search_bar);

var _movies = __webpack_require__(594);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/search/search_bar_block.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/search/search_bar_block.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/components/search/search_bar_block")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(566);

var _navbar = __webpack_require__(655);

var _navbar2 = _interopRequireDefault(_navbar);

var _movie_form_block = __webpack_require__(572);

var _movie_form_block2 = _interopRequireDefault(_movie_form_block);

var _search_bar_block = __webpack_require__(573);

var _search_bar_block2 = _interopRequireDefault(_search_bar_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/app.js';


var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  // Initial built-in React functions
  function App() {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

    _this.state = {
      showMovies: false,
      movies: []
    };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {

      // JSX
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_navbar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('div', { id: 'body', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, this.props.children));
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/app.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/app.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/components/app")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(626);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/partials/movies.js";


var Movie = function (_React$Component) {
  (0, _inherits3.default)(Movie, _React$Component);

  function Movie(props) {
    (0, _classCallCheck3.default)(this, Movie);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Movie.__proto__ || (0, _getPrototypeOf2.default)(Movie)).call(this, props));

    _this.state = {
      editMovie: false,
      titleValue: _this.props.title,
      directorValue: _this.props.director
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(Movie, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState((0, _defineProperty3.default)({}, name, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.editMovie) {
        // editMovie = this.props.movie;
        return _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement("input", { type: "text", placeholder: "Director:", name: "directorValue", value: this.state.directorValue, ref: function ref(input) {
            return _this2._director = input;
          }, onChange: this.handleInputChange, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }), _react2.default.createElement("input", { type: "text", placeholder: "Movie:", name: "titleValue", value: this.state.titleValue, ref: function ref(input) {
            return _this2._title = input;
          }, onChange: this.handleInputChange, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }), _react2.default.createElement("button", { onClick: this._handleSave.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, "Save changes"));
      } else {
        return _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react2.default.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, this.props.title), _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, "Directed by: ", this.props.director), _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, _react2.default.createElement("a", { href: "#", onClick: this._handleDelete.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, "Delete movie")), _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, _react2.default.createElement("a", { href: "#", onClick: this._handleEdit.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, "Edit movie")));
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/partials/movies.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/partials/movies.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/components/partials/movies")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(566);

var _app = __webpack_require__(593);

var _app2 = _interopRequireDefault(_app);

var _movie_form_block = __webpack_require__(572);

var _movie_form_block2 = _interopRequireDefault(_movie_form_block);

var _search_bar_block = __webpack_require__(573);

var _search_bar_block2 = _interopRequireDefault(_search_bar_block);

var _routes = __webpack_require__(656);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/index.js?entry';
// import BrowserRouter from 'react-router';


var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);

		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	}

	(0, _createClass3.default)(_class, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_app2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement(_reactRouterDom.Route, { path: '/add_movie', component: _movie_form_block2.default, __source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}), _react2.default.createElement(_reactRouterDom.Route, { path: '/search_movie', component: _search_bar_block2.default, __source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/add/movie_form.js";


var MovieForm = function (_React$Component) {
  (0, _inherits3.default)(MovieForm, _React$Component);

  function MovieForm() {
    (0, _classCallCheck3.default)(this, MovieForm);

    return (0, _possibleConstructorReturn3.default)(this, (MovieForm.__proto__ || (0, _getPrototypeOf2.default)(MovieForm)).apply(this, arguments));
  }

  (0, _createClass3.default)(MovieForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement("form", { className: "movie-form", onSubmit: this._handleSubmit.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, "Add a movie"), _react2.default.createElement("div", { className: "add-movie-form", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement("input", { placeholder: "Director:", ref: function ref(input) {
          return _this2._director = input;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }), _react2.default.createElement("input", { placeholder: "Movie:", ref: function ref(input) {
          return _this2._movie = input;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      })), _react2.default.createElement("div", { className: "add-movie-actions", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement("button", { type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "Add movie")));
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/add/movie_form.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/add/movie_form.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/components/add/movie_form")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(614);

var _link = __webpack_require__(653);

var _link2 = _interopRequireDefault(_link);

var _reactRouterBootstrap = __webpack_require__(730);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/partials/navbar.js';
// import {Link} from 'react-router-dom';


var MainNav = function (_React$Component) {
  (0, _inherits3.default)(MainNav, _React$Component);

  function MainNav() {
    (0, _classCallCheck3.default)(this, MainNav);

    return (0, _possibleConstructorReturn3.default)(this, (MainNav.__proto__ || (0, _getPrototypeOf2.default)(MainNav)).apply(this, arguments));
  }

  (0, _createClass3.default)(MainNav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('nav', { className: 'navbar navbar-inverse', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('button', { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('span', { className: 'sr-only', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'Toggle navigation'), _react2.default.createElement('span', { className: 'icon-bar', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('span', { className: 'icon-bar', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('span', { className: 'icon-bar', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), _react2.default.createElement(_link2.default, { prefetch: true, href: '/', replace: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('a', { className: 'navbar-brand', href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Master Seeker'))), _react2.default.createElement('div', { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('ul', { className: 'nav navbar-nav navbar-right', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/add_movie', replace: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Add Movie'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/search_movie', replace: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Search'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/login', replace: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'Log In')))))));
    }
  }]);

  return MainNav;
}(_react2.default.Component);

exports.default = MainNav;


{/*             <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to='/'>
                  Master Seeker
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to='/add_movie'>
                  <NavItem eventKey={1}>Add Movie</NavItem>
                </LinkContainer> 
                <LinkContainer to='/search_movie'>
                  <NavItem eventKey={2}>Search</NavItem>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <NavItem eventKey={3}>Log in</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
   
   
   
          <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link prefetch href="/" replace>
                <a className="navbar-brand" href="#">Master Seeker</a>
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <Link prefetch href="/add_movie" replace>
                  <li><a>Add Movie</a></li>
                </Link>
                <Link prefetch href="/search_movie" replace>
                  <li><a>Search</a></li>
                </Link>
                <Link prefetch href="/login" replace>
                  <li><a>Log In</a></li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
   */}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/partials/navbar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/partials/navbar.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/components/partials/navbar")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(566);

var _movie_form_block = __webpack_require__(572);

var _movie_form_block2 = _interopRequireDefault(_movie_form_block);

var _search_bar_block = __webpack_require__(573);

var _search_bar_block2 = _interopRequireDefault(_search_bar_block);

var _app = __webpack_require__(593);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/routes.js';


module.exports = _react2.default.createElement(_app2.default, {
	__source: {
		fileName: _jsxFileName,
		lineNumber: 8
	}
}, _react2.default.createElement(_reactRouterDom.Route, { path: '/add_movie', component: _movie_form_block2.default, __source: {
		fileName: _jsxFileName,
		lineNumber: 9
	}
}), _react2.default.createElement(_reactRouterDom.Route, { path: '/search_movie', component: _search_bar_block2.default, __source: {
		fileName: _jsxFileName,
		lineNumber: 10
	}
}));

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/routes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/routes.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/components/routes")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = __webpack_require__(614);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/search/search_bar.js';


var SearchBar = function (_React$Component) {
  (0, _inherits3.default)(SearchBar, _React$Component);

  function SearchBar() {
    (0, _classCallCheck3.default)(this, SearchBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchBar.__proto__ || (0, _getPrototypeOf2.default)(SearchBar)).call(this));

    _this.state = {
      query: ''
    };
    return _this;
  }

  (0, _createClass3.default)(SearchBar, [{
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

      return _react2.default.createElement('form', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_reactBootstrap.FormGroup, {
        controlId: 'formBasicText',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_reactBootstrap.InputGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_reactBootstrap.FormControl, {
        type: 'text',
        ref: function ref(input) {
          return _this2._query = input;
        },
        placeholder: 'Search movie here...',
        onChange: this._handleChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_reactBootstrap.InputGroup.Addon, { onClick: this._handleSubmit.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'search', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })))));
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/search/search_bar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/components/search/search_bar.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/components/search/search_bar")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(624);


/***/ })

},[753]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvYWRkL21vdmllX2Zvcm1fYmxvY2suanM/ZWM3NmEzNyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2hfYmFyX2Jsb2NrLmpzP2VjNzZhMzciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9hcHAuanM/ZWM3NmEzNyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3BhcnRpYWxzL21vdmllcy5qcz9lYzc2YTM3Iiwid2VicGFjazovLy8uL3BhZ2VzP2VjNzZhMzciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9hZGQvbW92aWVfZm9ybS5qcz9lYzc2YTM3Iiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLmpzP2VjNzZhMzciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9yb3V0ZXMuanM/ZWM3NmEzNyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2hfYmFyLmpzP2VjNzZhMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb3ZpZSBmcm9tICcuLi9wYXJ0aWFscy9tb3ZpZXMnO1xuaW1wb3J0IE1vdmllRm9ybSBmcm9tICcuL21vdmllX2Zvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZUZvcm1CbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAvLyBJbml0aWFsIGJ1aWx0LWluIFJlYWN0IGZ1bmN0aW9uc1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd01vdmllczogZmFsc2UsXG4gICAgICBtb3ZpZXM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9ucyBmb3IgQXBwIENvbXBvbmVudFxuICBfZ2V0TW92aWVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm1vdmllcy5tYXAoKG1vdmllKSA9PiB7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxNb3ZpZVxuICAgICAgICAgIG1vdmllPXttb3ZpZX1cbiAgICAgICAgICBkaXJlY3Rvcj17bW92aWUuZGlyZWN0b3J9XG4gICAgICAgICAgdGl0bGU9e21vdmllLnRpdGxlfVxuICAgICAgICAgIG1vdmllX2lkPXttb3ZpZS5tb3ZpZV9pZH1cbiAgICAgICAgICBrZXk9e21vdmllLm1vdmllX2lkfVxuICAgICAgICAgIG9uRGVsZXRlPXt0aGlzLl9kZWxldGVNb3ZpZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uU2F2ZT17dGhpcy5fc2F2ZUVkaXQuYmluZCh0aGlzKX0vPlxuICAgICAgICApXG4gICAgfSk7XG4gIH1cblxuICBfZ2V0TW92aWVzVGl0bGUobW92aWVDb3VudCkge1xuICAgIGlmKG1vdmllQ291bnQgPT09IDApe1xuICAgICAgcmV0dXJuICdObyBtb3ZpZXMgaW4gbGlzdCBZRVQhJ1xuICAgIH0gZWxzZSBpZiAobW92aWVDb3VudCA9PT0gMSkge1xuICAgICAgcmV0dXJuICcxIG1vdmllIGluIGxpc3QnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHttb3ZpZUNvdW50fSBtb3ZpZXMgaW4gbGlzdGBcbiAgICB9XG4gIH1cblxuICAvLyBvbkNsaWNrIG1ldGhvZHNcbiAgX2hhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd01vdmllczogIXRoaXMuc3RhdGUuc2hvd01vdmllc1xuICAgIH0pO1xuICB9XG5cbiAgX2FkZE1vdmllKGRpcmVjdG9yLCB0aXRsZSl7XG4gICAgY29uc3QgbW92aWUgPSB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRpcmVjdG9yXG4gICAgfTtcblxuICAgIGpRdWVyeS5hamF4KHtcbiAgICAgIHVybDogJy9tb3ZpZXMvYWRkJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YTogbW92aWUsXG4gICAgICBzdWNjZXNzOiAobmV3TW92aWUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW92aWVzOiB0aGlzLnN0YXRlLm1vdmllcy5jb25jYXQoW25ld01vdmllXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfZGVsZXRlTW92aWUobW92aWUpIHtcbiAgICBqUXVlcnkuYWpheCh7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgdXJsOiBgL21vdmllcy9kZWxldGUvJHttb3ZpZS5tb3ZpZV9pZH1gXG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3ZpZXMgPSBbLi4udGhpcy5zdGF0ZS5tb3ZpZXNdO1xuICAgIGNvbnN0IG1vdmllSW5kZXggPSBtb3ZpZXMuaW5kZXhPZihtb3ZpZSk7XG4gICAgbW92aWVzLnNwbGljZShtb3ZpZUluZGV4LCAxKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe21vdmllc30pO1xuICB9XG5cblxuICAvLyBGb3IgZWRpdGluZ1xuICBfc2F2ZUVkaXQoZGlyZWN0b3IsIHRpdGxlLCBwcmV2aW91c0RhdGEpIHtcbiAgICBsZXQgbW92aWVfaWQgPSBwcmV2aW91c0RhdGEubW92aWVfaWQ7XG4gICAgY29uc3QgdXBkYXRlZElucHV0ID0ge1xuICAgICAgdGl0bGUsXG4gICAgICBkaXJlY3RvcixcbiAgICAgIFwibW92aWVfaWRcIjogbW92aWVfaWRcbiAgICB9O1xuXG4gICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgdXJsOiBgL21vdmllcy9lZGl0LyR7bW92aWVfaWR9YCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YTogdXBkYXRlZElucHV0LFxuICAgICAgc3VjY2VzczogKHVwZGF0ZWRNb3ZpZSkgPT4ge1xuICAgICAgICBjb25zdCBtb3ZpZXMgPSBbLi4udGhpcy5zdGF0ZS5tb3ZpZXNdO1xuICAgICAgICBjb25zdCBtb3ZpZUluZGV4ID0gbW92aWVzLmluZGV4T2YocHJldmlvdXNEYXRhKTtcbiAgICAgICAgbW92aWVzW21vdmllSW5kZXhdID0gdXBkYXRlZE1vdmllO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdmllc30pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG5cbiAgICAvLyBWYXJpYWJsZXNcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgbW92aWVzID0gdGhpcy5fZ2V0TW92aWVzKCk7XG5cbiAgICBsZXQgbW92aWVzTm9kZXM7XG5cbiAgICBsZXQgYnV0dG9uVGV4dCA9ICdTaG93IG1vdmllcyc7XG5cbiAgICAvLyBDb25kaXRpb25hbHNcbiAgICBpZih0aGlzLnN0YXRlLnNob3dNb3ZpZXMpe1xuICAgICAgYnV0dG9uVGV4dCA9ICdIaWRlIG1vdmllcyc7XG4gICAgICBtb3ZpZXNOb2RlcyA9IDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPnttb3ZpZXN9PC9kaXY+O1xuICAgIH1cblxuICAgIC8vIEpTWFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5WYWNhcyBMaWJyYXJ5PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEN1cnJlbnQgdGltZToge25vdy50b1RpbWVTdHJpbmcoKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyPiB7dGhpcy5fZ2V0TW92aWVzVGl0bGUobW92aWVzLmxlbmd0aCl9IDwvaDI+XG4gICAgICAgICAgPE1vdmllRm9ybSBhZGRNb3ZpZT17dGhpcy5fYWRkTW92aWUuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5faGFuZGxlQ2xpY2suYmluZCh0aGlzKX0+e2J1dHRvblRleHR9PC9idXR0b24+XG4gICAgICAgICAge21vdmllc05vZGVzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICB0aGlzLl9mZXRjaE1vdmllcygpO1xuICB9XG5cbiAgX2ZldGNoTW92aWVzKCkge1xuICAgIC8vIGpRdWVyeS5hamF4KHtcbiAgICAvLyAgIG1ldGhvZDogJ0dFVCcsXG4gICAgLy8gICB1cmw6ICdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLzU1MC9jcmVkaXRzP2FwaV9rZXk9NGEzMGE4YzY1ODg4YzFmYWMyYTM2ZTQ1NmVjYmE5YjYnLFxuICAgIC8vICAgc3VjY2VzczogKG1vdmllcykgPT4ge1xuICAgIC8vICAgICBtb3ZpZXMuY3Jldy5tYXAoKGNyZXcpID0+IHtcbiAgICAvLyAgICAgICBpZiAoY3Jldy5qb2IgPT0gJ0RpcmVjdG9yJyB8fCBjcmV3LmpvYiA9PSAnUHJvZHVjZXInKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhjcmV3KTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHttb3ZpZXN9KVxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9tb3ZpZXMnLFxuICAgICAgc3VjY2VzczogKG1vdmllcykgPT4ge1xuICAgICAgICBtb3ZpZXMubWFwKChtb3ZpZSk9PntcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1vdmllczogdGhpcy5zdGF0ZS5tb3ZpZXMuY29uY2F0KFttb3ZpZV0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIEJ1aWx0LWluIFJlYWN0IGZ1bmN0aW9ucyBBRlRFUiByZW5kZXJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLl90aW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMuc3RhdGUubW92aWVzLCA1MDAwKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbXBvbmVudHMvYWRkL21vdmllX2Zvcm1fYmxvY2suanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL3NlYXJjaF9iYXInO1xuaW1wb3J0IE1vdmllIGZyb20gJy4uL3BhcnRpYWxzL21vdmllcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhckJsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiBbXVxuICAgIH07XG4gIH1cblxuIF9nZXRNb3ZpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUubW92aWVzLm1hcCgobW92aWUpID0+IHtcbiAgICAgIHJldHVybihcbiAgICAgICAgPE1vdmllXG4gICAgICAgICAgbW92aWU9e21vdmllfVxuICAgICAgICAgIGRpcmVjdG9yPXttb3ZpZS5kaXJlY3Rvcn1cbiAgICAgICAgICB0aXRsZT17bW92aWUudGl0bGV9XG4gICAgICAgICAgbW92aWVfaWQ9e21vdmllLm1vdmllX2lkfVxuICAgICAgICAgIGtleT17bW92aWUubW92aWVfaWR9XG4gICAgICAgICAgb25EZWxldGU9e3RoaXMuX2RlbGV0ZU1vdmllLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25TYXZlPXt0aGlzLl9zYXZlRWRpdC5iaW5kKHRoaXMpfS8+XG4gICAgICAgIClcbiAgICB9KTtcbiAgfVxuXG4gICAgX2RlbGV0ZU1vdmllKG1vdmllKSB7XG4gICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIHVybDogYC9tb3ZpZXMvZGVsZXRlLyR7bW92aWUubW92aWVfaWR9YFxuICAgIH0pO1xuXG4gICAgY29uc3QgbW92aWVzID0gWy4uLnRoaXMuc3RhdGUubW92aWVzXTtcbiAgICBjb25zdCBtb3ZpZUluZGV4ID0gbW92aWVzLmluZGV4T2YobW92aWUpO1xuICAgIG1vdmllcy5zcGxpY2UobW92aWVJbmRleCwgMSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHttb3ZpZXN9KTtcbiAgfVxuXG5cbiAgLy8gRm9yIGVkaXRpbmdcbiAgX3NhdmVFZGl0KGRpcmVjdG9yLCB0aXRsZSwgcHJldmlvdXNEYXRhKSB7XG4gICAgbGV0IG1vdmllX2lkID0gcHJldmlvdXNEYXRhLm1vdmllX2lkO1xuICAgIGNvbnN0IHVwZGF0ZWRJbnB1dCA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGlyZWN0b3IsXG4gICAgICBcIm1vdmllX2lkXCI6IG1vdmllX2lkXG4gICAgfTtcblxuICAgIGpRdWVyeS5hamF4KHtcbiAgICAgIHVybDogYC9tb3ZpZXMvZWRpdC8ke21vdmllX2lkfWAsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHVwZGF0ZWRJbnB1dCxcbiAgICAgIHN1Y2Nlc3M6ICh1cGRhdGVkTW92aWUpID0+IHtcbiAgICAgICAgY29uc3QgbW92aWVzID0gWy4uLnRoaXMuc3RhdGUubW92aWVzXTtcbiAgICAgICAgY29uc3QgbW92aWVJbmRleCA9IG1vdmllcy5pbmRleE9mKHByZXZpb3VzRGF0YSk7XG4gICAgICAgIG1vdmllc1ttb3ZpZUluZGV4XSA9IHVwZGF0ZWRNb3ZpZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHttb3ZpZXN9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9zZWFyY2gocXVlcnkpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW92aWVzOiBbXVxuICAgIH0pO1xuICAgIGpRdWVyeS5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6IGAvc2VhcmNoLyR7cXVlcnl9YCxcbiAgICAgIHN1Y2Nlc3M6IChtb3ZpZXMpID0+IHtcbiAgICAgICAgbW92aWVzLm1hcCgobW92aWUpPT57XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgXHRtb3ZpZXM6IHRoaXMuc3RhdGUubW92aWVzLmNvbmNhdChbbW92aWVdKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gIFx0Y29uc3QgbW92aWVzID0gdGhpcy5fZ2V0TW92aWVzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgIFx0PGRpdj5cblx0ICAgIFx0PFNlYXJjaEJhciBzZWFyY2hRdWVyeT17dGhpcy5fc2VhcmNoLmJpbmQodGhpcyl9Lz5cblx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1saXN0XCI+e21vdmllc308L2Rpdj5cbiAgICBcdDwvZGl2PlxuICAgICAgKVxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2hfYmFyX2Jsb2NrLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIExpbmssIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBNYWluTmF2IGZyb20gJy4vcGFydGlhbHMvbmF2YmFyJztcbmltcG9ydCBNb3ZpZUZvcm1CbG9jayBmcm9tICcuL2FkZC9tb3ZpZV9mb3JtX2Jsb2NrJztcbmltcG9ydCBTZWFyY2hCYXJCbG9jayBmcm9tICcuL3NlYXJjaC9zZWFyY2hfYmFyX2Jsb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIC8vIEluaXRpYWwgYnVpbHQtaW4gUmVhY3QgZnVuY3Rpb25zXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93TW92aWVzOiBmYWxzZSxcbiAgICAgIG1vdmllczogW11cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCl7XG5cbiAgICAvLyBKU1hcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNYWluTmF2Lz5cbiAgICAgICAgICA8ZGl2IGlkPSdib2R5Jz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gICAgICBcbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgLy8gdGhpcy5fZmV0Y2hNb3ZpZXMoKTtcbiAgfVxuXG5cbiAgLy8gQnVpbHQtaW4gUmVhY3QgZnVuY3Rpb25zIEFGVEVSIHJlbmRlclxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuX3RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5zdGF0ZS5tb3ZpZXMsIDUwMDApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29tcG9uZW50cy9hcHAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0TW92aWU6IGZhbHNlLFxuICAgICAgdGl0bGVWYWx1ZTogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgIGRpcmVjdG9yVmFsdWU6IHRoaXMucHJvcHMuZGlyZWN0b3IsXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcblxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5lZGl0TW92aWUpe1xuICAgICAgLy8gZWRpdE1vdmllID0gdGhpcy5wcm9wcy5tb3ZpZTtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRpcmVjdG9yOlwiIG5hbWU9XCJkaXJlY3RvclZhbHVlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZGlyZWN0b3JWYWx1ZX0gcmVmPXsoaW5wdXQpID0+IHRoaXMuX2RpcmVjdG9yID0gaW5wdXR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfS8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNb3ZpZTpcIiBuYW1lPVwidGl0bGVWYWx1ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlVmFsdWV9IHJlZj17KGlucHV0KSA9PiB0aGlzLl90aXRsZSA9IGlucHV0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0vPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5faGFuZGxlU2F2ZS5iaW5kKHRoaXMpfT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRGlyZWN0ZWQgYnk6IHt0aGlzLnByb3BzLmRpcmVjdG9yfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5faGFuZGxlRGVsZXRlLmJpbmQodGhpcyl9PkRlbGV0ZSBtb3ZpZTwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUVkaXQuYmluZCh0aGlzKX0+RWRpdCBtb3ZpZTwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlRGVsZXRlKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZT8nKSl7XG4gICAgICB0aGlzLnByb3BzLm9uRGVsZXRlKHRoaXMucHJvcHMubW92aWUpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVFZGl0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdE1vdmllOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlU2F2ZShldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRNb3ZpZTogZmFsc2VcbiAgICB9KTtcblxuICAgIGxldCBkaXJlY3RvciA9IHRoaXMuX2RpcmVjdG9yO1xuICAgIGxldCB0aXRsZSA9IHRoaXMuX3RpdGxlO1xuXG4gICAgdGhpcy5wcm9wcy5vblNhdmUoZGlyZWN0b3IudmFsdWUsIHRpdGxlLnZhbHVlLCB0aGlzLnByb3BzLm1vdmllKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnN0YXRlLm1vdmllcywgMTAwMCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnRzL3BhcnRpYWxzL21vdmllcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vIGltcG9ydCBCcm93c2VyUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQge1JvdXRlLCBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgYnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCBNb3ZpZUZvcm1CbG9jayBmcm9tICcuL2NvbXBvbmVudHMvYWRkL21vdmllX2Zvcm1fYmxvY2snO1xuaW1wb3J0IFNlYXJjaEJhckJsb2NrIGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoX2Jhcl9ibG9jayc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0XHRyZW5kZXIoKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxBcHA+XG5cdFx0XHRcdCAgPFJvdXRlIHBhdGg9Jy9hZGRfbW92aWUnIGNvbXBvbmVudD17TW92aWVGb3JtQmxvY2t9Lz5cblx0XHRcdFx0ICA8Um91dGUgcGF0aD0nL3NlYXJjaF9tb3ZpZScgY29tcG9uZW50PXtTZWFyY2hCYXJCbG9ja30vPlxuXHRcdFx0ICBcdDwvQXBwPlxuXHRcdCAgXHQpXG5cdFx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibW92aWUtZm9ybVwiIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgIDxsYWJlbD5BZGQgYSBtb3ZpZTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLW1vdmllLWZvcm1cIj5cbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJEaXJlY3RvcjpcIiByZWY9eyhpbnB1dCkgPT4gdGhpcy5fZGlyZWN0b3IgPSBpbnB1dH0gLz5cbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJNb3ZpZTpcIiByZWY9eyhpbnB1dCkgPT4gdGhpcy5fbW92aWUgPSBpbnB1dH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLW1vdmllLWFjdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIEFkZCBtb3ZpZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cblxuICBfaGFuZGxlU3VibWl0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBkaXJlY3RvciA9IHRoaXMuX2RpcmVjdG9yO1xuICAgIGxldCBtb3ZpZSA9IHRoaXMuX21vdmllO1xuXG4gICAgdGhpcy5wcm9wcy5hZGRNb3ZpZShkaXJlY3Rvci52YWx1ZSwgbW92aWUudmFsdWUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnRzL2FkZC9tb3ZpZV9mb3JtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TmF2YmFyLCAgTmF2LCBOYXZJdGVtLCBOYXZEcm9wZG93biwgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuLy8gaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge0xpbmtDb250YWluZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIiByZXBsYWNlPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPk1hc3RlciBTZWVrZXI8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cImJzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9hZGRfbW92aWVcIiByZXBsYWNlPlxuICAgICAgICAgICAgICAgIDxsaT48YT5BZGQgTW92aWU8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL3NlYXJjaF9tb3ZpZVwiIHJlcGxhY2U+XG4gICAgICAgICAgICAgICAgPGxpPjxhPlNlYXJjaDwvYT48L2xpPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvbG9naW5cIiByZXBsYWNlPlxuICAgICAgICAgICAgICAgIDxsaT48YT5Mb2cgSW48L2E+PC9saT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbnsvKiAgICAgICAgICAgICA8TmF2YmFyIGludmVyc2UgY29sbGFwc2VPblNlbGVjdD5cbiAgICAgICAgICA8TmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICAgICAgICBNYXN0ZXIgU2Vla2VyXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cbiAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICAgIDxOYXYgcHVsbFJpZ2h0PlxuICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz0nL2FkZF9tb3ZpZSc+XG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezF9PkFkZCBNb3ZpZTwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPiBcbiAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89Jy9zZWFyY2hfbW92aWUnPlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsyfT5TZWFyY2g8L05hdkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89Jy9sb2dpbic+XG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezN9PkxvZyBpbjwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvTmF2YmFyPlxuXG5cblxuXG5cblxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItaW52ZXJzZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCIgcmVwbGFjZT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5NYXN0ZXIgU2Vla2VyPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvYWRkX21vdmllXCIgcmVwbGFjZT5cbiAgICAgICAgICAgICAgICA8bGk+PGE+QWRkIE1vdmllPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9zZWFyY2hfbW92aWVcIiByZXBsYWNlPlxuICAgICAgICAgICAgICAgIDxsaT48YT5TZWFyY2g8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL2xvZ2luXCIgcmVwbGFjZT5cbiAgICAgICAgICAgICAgICA8bGk+PGE+TG9nIEluPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4qL31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnRzL3BhcnRpYWxzL25hdmJhci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JvdXRlLCBCcm93c2VyUm91dGVyIGFzIFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgTW92aWVGb3JtQmxvY2sgZnJvbSAnLi9hZGQvbW92aWVfZm9ybV9ibG9jayc7XG5pbXBvcnQgU2VhcmNoQmFyQmxvY2sgZnJvbSAnLi9zZWFyY2gvc2VhcmNoX2Jhcl9ibG9jayc7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxubW9kdWxlLmV4cG9ydHMgPSAoXG5cdDxBcHA+XG5cdCAgPFJvdXRlIHBhdGg9Jy9hZGRfbW92aWUnIGNvbXBvbmVudD17TW92aWVGb3JtQmxvY2t9Lz5cblx0ICA8Um91dGUgcGF0aD0nL3NlYXJjaF9tb3ZpZScgY29tcG9uZW50PXtTZWFyY2hCYXJCbG9ja30vPlxuICBcdDwvQXBwPlx0XG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbXBvbmVudHMvcm91dGVzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtGb3JtR3JvdXAsIElucHV0R3JvdXAsIEZvcm1Db250cm9sLCBHbHlwaGljb24sIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcXVlcnk6ICcnXG4gICAgfTtcbiAgfVxuXG4gIF9oYW5kbGVDaGFuZ2UoZSl7XG4gICAgbGV0IHF1ZXJ5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeTogcXVlcnlcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPEZvcm1Hcm91cFxuICAgICAgICAgIGNvbnRyb2xJZD1cImZvcm1CYXNpY1RleHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHJlZj17KGlucHV0KT0+IHRoaXMuX3F1ZXJ5ID0gaW5wdXR9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG1vdmllIGhlcmUuLi5cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFkZG9uIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPEdseXBoaWNvbiBnbHlwaD1cInNlYXJjaFwiLz5cbiAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFkZG9uPlxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L2Zvcm0+XG4gICAgICApXG4gIH1cblxuICBfaGFuZGxlU3VibWl0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBxdWVyeSA9IHRoaXMuc3RhdGUucXVlcnk7XG4gICAgXG4gICAgdGhpcy5wcm9wcy5zZWFyY2hRdWVyeShxdWVyeSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaF9iYXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFEQTtBQUdBO0FBRUE7QUFDQTs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFTQTs7OztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFGQTtBQUdBO0FBRUE7QUFFQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQVRBOzs7O0FBV0E7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBWEE7Ozs7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUtBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBVkE7QUFhQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTs7OztBQUlBO0FBQUE7Ozs7O0FBektBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVNBOzs7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBWEE7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQVZBOzs7O0FBYUE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7OztBQXZGQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFEQTtBQUdBOzs7OztBQUlBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7QUFRQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7Ozs7QUFJQTtBQUFBOzs7OztBQXBDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQVRBO0FBV0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7Ozs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBOzs7O0FBRUE7QUFFQTtBQUFBO0FBR0E7QUFGQTs7OztBQUlBO0FBRUE7QUFBQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBOzs7O0FBSUE7QUFBQTs7Ozs7QUFsRkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQU5BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBOzs7Ozs7QUFMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7O0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQXZCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBekJBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFpQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRkE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQU1BO0FBTkE7Ozs7O0FBUUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUExQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        