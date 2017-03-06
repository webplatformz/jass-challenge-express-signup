import React, { PropTypes } from 'react';
import { Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleEditingProfile, updateProfile } from '../redux/actions/index';
import ProfileForm from './ProfileForm';

const ProfilePage = ({
    isEditingProfile,
    onSubmitProfileData,
    onToggleEditingProfile,
    user: {
        email,
        matrikel,
        school,
        degreeProgram,
        degree,
        gender,
        fullname,
        repo,
        academicyear,
        avatarUrl
    }
}) => {
    const handleSubmit = (values) => {
        onSubmitProfileData(values);
    };

    const initialFormValues = { email, matrikel, school, degreeProgram, degree, gender, fullname, repo, academicyear };

    return (
        <div>
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
                            onCancel={onToggleEditingProfile}
                            onSubmit={handleSubmit}
                            initialValues={initialFormValues}
                            isEditing={isEditingProfile}
                        />
                    </Col>
                    <Col sm={3}>
                        <img className="profile-avatar" src={avatarUrl} alt="" />
                    </Col>
                </div>
            </div>
        </div>
    );
};

ProfilePage.propTypes = {
    isEditingProfile: PropTypes.bool,
    onToggleEditingProfile: PropTypes.func,
    user: PropTypes.object,
};

export default connect(
    state => state.user,
    {
        onToggleEditingProfile: toggleEditingProfile,
        onSubmitProfileData: updateProfile
    }
)(ProfilePage);
