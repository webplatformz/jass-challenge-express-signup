import React from 'react';

import { Row, Col, Well, Button, Form, ControlLabel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const LoginPage = () => {
  return (
    <div>
      <a  name="about"></a>
      <div className="content-section-b">
        <div className="container">
          <Row>
            <Col md={6} mdOffset={3}>
              <Well className="form-well">
                <h3 className="well-title">Login</h3>
                <hr/>
                <Button bsSize="large" block>Login with Github</Button>
                <Button bsSize="large" block>Login with Bitbucket</Button>
                <hr/>
                <Form inline>
                  <ControlLabel>Not registered yet?</ControlLabel>
                  <LinkContainer to="/signup">
                    <Button type="submit" className="pull-right">Sign Up</Button>
                  </LinkContainer>
                </Form>
              </Well>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;