webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43YTU4NWI0ZDcyZTk1NDQ2MDQ5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vLyBpbXBvcnQgQnJvd3NlclJvdXRlciBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIGJyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XG5pbXBvcnQgTW92aWVGb3JtQmxvY2sgZnJvbSAnLi9jb21wb25lbnRzL2FkZC9tb3ZpZV9mb3JtX2Jsb2NrJztcbmltcG9ydCBTZWFyY2hCYXJCbG9jayBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaF9iYXJfYmxvY2snO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdFx0cmVuZGVyKCl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QXBwPlxuXHRcdFx0XHQgIDxSb3V0ZSBwYXRoPScvYWRkX21vdmllJyBjb21wb25lbnQ9e01vdmllRm9ybUJsb2NrfS8+XG5cdFx0XHRcdCAgPFJvdXRlIHBhdGg9Jy9zZWFyY2hfbW92aWUnIGNvbXBvbmVudD17U2VhcmNoQmFyQmxvY2t9Lz5cblx0XHRcdCAgXHQ8L0FwcD5cblx0XHQgIFx0KVxuXHRcdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBTkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7Ozs7OztBQUxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==