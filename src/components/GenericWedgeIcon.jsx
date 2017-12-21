import React from 'react';
import PropTypes from 'prop-types';

const GenericWedgeIcon = ({
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
    <path d="M17.749 26.818L6.205 15.288 17.832 3.592a2.075 2.075 0 0 0 .01-2.901 2.278 2.278 0 0 0-3.243-.026L0 15.225 14.693 29.87a2.16 2.16 0 0 0 3.065-.016 2.16 2.16 0 0 0-.01-3.036z"/>
  </svg>
);

GenericWedgeIcon.propTypes = {
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
};

GenericWedgeIcon.defaultProps = {
  ariaHidden: true,
  className: 'GenericWedgeIcon',
  title: 'NYPL Wedge Down Icon',
  width: '30.5',
  height: '18.428',
  viewBox: '0 0 18.428 30.5',
  preserveAspectRatio: 'xMidYMid meet',
  svgRole: 'img',
};

export default GenericWedgeIcon;
