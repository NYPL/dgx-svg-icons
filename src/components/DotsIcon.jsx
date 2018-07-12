import React from 'react';
import PropTypes from 'prop-types';

const DotsIcon = ({
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
    <circle cx="16" cy="16" r="1.9029" />
    <circle cx="24" cy="16" r="1.9029" />
    <circle cx="8" cy="16" r="1.9029" />
  </svg>
);

DotsIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaHidden: PropTypes.bool,
  focusable: PropTypes.bool,
};

DotsIcon.defaultProps = {
  className: 'dotsIcon',
  title: 'NYPL Dots SVG Icon',
  height: '24px',
  width: '24px',
  viewBox: '0 0 32 32',
  fill: '#000',
};

export default DotsIcon;
