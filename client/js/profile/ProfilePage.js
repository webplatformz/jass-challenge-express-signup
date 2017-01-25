import React, { PropTypes } from 'react';

import { Button, Form, FormGroup, FormControl, Col, ControlLabel, } from 'react-bootstrap';
import { toggleEditingProfile } from '../redux/actions';
import { connect } from 'react-redux';

const ProfilePage = ({ isEditingProfile, onToggleEditingProfile }) => {

  const readOnly = !isEditingProfile;

  const editButton = isEditingProfile ? '' : <Button className="pull-right" onClick={onToggleEditingProfile}>Edit</Button>;
  const submitButton = isEditingProfile ? <Button className="pull-right" onClick={onToggleEditingProfile}>Submit</Button> : '';
  const cancelButton = isEditingProfile ? <Button onClick={onToggleEditingProfile}>Cancel</Button> : '';

  return(
    <div>
      <div className="content-section-b">
        <div className="container">
          <h3>
            My Profile
            {editButton}
          </h3>
          <hr/>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                E-mail
              </Col>
              <Col sm={8}>
                <FormControl readOnly={readOnly} type="email" placeholder="E-mail" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalMatrikel">
              <Col componentClass={ControlLabel} sm={2}>
                Matrikel Number
              </Col>
              <Col sm={8}>
                <FormControl readOnly={readOnly} type="text" placeholder="Matrikel Number" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalSchool">
              <Col componentClass={ControlLabel} sm={2}>
                School
              </Col>
              <Col sm={8}>
                <FormControl readOnly={readOnly} type="text" placeholder="School" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={8}>
                {submitButton}
                {cancelButton}
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

ProfilePage.propTypes = {
  isEditingProfile: PropTypes.bool,
  onToggleEditingProfile: PropTypes.func
};

const mapStateToPros = (state) => ({
  isEditingProfile: state.userReducer.isEditingProfile
});

export default connect(
  mapStateToPros,
  { onToggleEditingProfile: toggleEditingProfile }
)(ProfilePage);
