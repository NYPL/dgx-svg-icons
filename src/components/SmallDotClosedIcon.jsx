import React from 'react';
import PropTypes from 'prop-types';

const SmallDotClosedIcon = ({
  className,
  title,
  height,
  width,
  viewBox,
  fill,
  ariaHidden,
  focusable,
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    fill={fill}
    aria-hidden={ariaHidden}
    focusable={focusable}
  >
    <title>{title}</title>
    <circle cx="6" cy="6" r="6" fill={fill} />
  </svg>
);

SmallDotClosedIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaHidden: PropTypes.bool,
  focusable: PropTypes.bool,
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
