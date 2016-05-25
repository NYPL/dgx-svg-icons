import React from 'react';

const CheckIcon = ({ viewBox, height, width, title, className, ariaHidden }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
    <path d="M25.51266,9.42987a1.40287,1.40287,0,0,0-1.94927.03357L12.891,20.13586,7.48668,14.73156a1.40294,1.40294,0,1,0-1.9841,1.984L12.891,24.10406,25.5474,11.44754A1.403,1.403,0,0,0,25.51266,9.42987Z"/>
  </svg>
);

CheckIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  ariaHidden: React.PropTypes.bool,
};

CheckIcon.defaultProps = {
  className: 'check-solo-icon',
  title: 'NYPL Check Solo SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default CheckIcon;
