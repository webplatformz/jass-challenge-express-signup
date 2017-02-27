import React, {PropTypes} from 'react';

import {Button, Form, FormGroup, FormControl, Col, ControlLabel,} from 'react-bootstrap';
import {toggleEditingProfile, updateProfile} from '../redux/actions/index';
import {connect} from 'react-redux';

import ProfileForm from './ProfileForm';
import ProfileView from './ProfileView';

const ProfilePage = ({isEditingProfile, onSubmitProfileData , onToggleEditingProfile, user: {email, matrikel, school, degreeProgram, degree, gender, fullname, repo, academicyear}}) => {

    const handleSubmit = (values) => {
      onSubmitProfileData(values);
    };

    const initialFormValues = { email, matrikel, school, degreeProgram, degree, gender, fullname, repo, academicyear };

    const profileComponent = isEditingProfile ?
        <ProfileForm onCancel={onToggleEditingProfile} onSubmit={handleSubmit} initialValues={initialFormValues}/> : <ProfileView/>;
    const editButton = isEditingProfile ? '' :
        <Button className="pull-right" onClick={onToggleEditingProfile}>Edit</Button>;

    return (
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
    onToggleEditingProfile: PropTypes.func,
    user: PropTypes.object,
};

const mapStateToPros = (state) => ({
    isEditingProfile: state.userReducer.isEditingProfile,
    user: state.userReducer.user,
});

export default connect(
    mapStateToPros,
    {onToggleEditingProfile: toggleEditingProfile, onSubmitProfileData: updateProfile}
)(ProfilePage);
