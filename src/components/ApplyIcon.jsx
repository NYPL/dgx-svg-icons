import React from 'react';
import PropTypes from 'prop-types';

const ApplyIcon = ({
    ariaHidden,
    className,
    height,
    iconId,
    preserveAspectRatio,
    title,
    viewBox,
    width,
  }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-labelledby={iconId}
    className={`${className} svgIcon`}
    height={height}
    preserveAspectRatio={preserveAspectRatio}
    viewBox={viewBox}
    width={width}
  >
    <title id={iconId}>{title}</title>
      <g>
      <path d="M47.1181,31.16626v9.81838a7.69657,7.69657,0,0,1-7.69659,7.69659H14.65722a7.69657,7.69657,0,0,1-7.69659-7.69659V16.22035a7.69657,7.69657,0,0,1,7.69659-7.69659h24.7643A7.68562,7.68562,0,0,1,46.04723,12.318v-.029l4.98249-4.98249A14.61787,14.61787,0,0,0,39.42151,1.56313H14.65722A14.67381,14.67381,0,0,0,0,16.22035v24.7643A14.67381,14.67381,0,0,0,14.65722,55.64186h24.7643A14.67381,14.67381,0,0,0,54.07873,40.98464V24.20557Z"/>
      <path d="M66.88559,1.11424q-.04628-.04628-.09412-.09092a3.8044,3.8044,0,0,0-5.28616.091L52.99074,9.62894,47.1181,15.50158,32.5635,30.05624,17.90785,15.40066a3.80454,3.80454,0,0,0-5.39511,5.3657l.01458.01458L32.5635,40.81739,47.1181,26.26266,54.07873,19.302,66.88565,6.49491A3.80469,3.80469,0,0,0,66.88559,1.11424Z"/>
    </g>
  </svg>
);

ApplyIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  preserveAspectRatio: PropTypes.string,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
};

ApplyIcon.defaultProps = {
  ariaHidden: true,
  className: 'apply-icon',
  height: '68',
  preserveAspectRatio: 'xMidYMid meet',
  title: 'apply',
  viewBox: '0 0 68 55',
  width: '55',
};

export default ApplyIcon;
