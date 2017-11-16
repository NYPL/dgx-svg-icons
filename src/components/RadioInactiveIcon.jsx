import React from 'react';
import PropTypes from 'prop-types';

const RadioInactiveIcon = ({
  className,
  title,
  height,
  width,
  viewBox,
  fill,
  ariaHidden,
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    fill={fill}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
    <path d="M7.96875,1A6.96875,6.96875,0,1,1,1,7.96875,6.97663,6.97663,0,0,1,7.96875,1m0-1A7.96875,7.96875,0,1,0,15.9375,7.96875,7.96873,7.96873,0,0,0,7.96875,0Z" />
  </svg>
);

RadioInactiveIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaHidden: PropTypes.bool,
};

RadioInactiveIcon.defaultProps = {
  className: 'radioInactiveIcon',
  title: 'NYPL Radio Inactive Icon',
  height: '16px',
  width: '16px',
  viewBox: '0 0 16 16',
  fill: '#000',
};

export default RadioInactiveIcon;
