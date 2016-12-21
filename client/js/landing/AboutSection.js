import React from 'react';

import { Col, Row } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <div>
      <a name="about"></a>
      <div className="content-section-a">
        <div className="container">
          <Row>
            <Col lg={10} lgOffset={1} sm={12}>
              <hr className="section-heading-spacer" />
              <div className="clearfix"></div>
              <h2 className="section-heading">Introduction to Jass Challenge</h2>
              <p className="lead">here goes the info regarding jass challenge</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;