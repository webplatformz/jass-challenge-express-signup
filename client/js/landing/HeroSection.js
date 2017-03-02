import React, { PropTypes } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { authenticateGithub, authenticateBitbucket } from '../redux/actions/index';
import GithubImage from '../../images/github.svg';
import BitbucketImage from '../../images/bitbucket.svg';


const HeroSection = ({ onAuthenticateGithubClick, onAuthenticateBitbucketClick }) => (
    <div>
        <a name="about"></a>
        <div className="intro-header">
            <div className="container">
                <Row>
                    <Col lg={12}>
                        <div className="intro-message">
                            <h1>Zühlke Jass-Challenge 2017</h1>
                            <h3>Create your own Jass-Bot and compete with others</h3>
                            <hr className="intro-divider" />
                            <div className="social-login-button-container">
                                <Button
                                    className="transparent social-login-button"
                                    onClick={onAuthenticateGithubClick}
                                >
                                    <GithubImage />
                                    Login with Github
                                </Button>
                                <Button
                                    className="transparent social-login-button"
                                    onClick={onAuthenticateBitbucketClick}
                                >
                                    <BitbucketImage />
                                    Login with Bitbucket
                                </Button>
                            </div>
                            <Button href={'/#about'} bsSize="large" className="transparent no-border">
                                Learn More
                            </Button>
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
