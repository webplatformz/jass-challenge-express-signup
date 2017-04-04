import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, FormControl, Col, ControlLabel, } from 'react-bootstrap';

const required = value => value && value.length >= 3 ? undefined : 'Required, must be at least 3 characters.';
const requiredSelect = value => value ? undefined : 'Required, choose one option.';
const requiredNumber = value => value && value.length >= 1 ? undefined : 'Required, must be at least 1 digit.';

const renderField = ({
                       input,
                       label,
                       type,
                       disabled,
                       min,
                       placeholder = 'Missing information',
                       meta: {
                         touched,
                         error,
                         warning
                       }
                     }) => (
  <FormGroup validationState={(touched && error) ? 'error' : null}>
    <Col sm={2}>
      <ControlLabel>{label}</ControlLabel>
    </Col>
    <Col sm={8}>
      <FormControl {...input} placeholder={placeholder} type={type} disabled={disabled} min={min} />
      {touched && ((error && <span className="small">{error}</span>))}
    </Col>
  </FormGroup>
);

const renderSelect = ({
                        input,
                        label,
                        disabled,
                        options,
                        meta: {
                          touched,
                          error,
                          warning
                        }
                      }) => (
  <FormGroup validationState={(touched && error) ? 'error' : null}>
    <Col sm={2}>
      <ControlLabel>{label}</ControlLabel>
    </Col>
    <Col sm={8}>
      <FormControl {...input} componentClass="select" disabled={disabled}>
        <option disabled value="">Please Select</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </FormControl>
      {touched && ((error && <span className="small">{error}</span>))}
    </Col>
  </FormGroup>
);

const ProfileForm = ({
                       onCancel,
                       handleSubmit,
                       isEditing
                     }) => (
  <Form name="someForm" horizontal onSubmit={handleSubmit}>
    <h3>Bot</h3>
    <Field name="repo"
           type="url"
           component={renderField}
           label="Repository URL"
           placeholder="github.com/myUser/myBotrepo"
           validate={[required]}
           disabled={!isEditing}
    />
    <h3>Person #1</h3>
    <Field name="person1.fullname"
           type="text"
           component={renderField}
           label="Full Name"
           placeholder="First and last name"
           validate={[required]}
           disabled={!isEditing}
    />

    <Field name="person1.email"
           type="text"
           component={renderField}
           label="E-mail"
           validate={[required]}
           disabled={!isEditing}
    />
    <Field name="person1.matrikel"
           type="text"
           component={renderField}
           label="Matrikel Number"
           validate={[required]}
           disabled={!isEditing}
    />
    <Field name="person1.school"
           type="text"
           component={renderField}
           label="Name of School"
           validate={[required]}
           disabled={!isEditing}
    />
    <Field name="person1.degreeProgram"
           type="text"
           component={renderField}
           label="Degree Program"
           validate={[required]}
           disabled={!isEditing}
    />
    <Field name="person1.degree"
           type="text"
           component={renderField}
           label="Degree"
           validate={[required]}
           disabled={!isEditing}
    />
    <Field name="person1.academicyear"
           type="number"
           min="1"
           component={renderField}
           label="Academic Year"
           validate={[requiredNumber]}
           disabled={!isEditing}
    />
    <h3>Person #2</h3>
    <Field name="person2.fullname"
           type="text"
           component={renderField}
           label="Full Name"
           placeholder="First and last name"
           disabled={!isEditing}
    />

    <Field name="person2.email"
           type="text"
           component={renderField}
           label="E-mail"
           disabled={!isEditing}
    />
    <Field name="person2.matrikel"
           type="text"
           component={renderField}
           label="Matrikel Number"
           disabled={!isEditing}
    />
    <Field name="person2.school"
           type="text"
           component={renderField}
           label="Name of School"
           disabled={!isEditing}
    />
    <Field name="person2.degreeProgram"
           type="text"
           component={renderField}
           label="Degree Program"
           disabled={!isEditing}
    />
    <Field name="person2.degree"
           type="text"
           component={renderField}
           label="Degree"
           disabled={!isEditing}
    />
    <Field name="person2.academicyear"
           type="number"
           min="1"
           component={renderField}
           label="Academic Year"
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
