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
                        <Col lg={12}>
                            <hr className="section-heading-spacer" />
                            <p className="lead lead__spacing">
                                Like to Jass? Love to program? Still a student? Demonstrate your skills, create your own bot and become the Master of Schieber-Bot-Jass!
                            </p>
                            <hr className="section-heading-spacer" />
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
