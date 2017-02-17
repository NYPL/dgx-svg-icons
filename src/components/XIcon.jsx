import React from 'react';

const XIcon = ({ ariaHidden, className, fill, width, height, title, viewBox, preserveAspectRatio, iconId, svgRole }) => (
  <svg
    aria-hidden={ariaHidden}
    className={`${className} svgIcon`}
    fill={fill}
    width={width}
    height={height}
    viewBox={viewBox}
    preserveAspectRatio={preserveAspectRatio}
    aria-labelledby={iconId}
    role={svgRole}
  >
    <title id={iconId}>{title}</title>
    <path d="M17.91272,15.97339l5.65689-5.65689A1.32622,1.32622,0,0,0,21.694,8.44093L16.04938,14.0856l-5.65082-5.725A1.32671,1.32671,0,1,0,8.51,10.22454l5.66329,5.73712L8.43038,21.7046a1.32622,1.32622,0,1,0,1.87557,1.87557l5.73088-5.73088,5.65074,5.72441a1.32626,1.32626,0,1,0,1.88852-1.86261Z" />
  </svg>
);

XIcon.propTypes = {
  ariaHidden: React.PropTypes.bool,
  className: React.PropTypes.string,
  fill: React.PropTypes.string,
  height: React.PropTypes.string,
  title: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  svgRole: React.PropTypes.string,
  reserveAspectRatio: React.PropTypes.string,
  iconId: React.PropTypes.string,
};

XIcon.defaultProps = {
  className: 'x-icon',
  title: 'NYPL X SVG Icon',
  height: '32',
  width: '32',
  viewBox: '0 0 32 32',
  preserveAspectRatio: 'xMidYMid meet',
  svgRole: 'img',
};

export default XIcon;
