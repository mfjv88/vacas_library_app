import React from 'react';
import { Navbar,  Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

export default class MainNav extends React.Component{
  render(){
    return(
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>
                Master Seeker
              </Link>
              {/*<a href="/">Master Seeker</a>*/}
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
    );
  }
}
