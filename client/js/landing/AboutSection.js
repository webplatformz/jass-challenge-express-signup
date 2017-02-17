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
                            <h2 className="section-heading">Introduction to Jass Challenge</h2>
                            <p className="lead">here goes the info regarding jass challenge</p>
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
