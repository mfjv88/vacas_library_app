"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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