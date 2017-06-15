'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _movie_form_block = require('./add/movie_form_block');

var _movie_form_block2 = _interopRequireDefault(_movie_form_block);

var _search_bar_block = require('./search/search_bar_block');

var _search_bar_block2 = _interopRequireDefault(_search_bar_block);

var _app = require('./app');

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