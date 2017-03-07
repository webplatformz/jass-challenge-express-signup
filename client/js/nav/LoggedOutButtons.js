import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const LoggedOutButtons = () => (
    <Nav pullRight>
        <NavItem href={'/#about'}>About</NavItem>
    </Nav>
);

export default LoggedOutButtons;

