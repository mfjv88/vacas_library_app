
          window.__NEXT_REGISTER_PAGE('/add', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(623);

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

/***/ 651:
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

/***/ 752:
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

var _movies = __webpack_require__(590);

var _movies2 = _interopRequireDefault(_movies);

var _movie_form = __webpack_require__(651);

var _movie_form2 = _interopRequireDefault(_movie_form);

var _index = __webpack_require__(753);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/add.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/add.js"); } } })();
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
    })(module.exports.default || module.exports, "/add")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: Expected corresponding JSX closing tag for <link> (31:10)\n\n\u001b[0m \u001b[90m 29 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mlink\u001b[39m rel\u001b[33m=\u001b[39m\u001b[32m\"stylesheet\"\u001b[39m href\u001b[33m=\u001b[39m\u001b[32m\"https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css\"\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 30 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mlink\u001b[39m rel\u001b[33m=\u001b[39m\u001b[32m\"stylesheet\"\u001b[39m href\u001b[33m=\u001b[39m\u001b[32m\"/assets/css/style.css\"\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 31 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mHead\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 32 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mMainNav\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 33 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m id\u001b[33m=\u001b[39m\u001b[32m'body'\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 34 | \u001b[39m            {\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mchildren}\u001b[0m\n");

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(752);


/***/ })

},[754]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hZGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3BhcnRpYWxzL21vdmllcy5qcz8zNTY1MDliIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvYWRkL21vdmllX2Zvcm0uanM/MzU2NTA5YiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hZGQuanM/ZDkwODAzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0TW92aWU6IGZhbHNlLFxuICAgICAgdGl0bGVWYWx1ZTogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgIGRpcmVjdG9yVmFsdWU6IHRoaXMucHJvcHMuZGlyZWN0b3IsXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcblxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5lZGl0TW92aWUpe1xuICAgICAgLy8gZWRpdE1vdmllID0gdGhpcy5wcm9wcy5tb3ZpZTtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRpcmVjdG9yOlwiIG5hbWU9XCJkaXJlY3RvclZhbHVlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZGlyZWN0b3JWYWx1ZX0gcmVmPXsoaW5wdXQpID0+IHRoaXMuX2RpcmVjdG9yID0gaW5wdXR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfS8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNb3ZpZTpcIiBuYW1lPVwidGl0bGVWYWx1ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlVmFsdWV9IHJlZj17KGlucHV0KSA9PiB0aGlzLl90aXRsZSA9IGlucHV0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0vPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5faGFuZGxlU2F2ZS5iaW5kKHRoaXMpfT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRGlyZWN0ZWQgYnk6IHt0aGlzLnByb3BzLmRpcmVjdG9yfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5faGFuZGxlRGVsZXRlLmJpbmQodGhpcyl9PkRlbGV0ZSBtb3ZpZTwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUVkaXQuYmluZCh0aGlzKX0+RWRpdCBtb3ZpZTwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlRGVsZXRlKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZT8nKSl7XG4gICAgICB0aGlzLnByb3BzLm9uRGVsZXRlKHRoaXMucHJvcHMubW92aWUpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVFZGl0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdE1vdmllOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlU2F2ZShldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRNb3ZpZTogZmFsc2VcbiAgICB9KTtcblxuICAgIGxldCBkaXJlY3RvciA9IHRoaXMuX2RpcmVjdG9yO1xuICAgIGxldCB0aXRsZSA9IHRoaXMuX3RpdGxlO1xuXG4gICAgdGhpcy5wcm9wcy5vblNhdmUoZGlyZWN0b3IudmFsdWUsIHRpdGxlLnZhbHVlLCB0aGlzLnByb3BzLm1vdmllKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnN0YXRlLm1vdmllcywgMTAwMCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnRzL3BhcnRpYWxzL21vdmllcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1vdmllLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICA8bGFiZWw+QWRkIGEgbW92aWU8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1tb3ZpZS1mb3JtXCI+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRGlyZWN0b3I6XCIgcmVmPXsoaW5wdXQpID0+IHRoaXMuX2RpcmVjdG9yID0gaW5wdXR9IC8+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTW92aWU6XCIgcmVmPXsoaW5wdXQpID0+IHRoaXMuX21vdmllID0gaW5wdXR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1tb3ZpZS1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBBZGQgbW92aWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG5cbiAgX2hhbmRsZVN1Ym1pdChldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZGlyZWN0b3IgPSB0aGlzLl9kaXJlY3RvcjtcbiAgICBsZXQgbW92aWUgPSB0aGlzLl9tb3ZpZTtcblxuICAgIHRoaXMucHJvcHMuYWRkTW92aWUoZGlyZWN0b3IudmFsdWUsIG1vdmllLnZhbHVlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29tcG9uZW50cy9hZGQvbW92aWVfZm9ybS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW92aWUgZnJvbSAnLi9jb21wb25lbnRzL3BhcnRpYWxzL21vdmllcyc7XG5pbXBvcnQgTW92aWVGb3JtIGZyb20gJy4vY29tcG9uZW50cy9hZGQvbW92aWVfZm9ybSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZUZvcm1CbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAvLyBJbml0aWFsIGJ1aWx0LWluIFJlYWN0IGZ1bmN0aW9uc1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd01vdmllczogZmFsc2UsXG4gICAgICBtb3ZpZXM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9ucyBmb3IgQXBwIENvbXBvbmVudFxuICBfZ2V0TW92aWVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm1vdmllcy5tYXAoKG1vdmllKSA9PiB7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxNb3ZpZVxuICAgICAgICAgIG1vdmllPXttb3ZpZX1cbiAgICAgICAgICBkaXJlY3Rvcj17bW92aWUuZGlyZWN0b3J9XG4gICAgICAgICAgdGl0bGU9e21vdmllLnRpdGxlfVxuICAgICAgICAgIG1vdmllX2lkPXttb3ZpZS5tb3ZpZV9pZH1cbiAgICAgICAgICBrZXk9e21vdmllLm1vdmllX2lkfVxuICAgICAgICAgIG9uRGVsZXRlPXt0aGlzLl9kZWxldGVNb3ZpZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uU2F2ZT17dGhpcy5fc2F2ZUVkaXQuYmluZCh0aGlzKX0vPlxuICAgICAgICApXG4gICAgfSk7XG4gIH1cblxuICBfZ2V0TW92aWVzVGl0bGUobW92aWVDb3VudCkge1xuICAgIGlmKG1vdmllQ291bnQgPT09IDApe1xuICAgICAgcmV0dXJuICdObyBtb3ZpZXMgaW4gbGlzdCBZRVQhJ1xuICAgIH0gZWxzZSBpZiAobW92aWVDb3VudCA9PT0gMSkge1xuICAgICAgcmV0dXJuICcxIG1vdmllIGluIGxpc3QnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHttb3ZpZUNvdW50fSBtb3ZpZXMgaW4gbGlzdGBcbiAgICB9XG4gIH1cblxuICAvLyBvbkNsaWNrIG1ldGhvZHNcbiAgX2hhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd01vdmllczogIXRoaXMuc3RhdGUuc2hvd01vdmllc1xuICAgIH0pO1xuICB9XG5cbiAgX2FkZE1vdmllKGRpcmVjdG9yLCB0aXRsZSl7XG4gICAgY29uc3QgbW92aWUgPSB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRpcmVjdG9yXG4gICAgfTtcblxuICAgIGpRdWVyeS5hamF4KHtcbiAgICAgIHVybDogJy9tb3ZpZXMvYWRkJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YTogbW92aWUsXG4gICAgICBzdWNjZXNzOiAobmV3TW92aWUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW92aWVzOiB0aGlzLnN0YXRlLm1vdmllcy5jb25jYXQoW25ld01vdmllXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfZGVsZXRlTW92aWUobW92aWUpIHtcbiAgICBqUXVlcnkuYWpheCh7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgdXJsOiBgL21vdmllcy9kZWxldGUvJHttb3ZpZS5tb3ZpZV9pZH1gXG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3ZpZXMgPSBbLi4udGhpcy5zdGF0ZS5tb3ZpZXNdO1xuICAgIGNvbnN0IG1vdmllSW5kZXggPSBtb3ZpZXMuaW5kZXhPZihtb3ZpZSk7XG4gICAgbW92aWVzLnNwbGljZShtb3ZpZUluZGV4LCAxKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe21vdmllc30pO1xuICB9XG5cblxuICAvLyBGb3IgZWRpdGluZ1xuICBfc2F2ZUVkaXQoZGlyZWN0b3IsIHRpdGxlLCBwcmV2aW91c0RhdGEpIHtcbiAgICBsZXQgbW92aWVfaWQgPSBwcmV2aW91c0RhdGEubW92aWVfaWQ7XG4gICAgY29uc3QgdXBkYXRlZElucHV0ID0ge1xuICAgICAgdGl0bGUsXG4gICAgICBkaXJlY3RvcixcbiAgICAgIFwibW92aWVfaWRcIjogbW92aWVfaWRcbiAgICB9O1xuXG4gICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgdXJsOiBgL21vdmllcy9lZGl0LyR7bW92aWVfaWR9YCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YTogdXBkYXRlZElucHV0LFxuICAgICAgc3VjY2VzczogKHVwZGF0ZWRNb3ZpZSkgPT4ge1xuICAgICAgICBjb25zdCBtb3ZpZXMgPSBbLi4udGhpcy5zdGF0ZS5tb3ZpZXNdO1xuICAgICAgICBjb25zdCBtb3ZpZUluZGV4ID0gbW92aWVzLmluZGV4T2YocHJldmlvdXNEYXRhKTtcbiAgICAgICAgbW92aWVzW21vdmllSW5kZXhdID0gdXBkYXRlZE1vdmllO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdmllc30pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG5cbiAgICAvLyBWYXJpYWJsZXNcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgbW92aWVzID0gdGhpcy5fZ2V0TW92aWVzKCk7XG5cbiAgICBsZXQgbW92aWVzTm9kZXM7XG5cbiAgICBsZXQgYnV0dG9uVGV4dCA9ICdTaG93IG1vdmllcyc7XG5cbiAgICAvLyBDb25kaXRpb25hbHNcbiAgICBpZih0aGlzLnN0YXRlLnNob3dNb3ZpZXMpe1xuICAgICAgYnV0dG9uVGV4dCA9ICdIaWRlIG1vdmllcyc7XG4gICAgICBtb3ZpZXNOb2RlcyA9IDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPnttb3ZpZXN9PC9kaXY+O1xuICAgIH1cblxuICAgIC8vIEpTWFxuICAgIHJldHVybiAoXG4gICAgICA8QXBwPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlZhY2FzIExpYnJhcnk8L2gxPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEN1cnJlbnQgdGltZToge25vdy50b1RpbWVTdHJpbmcoKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMj4ge3RoaXMuX2dldE1vdmllc1RpdGxlKG1vdmllcy5sZW5ndGgpfSA8L2gyPlxuICAgICAgICAgICAgPE1vdmllRm9ybSBhZGRNb3ZpZT17dGhpcy5fYWRkTW92aWUuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9oYW5kbGVDbGljay5iaW5kKHRoaXMpfT57YnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICAgIHttb3ZpZXNOb2Rlc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0FwcD5cbiAgICApO1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAgIHRoaXMuX2ZldGNoTW92aWVzKCk7XG4gIH1cblxuICBfZmV0Y2hNb3ZpZXMoKSB7XG4gICAgLy8galF1ZXJ5LmFqYXgoe1xuICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcbiAgICAvLyAgIHVybDogJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvNTUwL2NyZWRpdHM/YXBpX2tleT00YTMwYThjNjU4ODhjMWZhYzJhMzZlNDU2ZWNiYTliNicsXG4gICAgLy8gICBzdWNjZXNzOiAobW92aWVzKSA9PiB7XG4gICAgLy8gICAgIG1vdmllcy5jcmV3Lm1hcCgoY3JldykgPT4ge1xuICAgIC8vICAgICAgIGlmIChjcmV3LmpvYiA9PSAnRGlyZWN0b3InIHx8IGNyZXcuam9iID09ICdQcm9kdWNlcicpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGNyZXcpO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe21vdmllc30pXG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICBqUXVlcnkuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL21vdmllcycsXG4gICAgICBzdWNjZXNzOiAobW92aWVzKSA9PiB7XG4gICAgICAgIG1vdmllcy5tYXAoKG1vdmllKT0+e1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW92aWVzOiB0aGlzLnN0YXRlLm1vdmllcy5jb25jYXQoW21vdmllXSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgLy8gQnVpbHQtaW4gUmVhY3QgZnVuY3Rpb25zIEFGVEVSIHJlbmRlclxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuX3RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5zdGF0ZS5tb3ZpZXMsIDUwMDApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYWRkLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBS0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFUQTtBQVdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBOzs7O0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUVBO0FBRUE7QUFBQTtBQUdBO0FBRkE7Ozs7QUFJQTtBQUVBO0FBQUE7QUFJQTtBQUhBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTs7OztBQUlBO0FBQUE7Ozs7O0FBbEZBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTs7OztBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUF2QkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFHQTtBQUVBO0FBQ0E7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFUQTtBQUNBO0FBU0E7Ozs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRkE7QUFHQTtBQUVBO0FBRUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFUQTs7OztBQVdBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVhBOzs7O0FBZUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFNQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQVZBO0FBYUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7Ozs7QUFJQTtBQUFBOzs7OztBQTNLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        