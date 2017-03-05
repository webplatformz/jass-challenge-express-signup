import React from 'react';
import Anchor from '../nav/Anchor';
import ScrollSpy from '../nav/ScrollSpy';

import {Col, Row} from 'react-bootstrap';

const AboutSection = ({onBefore, onAfter}) => {
    return (
        <div>
            <ScrollSpy href={'#about'} onBefore={onBefore} onAfter={onAfter}/>
            <Anchor id="about"></Anchor>
            <div className="content-section-a">
                <div className="container">
                    <Row>
                        <Col lg={10} lgOffset={1} sm={12}>
                            <hr className="section-heading-spacer"/>
                            <div className="clearfix"></div>
                            <h2 className="section-heading">Zühlke Jass-Challenge 2017</h2>
                            <p className="lead">You are a student, programmer and you have some Jass experience? Then it is time to prove your skills and create your own Jass-Bot that will compete against other Bot’s.
                            </p>
                            <p className="lead">Zühlke Engineering AG invites you to participate in a unique challenge where we want to find the best Jass implementation from students in switzerland.
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

AboutSection.propTypes = {
    onBefore: React.PropTypes.any,
    onAfter: React.PropTypes.any,
}

export default AboutSection;
