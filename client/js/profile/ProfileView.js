import React, {Component, PropTypes} from 'react';

import {connect} from 'react-redux';
import {Form, FormGroup, Col,} from 'react-bootstrap';

const ProfileView = ({user: {email, matrikel, school, degreeProgram, degree, profile: {url, avatar_url}}}) => {

    return (
        <div>
            <Col sm={9}>
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
                    <FormGroup controlId="formHorizontalDegreeProgram">
                        <Col sm={2}>
                            <label className="pull-right">Degree Program</label>
                        </Col>
                        <Col sm={8}>
                            {degreeProgram || 'missing information'}
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalDegree">
                        <Col sm={2}>
                            <label className="pull-right">Degree</label>
                        </Col>
                        <Col sm={8}>
                            {degree || 'missing information'}
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
            <Col sm={3}>
                <img src={avatar_url} alt=""/>
            </Col>
        </div>
    );
};

ProfileView.propTypes = {
    user: PropTypes.object
};

const mapStateToPros = (state) => ({
    user: state.userReducer.user
});

export default connect(
    mapStateToPros,
    {}
)(ProfileView);
