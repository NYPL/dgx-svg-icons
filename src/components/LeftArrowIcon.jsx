import React from 'react';
import PropTypes from 'prop-types';

const LeftArrowIcon = ({
  viewBox,
  height,
  width,
  title,
  className,
  ariaHidden,
  preserveAspectRatio,
  iconId,
  svgRole,
  focusable,
}) => (
  <svg
    viewBox={viewBox}
    height={height}
    width={width}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
    preserveAspectRatio={preserveAspectRatio}
    aria-labelledby={iconId}
    role={svgRole}
    focusable={focusable}
  >
    <title id={iconId}>{title}</title>
    <polygon points="16.959 24.065 9.905 16.963 27.298 16.963 27.298 14.548 9.905 14.548 16.959 7.397 15.026 5.417 4.688 15.707 15.026 25.998 16.959 24.065" />
  </svg>
);

LeftArrowIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  style: PropTypes.object,
  ariaHidden: PropTypes.bool,
  preserveAspectRatio: PropTypes.string,
  svgRole: PropTypes.string,
  iconId: PropTypes.string,
  focusable: PropTypes.bool,
};

LeftArrowIcon.defaultProps = {
  ariaHidden: true,
  className: 'leftArrowIcon',
  title: 'NYPL Left Arrow Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
  preserveAspectRatio: 'xMidYMid meet',
  svgRole: 'img',
};

export default LeftArrowIcon;
