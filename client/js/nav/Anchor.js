import React from 'react';

const Anchor = ({children, id}) => {
    return (
        <a id={id} href={'#' + id} className="anchor">
            {children}
        </a>
    );
};

Anchor.propTypes = {
    children: React.PropTypes.object,
    id: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ])
};

export default Anchor;
