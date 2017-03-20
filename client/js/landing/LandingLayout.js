import React, { Component } from 'react';
import Footer from '../layout/Footer';
import AppNavbar from '../nav/AppNavbar';

const LandingLayout = ({ children }) => (
    <div>
        <AppNavbar />
        {children}
        <Footer />
    </div>
);

LandingLayout.propTypes = {
    children: React.PropTypes.object
};

export default LandingLayout;
