import React from 'react';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import LoginButton from './LoginButton';

const LoggedOutButtons = () => {
    return (
        <div>
            <Nav pullRight>
                <NavItem href={'/#about'}>About</NavItem>
                <LoginButton path={'signup'} text={'Sign Up'}/>
                <LoginButton path={'login'} text={'Log In'}/>
            </Nav>
        </div>
    );
};

export default LoggedOutButtons;

