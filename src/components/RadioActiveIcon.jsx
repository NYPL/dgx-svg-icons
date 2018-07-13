import React from 'react';
import PropTypes from 'prop-types';

const RadioActiveIcon = ({
  className,
  title,
  height,
  width,
  viewBox,
  fill,
  ariaHidden,
  focusable,
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    fill={fill}
    aria-hidden={ariaHidden}
    focusable={focusable}
  >
    <title>{title}</title>
    <path d="M7.96875,4.64844A3.32031,3.32031,0,1,1,4.64844,7.96875,3.32407,3.32407,0,0,1,7.96875,4.64844M7.96875,0A7.96875,7.96875,0,1,0,15.9375,7.96875,7.96875,7.96875,0,0,0,7.96875,0Z" />
  </svg>
);

RadioActiveIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaHidden: PropTypes.bool,
  focusable: PropTypes.bool,
};

RadioActiveIcon.defaultProps = {
  className: 'radioActiveIcon',
  title: 'NYPL Radio Active Icon',
  height: '16px',
  width: '16px',
  viewBox: '0 0 16 16',
  fill: '#000',
};

export default RadioActiveIcon;
