import React from 'react';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const LoggedOutButtons = () => {
    return (
        <div>
            <Nav pullRight>
                <NavItem href={'/#about'}>About</NavItem>
            </Nav>
        </div>
    );
};

export default LoggedOutButtons;

