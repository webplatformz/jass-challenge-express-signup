import React from 'react';
import { connect } from 'react-redux';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ParticipateSection from './ParticipateSection';
import { leftSection, enteredSection } from '../redux/actions/index';

const LandingPage = ({
    enteredSection,
    leftSection
}) => (
    <div>
        <HeroSection />
        <AboutSection onEnter={enteredSection} onLeave={leftSection} />
        <ParticipateSection onEnter={enteredSection} onLeave={leftSection} />
    </div>
);

LandingPage.propTypes = {
    enteredSection: React.PropTypes.func.isRequired,
    leftSection: React.PropTypes.func.isRequired,
};

export default connect(
    () => ({}),
    {
        enteredSection,
        leftSection
    }
)(LandingPage);
