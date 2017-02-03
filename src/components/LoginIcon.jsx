import React from 'react';
const LoginIcon = ({ viewBox, height, width, title, className, style, fill, ariaHidden, preserveAspectRatio, ariaDesc, iconId, svgRole, }) => (
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
  <path d="M16.07184,6.52418c1.24313,0,2.29334,1.39823,2.29334,3.05329s-1.05022,3.05329-2.29334,3.05329S13.7785,11.23252,13.7785,9.57746s1.05022-3.05329,2.29334-3.05329m0-1.8c-2.26069,0-4.09334,2.17289-4.09334,4.85329s1.83265,4.85329,4.09334,4.85329,4.09334-2.17289,4.09334-4.85329-1.83265-4.85329-4.09334-4.85329Z" opacity="0.85"/>
  <path d="M25.28125,27.34375H21a1,1,0,0,1,0-2h4.28125l-2.377-6.2041a.28873.28873,0,0,0-.10547-.11719,47.03461,47.03461,0,0,0-6.7832-.585,48.40643,48.40643,0,0,0-6.957.6084h.00049c.0249,0-.00244.03418-.02246.085l-2.355,6.14551L11,25.34375a1,1,0,0,1,0,2H6.71826a2.04254,2.04254,0,0,1-1.90088-2.791l2.355-6.14551a2.07691,2.07691,0,0,1,1.57617-1.33789,50.4409,50.4409,0,0,1,7.26709-.63184,48.54187,48.54187,0,0,1,7.11816.61621,2.19071,2.19071,0,0,1,1.63184,1.35352l2.417,6.14551a2.04377,2.04377,0,0,1-1.90137,2.791Z" opacity="0.85"/>
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
  ariaDesc: React.PropTypes.string,
  iconId: React.PropTypes.string,
  svgRole: React.PropTypes.string,
};

LoginIcon.defaultProps = {
  className: 'loginIcon',
  title: 'Log in to NYPL',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
  preserveAspectRatio: 'xMidYMid meet',
  iconId: 'login-icon',
  svgRole: 'img',
};

export default LoginIcon;
