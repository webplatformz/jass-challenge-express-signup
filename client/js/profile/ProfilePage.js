import React, { PropTypes } from 'react';
import { Button, Col } from 'react-bootstrap';
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
    <div className="content-section-b">
        <div className="container">
            <h3>
                My Profile
                {!isEditingProfile &&
                <Button className="pull-right" onClick={onToggleEditingProfile}>Edit</Button>
                }
            </h3>
            <hr />
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
        </div>
    </div>
);

ProfilePage.propTypes = {
    isEditingProfile: PropTypes.bool,
    onToggleEditingProfile: PropTypes.func,
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
