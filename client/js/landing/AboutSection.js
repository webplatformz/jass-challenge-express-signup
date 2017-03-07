import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import Anchor from '../nav/Anchor';

const sectionName = 'about';

const AboutSection = ({
    onEnter,
    onLeave
}) => (
    <Waypoint onEnter={() => onEnter(sectionName)} onLeave={() => onLeave(sectionName)}>
        <div>
            <Anchor id={sectionName} />
            <div className="content-section-a">
                <div className="container">
                    <Row>
                        <Col lg={10} lgOffset={1} sm={12}>
                            <hr className="section-heading-spacer" />
                            <div className="clearfix"></div>
                            <h2 className="section-heading">Zühlke Jass-Challenge 2017</h2>
                            <p className="lead">
                                You are a student, programmer and you have some Jass experience? Then it is
                                time to prove your skills and create your own Jass-Bot that will compete against other
                                Bots.
                            </p>
                            <p className="lead">
                                Zühlke Engineering AG invites you to participate in a unique challenge where
                                we want to find the best Jass implementation from students in Switzerland.
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </Waypoint>
);

AboutSection.propTypes = {
    onEnter: React.PropTypes.func.isRequired,
    onLeave: React.PropTypes.func.isRequired,
};

export default AboutSection;
