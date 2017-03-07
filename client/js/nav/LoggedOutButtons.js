import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const LoggedOutButtons = () => (
    <Nav pullRight>
        <NavItem href={'/#about'}>About</NavItem>
        <NavItem href={'/#participate'}>Participate</NavItem>
    </Nav>
);

export default LoggedOutButtons;

