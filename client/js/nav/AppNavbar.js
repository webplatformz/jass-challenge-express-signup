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
import { logout } from '../redux/actions/index';

const AppNavbar = ({ isTransparent, isAuthenticated, onLogoutClick, activeNavItemHref }) => (
    <Navbar fixedTop inverse className={isTransparent ? 'transparent' : ''}>
        <NavbarHeader>
            <NavbarBrand>
                <Link to="/">Jass-Challenge</Link>
            </NavbarBrand>
            <NavbarToggle />
        </NavbarHeader>
        <NavbarCollapse>
            <Nav activeHref={activeNavItemHref} pullRight>
                <NavItem href={'/#about'}>About</NavItem>
                <NavItem href={'/#participate'}>Participate</NavItem>
                {isAuthenticated &&
                <LinkContainer to={'/profile'}>
                    <NavItem>My Profile</NavItem>
                </LinkContainer>
                }
                {isAuthenticated &&
                <NavItem onClick={onLogoutClick}>Logout</NavItem>
                }
            </Nav>
        </NavbarCollapse>
    </Navbar>
);

AppNavbar.propTypes = {
    isTransparent: React.PropTypes.bool,
    isAuthenticated: React.PropTypes.bool,
    activeNavItemHref: React.PropTypes.string,
    onLogoutClick: React.PropTypes.func
};

export default connect(
    (state) => ({
        isAuthenticated: state.user.isAuthenticated,
        activeNavItemHref: state.navigation.activeNavItemHref
    }),
    {
        onLogoutClick: logout
    }
)(AppNavbar);
