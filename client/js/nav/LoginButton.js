import React from 'react';

import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router';

import NavItem from 'react-bootstrap/lib/NavItem';

const LoginButton = ({path, text}) => {
    return (
        <LinkContainer to={path}>
            <NavItem>{text}</NavItem>
        </LinkContainer>
    );
};

LoginButton.propTypes = {
    path: React.PropTypes.string,
    text: React.PropTypes.string,
};

export default LoginButton;


