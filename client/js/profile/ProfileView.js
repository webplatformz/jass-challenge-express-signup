import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { Form, FormGroup, Col, } from 'react-bootstrap';

const ProfileView = ({ profile: { email, matrikel, school } }) => {

  return(
    <Form horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col sm={2}>
          <label className="pull-right">E-mail</label>
        </Col>
        <Col sm={8}>
          {email || 'missing information'}
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalMatrikel">
        <Col sm={2}>
          <label className="pull-right">Matrikel Number</label>
        </Col>
        <Col sm={8}>
          {matrikel || 'missing information'}
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalSchool">
        <Col sm={2}>
          <label className="pull-right">School</label>
        </Col>
        <Col sm={8}>
          {school || 'missing information'}
        </Col>
      </FormGroup>
    </Form>
  );
}

ProfileView.propTypes = {
  profile: PropTypes.object
};

const mapStateToPros = (state) => ({
  profile: state.userReducer.user
});

export default connect(
  mapStateToPros,
  {}
)(ProfileView);
