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

var _reactBootstrap = require('react-bootstrap');

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