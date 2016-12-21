import React from 'react';

import { Col, Row } from 'react-bootstrap';

const BotSection = () => {
  return (
    <div>
      <a  name="bots"></a>
      <div className="content-section-b">
        <div className="container">
          <Row>
            <Col lg={5} sm={6}>
              <hr className="section-heading-spacer" />
              <div className="clearfix"></div>
              <h2 className="section-heading">Info regarding bots / skeletons</h2>
              <p className="lead">here goes the infor regarding the bots / skeletons for bots</p>
            </Col>
            <Col lg={5} lgOffset={2} sm={6}>
              <h5>JavaScript Bot</h5>
              <h5>Java Bot</h5>
              <h5>C# Bot</h5>
              <h5>other bots??</h5>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BotSection;