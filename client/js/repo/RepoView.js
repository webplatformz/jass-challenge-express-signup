import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Button, FormGroup, FormControl, Form } from 'react-bootstrap';

import { toggleEditingRepo } from '../redux/actions/index';

const RepoView = ({ repo, onToggleEditingRepoClick }) => {
  return (
    <Form inline>
      <FormGroup>
        <FormControl disabled="true" type="url" value={repo}/>
      </FormGroup>
      <Button className="pull-right" onClick={onToggleEditingRepoClick}>Edit</Button>
    </Form>
  );
};

RepoView.propTypes = {
  repo: React.PropTypes.string,
};

const mapStateToPros = (state) => ({});

export default connect(
  mapStateToPros,
  { onToggleEditingRepoClick: toggleEditingRepo }
)(RepoView);

