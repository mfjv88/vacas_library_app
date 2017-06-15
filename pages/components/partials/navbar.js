import React from 'react';
import {Navbar,  Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
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
    );
  }
}

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