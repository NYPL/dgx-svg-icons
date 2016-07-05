import React from 'react';

const RightWedgeIcon = ({ ariaHidden, className, fill, height, title, viewBox, width }) => (
  <svg
    aria-hidden={ariaHidden}
    className={`${className} svgIcon`}
    fill={fill}
    height={height}
    viewBox={viewBox}
    width={width}
  >
    <title>{title}</title>
    <polygon points="13 8.437 20.563 16 13 23.563 11.593 22.155 17.748 16 11.593 9.845 13 8.437" />
  </svg>
);

RightWedgeIcon.propTypes = {
  ariaHidden: React.PropTypes.bool,
  className: React.PropTypes.string,
  fill: React.PropTypes.string,
  height: React.PropTypes.string,
  title: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
};

RightWedgeIcon.defaultProps = {
  ariaHidden: true,
  className: 'right-wedge-icon',
  fill: '#000',
  height: '32',
  title: 'NYPL Right Wedge SVG Icon',
  width: '32',
  viewBox: '0 0 32 32',
};

export default RightWedgeIcon;
