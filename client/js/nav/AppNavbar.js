import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { logout, enteredSection, cleanSections } from '../redux/actions/index';

const AppNavbar = ({
                     isAuthenticated,
                     onLogoutClick,
                     enteredSection,
                     cleanSections
                   }) => (
  <Navbar>
    <NavbarHeader className="navbar-logo">
      <NavbarBrand>
        <Link to="/">
          <img className="navbar-logo__image" src="/assets/images/logo-zuehlke.jpg" />
        </Link>
      </NavbarBrand>
      {isAuthenticated &&
      <NavbarToggle />
      }
    </NavbarHeader>
    {isAuthenticated &&
    <NavbarCollapse>
      <Nav pullRight>
        <LinkContainer to={'/'}>
          <NavItem>About</NavItem>
        </LinkContainer>
        <LinkContainer to={'/profile'}>
          <NavItem>My Profile</NavItem>
        </LinkContainer>
        <NavItem onClick={onLogoutClick}>Logout</NavItem>
      </Nav>
    </NavbarCollapse>
    }
  </Navbar>
);

AppNavbar.propTypes = {
  isAuthenticated: React.PropTypes.bool,
  onLogoutClick: React.PropTypes.func,
  enteredSection: React.PropTypes.func,
  cleanSections: React.PropTypes.func,
};

export default connect(
  (state) => ({
    isAuthenticated: state.user.isAuthenticated,
  }),
  {
    onLogoutClick: logout,
  }
)(AppNavbar);
