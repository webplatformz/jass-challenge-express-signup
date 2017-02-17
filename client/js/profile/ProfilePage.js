import React, {PropTypes} from 'react';

import {Button, Form, FormGroup, FormControl, Col, ControlLabel,} from 'react-bootstrap';
import {toggleEditingProfile} from '../redux/actions/index';
import {connect} from 'react-redux';

import ProfileForm from './ProfileForm';
import ProfileView from './ProfileView';

const ProfilePage = ({isEditingProfile, onToggleEditingProfile, user: {email, matrikel, school, degreeProgram, degree}}) => {

    const profileComponent = isEditingProfile ?
        <ProfileForm email={email} matrikel={matrikel} school={school} degreeProgram={degreeProgram} degree={degree}/> : <ProfileView/>;
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
    {onToggleEditingProfile: toggleEditingProfile}
)(ProfilePage);
