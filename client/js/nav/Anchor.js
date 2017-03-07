import React from 'react';

const Anchor = ({ id }) => (
    <a name={id} id={id} className="anchor" />
);

Anchor.propTypes = {
    id: React.PropTypes.string
};

export default Anchor;
