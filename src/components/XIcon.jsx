import React from 'react';

const XIcon = ({ ariaHidden, className, fill, height, title, viewBox, width }) => (
  <svg
    aria-hidden={ariaHidden}
    className={`${className} svgIcon`}
    fill={fill}
    height={height}
    viewBox={viewBox}
    width={width}
  >
    <title>{title}</title>
    <path d="M17.42086,15.97192l4.20221-4.20221a0.98518,0.98518,0,0,0-1.39326-1.39326l-4.19313,4.19313L11.839,10.31679a0.98554,0.98554,0,0,0-1.40288,1.3846l4.207,4.26181-4.26614,4.26614a0.98518,0.98518,0,1,0,1.39326,1.39326l4.25718-4.25718L20.225,21.61779a0.98521,0.98521,0,0,0,1.40288-1.38364Z" />
  </svg>
);

XIcon.propTypes = {
  ariaHidden: React.PropTypes.bool,
  className: React.PropTypes.string,
  fill: React.PropTypes.string,
  height: React.PropTypes.string,
  title: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
};

XIcon.defaultProps = {
  ariaHidden: true,
  className: 'x-icon',
  fill: '#000',
  height: '32',
  title: 'NYPL X SVG Icon',
  width: '32',
  viewBox: '0 0 32 32',
};

export default XIcon;
