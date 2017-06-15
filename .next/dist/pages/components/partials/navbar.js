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

var _reactBootstrap = require('react-bootstrap');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRouterBootstrap = require('react-router-bootstrap');

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