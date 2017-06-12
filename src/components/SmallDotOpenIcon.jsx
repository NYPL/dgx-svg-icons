import React from 'react';
import PropTypes from 'prop-types';

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
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaHidden: PropTypes.bool,
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
