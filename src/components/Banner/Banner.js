import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

export const StyledButton = styled('button')(props => props.theme.Button);
const Banner = props => <StyledButton {...props} />;

Banner.propTypes = {
    /** Banner content */
    children: PropTypes.node.isRequired,
    /** Banner type */
    type: PropTypes.oneOf(['primary', 'secondary']),
    /** Enable outline Banners */
    outline: PropTypes.bool,
};

Banner.defaultProps = {
    type: 'primary',
    outline: false,
};

export default Banner;
