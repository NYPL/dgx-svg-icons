import React from 'react';

const LoginIcon = ({ viewBox, height, width, title, className, style, fill, ariaHidden, preserveAspectRatio }) => (
  <svg
    viewBox={viewBox}
    width={width}
    height={height}
    className={`${className} svgIcon`}
    fill={fill}
    style={style}
    aria-hidden={ariaHidden}
    preserveAspectRatio={preserveAspectRatio}
  >
    <title>{title}</title>
    <path d="M24.76255,27.008H24.75782l-8.76374-.041-8.7527.041a0.94364,0.94364,0,0,1-.74489-0.30584,1.05056,1.05056,0,0,1-.309-0.74411V23.43727a5.3418,5.3418,0,0,1,2.83375-4.98015c0.48556-.31372,2.84006-1.6632,7.3378-1.6632,4.28728,0,6.13651,1.22494,6.693,1.69946A4.71575,4.71575,0,0,1,25.8125,23.144v2.814A1.04958,1.04958,0,0,1,24.76255,27.008Zm-8.76847-2.14088,7.71852,0.03626V23.144a2.66677,2.66677,0,0,0-1.70577-2.82666,1.03022,1.03022,0,0,1-.32476-0.23805h0c-0.00158,0-1.299-1.18552-5.323-1.18552-4.23289,0-6.19168,1.31953-6.2106,1.33371a1.21229,1.21229,0,0,1-.1545.08986,3.28787,3.28787,0,0,0-1.70813,3.11988v1.46614ZM11.9488,15.122a1.05092,1.05092,0,0,1-.9656-0.6369c-0.80086-1.86972-2.01161-4.6948.1608-7.28735a5.95572,5.95572,0,0,1,4.88241-2.33637,6.00486,6.00486,0,0,1,4.83275,2.34031c2.15822,2.58861.95536,5.4129,0.15765,7.28183a1.04889,1.04889,0,1,1-1.92963-.82293c0.99319-2.32927,1.28957-3.76073.15923-5.1173a3.88089,3.88089,0,0,0-3.22-1.58359,3.84247,3.84247,0,0,0-3.27123,1.582c-1.13823,1.35973-.84027,2.78961.15765,5.1173A1.05043,1.05043,0,0,1,11.9488,15.122Z" />
  </svg>
);

LoginIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  style: React.PropTypes.object,
  ariaHidden: React.PropTypes.bool,
  preserveAspectRatio: React.PropTypes.string,
};

LoginIcon.defaultProps = {
  className: 'loginIcon',
  title: 'Log in',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
  preserveAspectRatio: 'xMidYMid meet',
};

export default LoginIcon;
