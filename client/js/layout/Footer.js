import React from 'react';

import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Row>
          <Col lg={12}>
            <p className="copyright text-muted small">Copyright &copy; Your Company 2016. All Rights Reserved</p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;