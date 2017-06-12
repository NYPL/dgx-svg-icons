import React from 'react';
import PropTypes from 'prop-types';

const XIcon = ({ viewBox, height, width, title, className, style, fill, ariaHidden, preserveAspectRatio, iconId, svgRole }) => (
  <svg
    viewBox={viewBox}
    height={height}
    width={width}
    className={`${className} svgIcon`}
    style={style}
    fill={fill}
    aria-hidden={ariaHidden}
    preserveAspectRatio={preserveAspectRatio}
    aria-labelledby={iconId}
    role={svgRole}
  >
    <title id={iconId}>{title}</title>
    <path d="M17.91272,15.97339l5.65689-5.65689A1.32622,1.32622,0,0,0,21.694,8.44093L16.04938,14.0856l-5.65082-5.725A1.32671,1.32671,0,1,0,8.51,10.22454l5.66329,5.73712L8.43038,21.7046a1.32622,1.32622,0,1,0,1.87557,1.87557l5.73088-5.73088,5.65074,5.72441a1.32626,1.32626,0,1,0,1.88852-1.86261Z" />
  </svg>
);

XIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  style: PropTypes.object,
  ariaHidden: PropTypes.bool,
  preserveAspectRatio: PropTypes.string,
  iconId: PropTypes.string,
  svgRole: PropTypes.string,
};

XIcon.defaultProps = {
  ariaHidden: true,
  className: 'x-icon',
  title: 'Close Icon',
  fill: '#000',
  height: '32',
  width: '32',
  viewBox: '0 0 32 32',
  preserveAspectRatio: 'xMidYMid meet',
  svgRole: 'img',
};

export default XIcon;
