import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, FormControl, Col, ControlLabel, } from 'react-bootstrap';

const required = value => value && value.length >= 3 ? undefined : 'Required, must be at least 3 characters.';
const requiredNumber = value => value && value.length >= 1 ? undefined : 'Required, must be at least 1 characters.';

const renderField = ({
    input,
    label,
    type,
    disabled,
    meta: {
        touched,
        error,
        warning
    }
}) => (
    <FormGroup validationState={(touched && error) ? 'error' : null}>
        <Col sm={2}>
            <ControlLabel className="pull-right">{label}</ControlLabel>
        </Col>
        <Col sm={8}>
            <FormControl {...input} placeholder="Missing information" type={type} disabled={disabled} />
            {touched && ((error && <span className="small">{error}</span>))}
        </Col>
    </FormGroup>
);

// TODO: hook up handle submit to redux action (onSubmitProfileData)

const ProfileForm = ({
    onCancel,
    handleSubmit,
    isEditing
}) => (
    <Form horizontal onSubmit={handleSubmit}>
        <Field name="fullname"
               type="text"
               component={renderField}
               label="Full Name"
               validate={[required]}
               disabled={!isEditing}
        />
        <Field name="repo"
               type="url"
               component={renderField}
               label="Repository URL"
               validate={[required]}
               disabled={!isEditing}
        />
        <Field name="email"
               type="text"
               component={renderField}
               label="E-mail"
               validate={[required]}
               disabled={!isEditing}
        />
        <Field name="gender"
               type="text"
               component={renderField}
               label="Gender"
               validate={[required]}
               disabled={!isEditing}
        />
        <Field name="matrikel"
               type="text"
               component={renderField}
               label="Matrikel Number"
               validate={[required]}
               disabled={!isEditing}
        />
        <Field name="school"
               type="text"
               component={renderField}
               label="Name of School"
               validate={[required]}
               disabled={!isEditing}
        />
        <Field name="degreeProgram"
               type="text"
               component={renderField}
               label="Degree Program"
               validate={[required]}
               disabled={!isEditing}
        />
        <Field name="degree"
               type="text"
               component={renderField}
               label="Degree"
               validate={[required]}
               disabled={!isEditing}
        />
        <Field name="academicyear"
               type="text"
               component={renderField}
               label="Academic Year"
               validate={[requiredNumber]}
               disabled={!isEditing}
        />
        {isEditing &&
        <FormGroup>
            <Col smOffset={2} sm={8}>
                <Button className="pull-right" onClick={handleSubmit}>Submit</Button>
                <Button onClick={onCancel}>Cancel</Button>
            </Col>
        </FormGroup>
        }
    </Form>
);

ProfileForm.propTypes = {
    onCancel: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
};

export default reduxForm({
    form: 'profile'
})(ProfileForm);
