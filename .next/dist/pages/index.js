'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _movie_form_block = require('./components/add/movie_form_block');

var _movie_form_block2 = _interopRequireDefault(_movie_form_block);

var _search_bar_block = require('./components/search/search_bar_block');

var _search_bar_block2 = _interopRequireDefault(_search_bar_block);

var _routes = require('./components/routes');

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