import React, { Component, PropTypes } from 'react';

import { Button, Form, FormGroup, FormControl, Col, ControlLabel, } from 'react-bootstrap';
import { toggleEditingProfile } from '../redux/actions';
import { connect } from 'react-redux';

import ProfileForm from './ProfileForm';
import ProfileView from './ProfileView';

const ProfilePage = ({ isEditingProfile, onToggleEditingProfile }) => {

  const profileComponent = isEditingProfile ? <ProfileForm/> : <ProfileView/>;
  const editButton = isEditingProfile ? '' : <Button className="pull-right" onClick={onToggleEditingProfile}>Edit</Button>;

  return(
    <div>
      <div className="content-section-b">
        <div className="container">
          <h3>
            My Profile
            {editButton}
          </h3>
          <hr/>
          {profileComponent}
        </div>
      </div>
    </div>
  );
};

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
