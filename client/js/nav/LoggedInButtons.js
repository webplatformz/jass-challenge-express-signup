import React, {PropTypes} from 'react';

import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import {logout} from '../redux/actions/index';
import {connect} from "react-redux";

const LoggedInButtons = ({onLogoutClick}) => {
    return (
        <div>
            <Nav pullRight>
                <NavItem href={'/#about'}>About</NavItem>
                <LinkContainer to={'/profile'}>
                    <NavItem>My Profile</NavItem>
                </LinkContainer>
                <LinkContainer to={'/#'} onClick={onLogoutClick}>
                    <NavItem>Logout</NavItem>
                </LinkContainer>
            </Nav>
        </div>
    );
};

LoggedInButtons.propTypes = {
    onLogoutClick: PropTypes.func,
};

export default connect(
    state => ({}),
    {onLogoutClick: logout,}
)(LoggedInButtons);

