import React from 'react';

const RightArrowIcon = ({
  viewBox,
  height,
  width,
  title,
  className,
  ariaHidden,
  preserveAspectRatio,
  iconId,
  svgRole,
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
  >
    <title id={iconId}>{title}</title>
    <polygon points="16.959 25.998 27.298 15.707 16.959 5.417 15.026 7.397 22.08 14.548 4.688 14.548 4.687 16.963 22.08 16.963 15.026 24.065 16.959 25.998" />
  </svg>
);

RightArrowIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  style: React.PropTypes.object,
  ariaHidden: React.PropTypes.bool,
  preserveAspectRatio: React.PropTypes.string,
  svgRole: React.PropTypes.string,
  iconId: React.PropTypes.string,
};

RightArrowIcon.defaultProps = {
  ariaHidden: true,
  className: 'rightArrowIcon',
  title: 'NYPL Right Arrow Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
  preserveAspectRatio: 'xMidYMid meet',
  svgRole: 'img',
};

export default RightArrowIcon;
