import React from 'react';
import PropTypes from 'prop-types';

const XCloseIcon = ({
    ariaHidden,
    className,
    height,
    iconId,
    preserveAspectRatio,
    title,
    viewBox,
    width,
    focusable,
  }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-labelledby={iconId}
    className={`${className} svgIcon`}
    height={height}
    preserveAspectRatio={preserveAspectRatio}
    viewBox={viewBox}
    width={width}
    focusable={focusable}
  >
    <title id={iconId}>{title}</title>
      <g>
        <path d="M52.36107,47.9805,65.04781,35.29375a2.97433,2.97433,0,1,0-4.20634-4.20634L48.18214,43.74674,35.509,30.90731a2.97542,2.97542,0,0,0-4.23539,4.1802L43.97471,47.95417,31.095,60.83392a2.97433,2.97433,0,1,0,4.20634,4.20634L48.154,52.18757,60.82695,65.02573a2.9744,2.9744,0,0,0,4.23539-4.17729Z"/>
        <path d="M48.07141,96.142A48.0713,48.0713,0,1,1,82.07922,82.07849h0A47.94915,47.94915,0,0,1,48.07141,96.142Zm0-90.48193A42.41114,42.41114,0,1,0,78.07532,18.06775,42.29216,42.29216,0,0,0,48.07141,5.66Z"/>
      </g>
  </svg>
);

XCloseIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  preserveAspectRatio: PropTypes.string,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  focusable: PropTypes.bool,
};

XCloseIcon.defaultProps = {
  ariaHidden: true,
  className: 'x-close-circle-icon',
  height: '48',
  preserveAspectRatio: 'xMidYMid meet',
  title: 'close',
  viewBox: '0 0 98 98',
  width: '48',
};

export default XCloseIcon;
