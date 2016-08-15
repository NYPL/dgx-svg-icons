import React from 'react';

const SmallDotOpenIcon = ({
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
    <path d="M6,2A4,4,0,1,1,2,6,4.00454,4.00454,0,0,1,6,2M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0Z" fill={fill} />
  </svg>
);

SmallDotOpenIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  ariaHidden: React.PropTypes.bool,
};

SmallDotOpenIcon.defaultProps = {
  className: 'smallDotOpenIcon',
  title: 'NYPL Small Dot Open Icon',
  height: '12px',
  width: '12px',
  viewBox: '0 0 12 12',
  fill: '#010101',
};

export default SmallDotOpenIcon;
