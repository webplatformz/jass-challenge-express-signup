import React from 'react';

import Footer from './Footer';
import AppNavbar from '../nav/AppNavbar';

const Layout = ({children}) => {
  return (
    <div>
      <AppNavbar />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: React.PropTypes.object
};

export default Layout;