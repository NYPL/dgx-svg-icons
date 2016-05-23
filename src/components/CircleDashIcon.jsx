import React from 'react';

const CircleDashIcon = ({ viewBox, height, width, title, className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
  >
    <title>{title}</title>
    <path d="M16,3A13,13,0,1,1,3,16,13.0147,13.0147,0,0,1,16,3m0-3A16,16,0,1,0,32,16,16,16,0,0,0,16,0h0Z" fill={fill} />
    <path d="M24,14H8a2.0025,2.0025,0,0,0,0,4H24A2.0025,2.0025,0,0,0,24,14Z" fill={fill} />
  </svg>
);

CircleDashIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
};

CircleDashIcon.defaultProps = {
  className: 'circle-dash-icon',
  title: 'NYPL Circle Dash SVG Icon',
  width: '24',
  height: '24',
  viewBox: '0 0 32 32',
  fill: '#FFF',
};

export default CircleDashIcon;
