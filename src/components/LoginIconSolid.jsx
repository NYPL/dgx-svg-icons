import React from 'react';
const LoginIconSolid = ({ viewBox, height, width, title, className, style, fill, ariaHidden, preserveAspectRatio, iconId, svgRole, }) => (
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
  <ellipse cx="16.07184" cy="9.57746" rx="4.09334" ry="4.85329"/>
  <path d="M25.25882,27.3451,6.61176,27.33725a2.05352,2.05352,0,0,1-1.87843-2.5451l2.46189-6.50245a2.1203,2.1203,0,0,1,1.34706-1.18431,45.76876,45.76876,0,0,1,7.00567-.657c2.94823,0,5.86851.45206,7.09041.53934a2.20375,2.20375,0,0,1,1.97255,1.1098l2.62353,6.64706A2.01818,2.01818,0,0,1,25.25882,27.3451Z"/>
  </svg>
);


LoginIconSolid.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  style: React.PropTypes.object,
  ariaHidden: React.PropTypes.bool,
  preserveAspectRatio: React.PropTypes.string,
  iconId: React.PropTypes.string,
  svgRole: React.PropTypes.string,
};

LoginIconSolid.defaultProps = {
  className: 'loginIcon',
  title: 'You are logged in',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
  preserveAspectRatio: 'xMidYMid meet',
  iconId: 'loggedin-icon',
  svgRole: 'img',
};

export default LoginIconSolid;
