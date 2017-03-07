import React from 'react';

const Anchor = ({ children, id }) => (
    <a name={id} id={id} href={'#' + id} className="anchor">
        {children}
    </a>
);

Anchor.propTypes = {
    children: React.PropTypes.object,
    id: React.PropTypes.string
};

export default Anchor;
