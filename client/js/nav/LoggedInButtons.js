import React, { PropTypes } from 'react';
import { connect } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { logout } from '../redux/actions/index';

const LoggedInButtons = ({ onLogoutClick }) => (
    <Nav pullRight>
        <NavItem href={'/#about'}>About</NavItem>
        <LinkContainer to={'/profile'}>
            <NavItem>My Profile</NavItem>
        </LinkContainer>
        <LinkContainer to={'/#'} onClick={onLogoutClick}>
            <NavItem>Logout</NavItem>
        </LinkContainer>
    </Nav>
);

LoggedInButtons.propTypes = {
    onLogoutClick: PropTypes.func,
};

export default connect(
    state => ({}),
    { onLogoutClick: logout, }
)(LoggedInButtons);

