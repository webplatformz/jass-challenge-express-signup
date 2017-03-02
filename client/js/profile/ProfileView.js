import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { Form, FormGroup, Col, FormControl, ControlLabel, } from 'react-bootstrap';

const ProfileView = ({
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
        profile: {
            url,
            avatar_url
        }
    }
}) => (
    <div>
        <Col sm={9}>
            <Form horizontal>
                <FormGroup controlId="formHorizontalFullname">
                    <Col sm={2}>
                        <ControlLabel className="pull-right">Name</ControlLabel>
                    </Col>
                    <Col sm={8}>
                        <FormControl disabled value={fullname || 'missing information'}></FormControl>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalRepo">
                    <Col sm={2}>
                        <ControlLabel className="pull-right">Repo</ControlLabel>
                    </Col>
                    <Col sm={8}>
                        <FormControl disabled value={repo || 'missing information'}></FormControl>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                    <Col sm={2}>
                        <ControlLabel className="pull-right">E-mail</ControlLabel>
                    </Col>
                    <Col sm={8}>
                        <FormControl disabled value={email || 'missing information'}></FormControl>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalGender">
                    <Col sm={2}>
                        <ControlLabel className="pull-right">Gender</ControlLabel>
                    </Col>
                    <Col sm={8}>
                        <FormControl disabled value={gender || 'missing information'}></FormControl>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalMatrikel">
                    <Col sm={2}>
                        <ControlLabel className="pull-right">Matrikel Number</ControlLabel>
                    </Col>
                    <Col sm={8}>
                        <FormControl disabled value={matrikel || 'missing information'}></FormControl>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalSchool">
                    <Col sm={2}>
                        <ControlLabel className="pull-right">School</ControlLabel>
                    </Col>
                    <Col sm={8}>
                        <FormControl disabled value={school || 'missing information'}></FormControl>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalDegreeProgram">
                    <Col sm={2}>
                        <ControlLabel className="pull-right">Degree Program</ControlLabel>
                    </Col>
                    <Col sm={8}>
                        <FormControl disabled value={degreeProgram || 'missing information'}></FormControl>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalDegree">
                    <Col sm={2}>
                        <ControlLabel className="pull-right">Degree</ControlLabel>
                    </Col>
                    <Col sm={8}>
                        <FormControl disabled value={degree || 'missing information'}></FormControl>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalAcademicYear">
                    <Col sm={2}>
                        <ControlLabel className="pull-right">Academic Year</ControlLabel>
                    </Col>
                    <Col sm={8}>
                        <FormControl disabled value={academicyear || 'missing information'}></FormControl>
                    </Col>
                </FormGroup>
            </Form>
        </Col>
        <Col sm={3}>
            <img className="profile-avatar" src={avatar_url} alt="" />
        </Col>
    </div>
);

ProfileView.propTypes = {
    user: PropTypes.object
};

export default connect(
    state => ({
        user: state.userReducer.user
    }),
    {}
)(ProfileView);
