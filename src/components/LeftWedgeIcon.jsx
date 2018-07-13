import React from 'react';
import PropTypes from 'prop-types';

const LeftWedgeIcon = ({ ariaHidden, className, fill, height, title, viewBox, width, focusable }) => (
  <svg
    aria-hidden={ariaHidden}
    className={`${className} svgIcon`}
    fill={fill}
    height={height}
    viewBox={viewBox}
    width={width}
    focusable={focusable}
  >
    <title>{title}</title>
    <polygon points="19.156 23.563 11.593 16 19.156 8.438 20.563 9.845 14.408 16 20.563 22.155 19.156 23.563" />
  </svg>
);

LeftWedgeIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  focusable: PropTypes.bool,
};

LeftWedgeIcon.defaultProps = {
  ariaHidden: true,
  className: 'left-wedge-icon',
  fill: '#000',
  height: '32',
  title: 'NYPL Left Wedge SVG Icon',
  width: '32',
  viewBox: '0 0 32 32',
};

export default LeftWedgeIcon;
