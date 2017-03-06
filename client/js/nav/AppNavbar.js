import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';

import LoggedOutButtons from './LoggedOutButtons';
import LoggedInButtons from './LoggedInButtons';

const AppNavbar = ({isTransparent, isAuthenticated}) => {

    const buttons = isAuthenticated ? <LoggedInButtons/> : <LoggedOutButtons/>;

    return (
        <Navbar fixedTop inverse className={isTransparent ? 'transparent' : ''}>
            <NavbarHeader>
                <NavbarBrand>
                    <Link to="/">Jass-Challenge</Link>
                </NavbarBrand>
                <NavbarToggle />
            </NavbarHeader>
            <NavbarCollapse>
                {buttons}
            </NavbarCollapse>
        </Navbar>
    );
};

AppNavbar.propTypes = {
    isTransparent: React.PropTypes.bool,
    isAuthenticated: React.PropTypes.bool,
};

const mapStateToPros = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
});

export default connect(
    mapStateToPros,
    {}
)(AppNavbar);
