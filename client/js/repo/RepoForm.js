import React from 'react';
import { connect } from 'react-redux';

import { Button, FormGroup, FormControl, Form } from 'react-bootstrap';

const RepoForm = () => {
  return (
    <Form inline>
      <FormGroup>
        <FormControl type="url" placeholder="http://" />
      </FormGroup>
      <Button className="pull-right">Cancel</Button>
      <Button className="pull-right">Submit</Button>
    </Form>
  );
};

export default RepoForm;
