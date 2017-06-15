"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

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