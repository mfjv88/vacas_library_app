webpackHotUpdate(6,{

/***/ 753:
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

var _reactRouterDom = __webpack_require__(619);

var _navbar = __webpack_require__(653);

var _navbar2 = _interopRequireDefault(_navbar);

var _movie_form_block = __webpack_require__(652);

var _movie_form_block2 = _interopRequireDefault(_movie_form_block);

var _search_bar_block = __webpack_require__(655);

var _search_bar_block2 = _interopRequireDefault(_search_bar_block);

var _head = __webpack_require__(195);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/index.js';


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
          lineNumber: 24
        }
      }, _react2.default.createElement(_navbar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('div', { id: 'body', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mfjvacas/Documents/Dev/GitHub/vacas_library_app/pages/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5mNGQ3ZTA5ZDRiYjNlNjlhOGNlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/ZjdlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgTGluaywgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE1haW5OYXYgZnJvbSAnLi9jb21wb25lbnRzL3BhcnRpYWxzL25hdmJhcic7XG5pbXBvcnQgTW92aWVGb3JtQmxvY2sgZnJvbSAnLi9jb21wb25lbnRzL2FkZC9tb3ZpZV9mb3JtX2Jsb2NrJztcbmltcG9ydCBTZWFyY2hCYXJCbG9jayBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaF9iYXJfYmxvY2snO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIC8vIEluaXRpYWwgYnVpbHQtaW4gUmVhY3QgZnVuY3Rpb25zXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93TW92aWVzOiBmYWxzZSxcbiAgICAgIG1vdmllczogW11cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCl7XG5cbiAgICAvLyBKU1hcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNYWluTmF2Lz5cbiAgICAgICAgICA8ZGl2IGlkPSdib2R5Jz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gICAgICBcbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgLy8gdGhpcy5fZmV0Y2hNb3ZpZXMoKTtcbiAgfVxuXG5cbiAgLy8gQnVpbHQtaW4gUmVhY3QgZnVuY3Rpb25zIEFGVEVSIHJlbmRlclxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuX3RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5zdGF0ZS5tb3ZpZXMsIDUwMDApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFHQTs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7O0FBUUE7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBREE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBOzs7O0FBSUE7QUFBQTs7Ozs7QUFwQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=