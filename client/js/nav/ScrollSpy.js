import React from 'react';
import Waypoint from 'react-waypoint';

const ScrollSpy = ({href, onBefore, onAfter}) => {
    return (
        <Waypoint
            onEnter={({previousPosition}) => (
                previousPosition === Waypoint.above && onBefore(href)
            )}
            onLeave={({currentPosition}) => (
                currentPosition === Waypoint.above && onAfter(href)
            )}
            topOffset={10}
            bottomOffset={-10}
        />
    );
};

ScrollSpy.propTypes = {
    href: React.PropTypes.string,
    onBefore: React.PropTypes.any,
    onAfter: React.PropTypes.any,
};

export default ScrollSpy;
