import React, {PropTypes} from 'react';

import {Col, Row, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux";

import {authenticateGithub, authenticateBitbucket} from '../redux/actions/index';

const HeroSection = ({onAuthenticateGithubClick, onAuthenticateBitbucketClick}) => {
    return (
        <div>
            <a name="about"></a>
            <div className="intro-header">
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className="intro-message">
                                <h1>Jass-Challenge</h1>
                                <h3>Description of Jass-Challenge</h3>
                                <hr className="intro-divider"/>
                                <Button className="transparent" onClick={onAuthenticateGithubClick}>Login with Github</Button>
                                <Button className="transparent" onClick={onAuthenticateBitbucketClick}>Login with Bitbucket</Button>
                                <Button href={'/#about'} className="transparent">More Information</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

HeroSection.propTypes = {
  onAuthenticateGithubClick: PropTypes.func,
  onAuthenticateBitbucketClick: PropTypes.func,
};

export default connect(
  state => ({}),
  {onAuthenticateGithubClick: authenticateGithub, onAuthenticateBitbucketClick: authenticateBitbucket}
)(HeroSection);
