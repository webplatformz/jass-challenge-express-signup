import React, { PropTypes } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { authenticateGithub, authenticateBitbucket } from '../redux/actions/index';
import GithubImage from '../../images/github.svg';
import BitbucketImage from '../../images/bitbucket.svg';

const HeroSection = ({ onAuthenticateGithubClick, onAuthenticateBitbucketClick }) => (
    <div>
        <div className="intro-header intro-header__home">
            <div className="container">
                <Row>
                    <Col lg={12}>
                        <div className="intro-message">
                            <h1>Zühlke Jass-Challenge 2017</h1>
                            <hr className="intro-divider" />
                            <div className="social-login-button-container">
                                <Button
                                    className="social-login-button"
                                    onClick={onAuthenticateGithubClick}
                                >
                                    <GithubImage />
                                    Login with Github
                                </Button>
                                <Button
                                    className="social-login-button"
                                    onClick={onAuthenticateBitbucketClick}
                                >
                                    <BitbucketImage />
                                    Login with Bitbucket
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
);

HeroSection.propTypes = {
    onAuthenticateGithubClick: PropTypes.func,
    onAuthenticateBitbucketClick: PropTypes.func,
};

export default connect(
    state => ({}),
    { onAuthenticateGithubClick: authenticateGithub, onAuthenticateBitbucketClick: authenticateBitbucket }
)(HeroSection);
