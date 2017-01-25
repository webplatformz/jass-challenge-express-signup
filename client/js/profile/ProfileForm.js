import React, { Component, PropTypes } from 'react';

import { Button, Form, FormGroup, FormControl, Col, ControlLabel, } from 'react-bootstrap';
import { toggleEditingProfile } from '../redux/actions';
import { connect } from 'react-redux';

class ProfileForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      matrikel: '',
      school: ''
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handleMatrikel = this.handleMatrikel.bind(this);
    this.handleSchool = this.handleSchool.bind(this);
  };

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleMatrikel(event) {
    this.setState({ matrikel: event.target.value });
  }

  handleSchool(event) {
    this.setState({ school: event.target.value });
  }

  handleSubmit() {
    console.log('handling submit');
  }

  render() {
    return(
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={2}>
            <label className="pull-right">E-mail</label>
          </Col>
          <Col sm={8}>
            <input type="text" value={this.state.email} onChange={this.handleEmail} placeholder="E-mail" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalMatrikel">
          <Col sm={2}>
            <label className="pull-right">Matrikel Number</label>
          </Col>
          <Col sm={8}>
            <input type="text" value={this.state.matrikel} onChange={this.handleMatrikel} placeholder="Matrikel" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalSchool">
          <Col sm={2}>
            <label className="pull-right">School</label>
          </Col>
          <Col sm={8}>
            <input type="text" value={this.state.school} onChange={this.handleSchool} placeholder="Name of School" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={8}>
            <Button className="pull-right" onClick={this.handleSubmit}>Submit</Button>
            <Button onClick={this.props.onToggleEditingProfile}>Cancel</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

ProfileForm.propTypes = {
  onToggleEditingProfile: PropTypes.func
};

export default connect(
  state => ({}),
  { onToggleEditingProfile: toggleEditingProfile }
)(ProfileForm);
