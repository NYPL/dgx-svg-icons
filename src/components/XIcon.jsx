import React from 'react';

const XIcon = ({ viewBox, height, width, title, className, ariaHidden }) => (
  <svg
    viewBox={viewBox}
    width={width}
    height={height}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
    <path d="M17.42086,15.97192l4.20221-4.20221a0.98518,0.98518,0,0,0-1.39326-1.39326l-4.19313,4.19313L11.839,10.31679a0.98554,0.98554,0,0,0-1.40288,1.3846l4.207,4.26181-4.26614,4.26614a0.98518,0.98518,0,1,0,1.39326,1.39326l4.25718-4.25718L20.225,21.61779a0.98521,0.98521,0,0,0,1.40288-1.38364Z" />
  </svg>
);

XIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  ariaHidden: React.PropTypes.bool,
};

XIcon.defaultProps = {
  className: 'x-icon',
  title: 'NYPL X SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default XIcon;
