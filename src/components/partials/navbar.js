import React from 'react';
// import {Navbar,  Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

export default class MainNav extends React.Component{
  render(){
    return(
       <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/">
              <a className="navbar-brand">
              Master Seeker
              </a>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/add_movie">
                    <a>Add Movie</a>
                  </Link>
                </li>
                <li>
                  <Link to="/search_movie">
                    <a>Search</a>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <a>Log In</a>
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

{/*        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link href='/'>
                <a>Master Seeker</a>
              </Link>
              <a to="/">Master Seeker</a>
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
            <Link className="navbar-brand" to="/">
              Master Seeker
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/add_movie">
                    Add Movie
                  </Link>
                </li>
                <li>
                  <Link to="/search_movie">
                    Search
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    Log In
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
*/}