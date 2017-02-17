import React, {Component, PropTypes} from 'react';

import {Button, Form, FormGroup, FormControl, Col, ControlLabel,} from 'react-bootstrap';
import {toggleEditingProfile, updateProfile} from '../redux/actions/index';
import {connect} from 'react-redux';

class ProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: props.email,
            matrikel: props.matrikel,
            school: props.school,
            degreeProgram: props.degreeProgram,
            degree: props.degree,
            gender: props.gender,
            fullname : props.fullname
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleMatrikel = this.handleMatrikel.bind(this);
        this.handleSchool = this.handleSchool.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDegreeProgram = this.handleDegreeProgram.bind(this);
        this.handleDegree = this.handleDegree.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleFullname = this.handleFullname.bind(this);
    };

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handleMatrikel(event) {
        this.setState({matrikel: event.target.value});
    }

    handleSchool(event) {
        this.setState({school: event.target.value});
    }

    handleDegreeProgram(event) {
        this.setState({degreeProgram: event.target.value});
    }

    handleDegree(event) {
        this.setState({degree: event.target.value});
    }

    handleGender(event) {
        this.setState({gender: event.target.value});
    }

    handleFullname(event) {
        this.setState({fullname: event.target.value});
    }

    handleSubmit() {
        this.props.onSubmitProfileData(this.state);
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalFullname">
                    <Col sm={2}>
                        <label className="pull-right">Name</label>
                    </Col>
                    <Col sm={8}>
                        <input type="text" value={this.state.fullname} onChange={this.handleFullname} placeholder="Name"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                    <Col sm={2}>
                        <label className="pull-right">E-mail</label>
                    </Col>
                    <Col sm={8}>
                        <input type="text" value={this.state.email} onChange={this.handleEmail} placeholder="E-mail"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalGender">
                    <Col sm={2}>
                        <label className="pull-right">Gender</label>
                    </Col>
                    <Col sm={8}>
                        <input type="text" value={this.state.gender} onChange={this.handleGender} placeholder="Gender"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalMatrikel">
                    <Col sm={2}>
                        <label className="pull-right">Matrikel Number</label>
                    </Col>
                    <Col sm={8}>
                        <input type="text" value={this.state.matrikel} onChange={this.handleMatrikel}
                               placeholder="Matrikel"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalSchool">
                    <Col sm={2}>
                        <label className="pull-right">School</label>
                    </Col>
                    <Col sm={8}>
                        <input type="text" value={this.state.school} onChange={this.handleSchool}
                               placeholder="Name of School"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalDegreeProgram">
                    <Col sm={2}>
                        <label className="pull-right">Degree Program</label>
                    </Col>
                    <Col sm={8}>
                        <input type="text" value={this.state.degreeProgram} onChange={this.handleDegreeProgram}
                               placeholder="Degree Program"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalDegree">
                    <Col sm={2}>
                        <label className="pull-right">Degree</label>
                    </Col>
                    <Col sm={8}>
                        <input type="text" value={this.state.degree} onChange={this.handleDegree}
                               placeholder="Degree Program"/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={8}>
                        <Button className="pull-right" onClick={this.handleSubmit}>Submit</Button>
                        <Button onClick={this.props.onToggleEditingProfile}>Cancel</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

ProfileForm.propTypes = {
    onToggleEditingProfile: PropTypes.func
};

export default connect(
    state => ({}),
    {onToggleEditingProfile: toggleEditingProfile, onSubmitProfileData: updateProfile}
)(ProfileForm);
