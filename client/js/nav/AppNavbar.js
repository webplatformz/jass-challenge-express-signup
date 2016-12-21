import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';

const AppNavbar = ({isTransparent}) => {
  return (
    <Navbar fixedTop className={isTransparent ? 'transparent' : ''}>
      <NavbarHeader>
        <NavbarBrand>
          <Link to="/">Jass-Challenge</Link>
        </NavbarBrand>
        <NavbarToggle />
      </NavbarHeader>
      <NavbarCollapse>
        <Nav pullRight>
          <NavItem href={'/#about'}>About</NavItem>
          <LinkContainer to="/signup">
            <NavItem>Sign Up</NavItem>
          </LinkContainer>
          <LinkContainer to="/login">
            <NavItem>Log In</NavItem>
          </LinkContainer>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};

AppNavbar.propTypes = {
  isTransparent: React.PropTypes.bool
};

export default AppNavbar;