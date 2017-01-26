import React from 'react';

const LoginIconSolid = ({ viewBox, height, width, title, className, style, fill, ariaHidden, preserveAspectRatio }) => (
  <svg
    viewBox={viewBox}
    height={height}
    width={width}
    className={`${className} svgIcon`}
    style={style}
    fill={fill}
    aria-hidden={ariaHidden}
    preserveAspectRatio={preserveAspectRatio}
  >
    <title>{title}</title>
    <g>
      <circle cx="16.07184" cy="10.26496" r="5.39254" />
      <polygon points="27.313 27.313 4.688 27.313 8.031 19.188 23.969 19.188 27.313 27.313" />
    </g>
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
};

LoginIconSolid.defaultProps = {
  className: 'loginIcon',
  title: 'Log in',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
  preserveAspectRatio: 'xMidYMid meet',
};

export default LoginIconSolid;
