import React from 'react';

const SmallDotClosedIcon = ({
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
    <circle cx="6" cy="6" r="6" fill={fill} />
  </svg>
);

SmallDotClosedIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  ariaHidden: React.PropTypes.bool,
};

SmallDotClosedIcon.defaultProps = {
  className: 'smallDotClosedIcon',
  title: 'NYPL Small Dot Closed Icon',
  height: '12px',
  width: '12px',
  viewBox: '0 0 12 12',
  fill: '#010101',
};

export default SmallDotClosedIcon;
