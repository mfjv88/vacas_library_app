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

var _reactRouterDom = require('react-router-dom');

var _navbar = require('./components/partials/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _movie_form_block = require('./components/add/movie_form_block');

var _movie_form_block2 = _interopRequireDefault(_movie_form_block);

var _search_bar_block = require('./components/search/search_bar_block');

var _search_bar_block2 = _interopRequireDefault(_search_bar_block);

var _head = require('next/dist/lib/head.js');

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