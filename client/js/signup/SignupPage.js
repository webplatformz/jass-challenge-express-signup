import React from 'react';

import {Row, Col, Well, Button, Form, ControlLabel} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const SignupPage = () => {
    return (
        <div>
            <a name="about"></a>
            <div className="content-section-b">
                <div className="container">
                    <Row>
                        <Col md={6} mdOffset={3}>
                            <Well className="form-well">
                                <h3 className="well-title">Sign Up</h3>
                                <hr/>
                                <Button bsSize="large" block>Sign Up with Github</Button>
                                <Button bsSize="large" block>Sign Up with Bitbucket</Button>
                                <hr/>
                                <Form inline>
                                    <ControlLabel>Already registered?</ControlLabel>
                                    <LinkContainer to="/login">
                                        <Button type="submit" className="pull-right">Log In</Button>
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

export default SignupPage;
