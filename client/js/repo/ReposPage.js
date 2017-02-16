import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { ListGroup, ListGroupItem, Button, FormGroup, FormControl, Form } from 'react-bootstrap';

import RepoForm from './RepoForm';
import RepoView from './RepoView';

const ReposPage = ({ isEditingRepo, user: { repo } }) => {

  const repoComponent = isEditingRepo ? <RepoForm repo={repo}/> : <RepoView repo={repo}/>;

  return (
    <div>
      <div className="content-section-b">
        <div className="container">
          <h3>
            My Repo
          </h3>
          <hr/>

          {repoComponent}
          <hr/>

          <h3>My Bots / Logs / Games</h3>
          <hr/>
        </div>
      </div>
    </div>
  );
};

ReposPage.propTypes = {
  isEditingRepo: PropTypes.bool,
  onToggleEditingRepo: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToPros = (state) => ({
  isEditingRepo: state.userReducer.isEditingRepo,
  user: state.userReducer.user,
});

export default connect(
  mapStateToPros,
  {}
)(ReposPage);
