import React from 'react';

import { Col, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HeroSection = () => {
  return (
    <div>
      <a name="about"></a>
      <div className="intro-header">
        <div className="container">
          <Row>
            <Col lg={12}>
              <div className="intro-message">
                <h1>Jass-Challenge</h1>
                <h3>Description of Jass-Challenge</h3>
                <hr className="intro-divider" />
                <LinkContainer to="/signup">
                  <Button className="transparent">Sign Up Here</Button>
                </LinkContainer>
                <Button href={'/#about'} className="transparent">More Information</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;