import React from 'react';

const DownWedgeIcon = ({
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
    <polygon points="67.938 0 34 24 0 0 10 0 34.1 16.4 58.144 0 67.938 0"></polygon>
  </svg>
);

DownWedgeIcon.propTypes = {
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

DownWedgeIcon.defaultProps = {
  ariaHidden: true,
  className: 'downWedgeIcon',
  title: 'NYPL Wedge Down Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 68 32',
  preserveAspectRatio: 'xMidYMid meet',
  svgRole: 'img',
};

export default DownWedgeIcon;
