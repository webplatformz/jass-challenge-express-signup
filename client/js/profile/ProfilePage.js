import React, { Component } from 'react';

import { Button, Form, FormGroup, FormControl, Col, ControlLabel, } from 'react-bootstrap';

class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <div className="content-section-b">
          <div className="container">
            <h3>
              My Profile
              <Button className="pull-right">Edit</Button>
            </h3>
            <hr/>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  E-mail
                </Col>
                <Col sm={8}>
                  <FormControl type="email" placeholder="E-mail" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalMatrikel">
                <Col componentClass={ControlLabel} sm={2}>
                  Matrikel Number
                </Col>
                <Col sm={8}>
                  <FormControl type="text" placeholder="Matrikel Number" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalSchool">
                <Col componentClass={ControlLabel} sm={2}>
                  School
                </Col>
                <Col sm={8}>
                  <FormControl type="text" placeholder="School" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={8}>
                  <Button type="submit" className="pull-right">
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
