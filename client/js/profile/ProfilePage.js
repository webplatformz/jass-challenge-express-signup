import React, { PropTypes } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleEditingProfile, updateProfile, resetFormAndToggleEditing } from '../redux/actions/index';
import ProfileForm from './ProfileForm';

const ProfilePage = ({
                       isEditingProfile,
                       onSubmitProfileData,
                       onToggleEditingProfile,
                       onCancel,
                       user
                     }) => (
  <div>
    <div className="intro-header intro-header__profile">
      <div className="container">
        <Row>
          <Col lg={12}>
            <div className="intro-message">
              <h1>My Profile</h1>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <div className="content-section-b">
      <div className="container">
        {!isEditingProfile &&
        <Row>
          <Col lg={12}>
            <Button className="pull-right" onClick={onToggleEditingProfile}>Edit</Button>
          </Col>
        </Row>
        }
        <hr />
        <Row>
          <Col sm={9}>
            <ProfileForm
              onCancel={onCancel}
              onSubmit={onSubmitProfileData}
              initialValues={user}
              isEditing={isEditingProfile}
            />
          </Col>
          <Col sm={3}>
            <img className="profile-avatar" src={user.avatarUrl} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

ProfilePage.propTypes = {
  isEditingProfile: PropTypes.bool,
  onToggleEditingProfile: PropTypes.func,
  onSubmitProfileData: PropTypes.func,
  user: PropTypes.object,
};

export default connect(
  state => state.user,
  {
    onToggleEditingProfile: toggleEditingProfile,
    onSubmitProfileData: updateProfile,
    onCancel: resetFormAndToggleEditing
  }
)(ProfilePage);
