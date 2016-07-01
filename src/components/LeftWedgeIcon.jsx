import React from 'react';

const LeftWedgeIcon = ({ ariaHidden, className, fill, height, title, viewBox, width }) => (
  <svg
    aria-hidden={ariaHidden}
    className={`${className} svgIcon`}
    fill={fill}
    height={height}
    viewBox={viewBox}
    width={width}
  >
    <title>{title}</title>
    <polygon points="19.156 23.563 11.593 16 19.156 8.438 20.563 9.845 14.408 16 20.563 22.155 19.156 23.563" />
  </svg>
);

LeftWedgeIcon.propTypes = {
  ariaHidden: React.PropTypes.bool,
  className: React.PropTypes.string,
  fill: React.PropTypes.string,
  height: React.PropTypes.string,
  title: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
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
