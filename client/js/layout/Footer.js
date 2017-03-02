import React from 'react';

import {Col, Row} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Row>
                    <Col lg={12}>
                        <p className="copyright text-muted small">Copyright &copy; Zühlke Engineering AG 2017.</p>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default Footer;
