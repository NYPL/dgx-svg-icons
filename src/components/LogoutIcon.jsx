import React from 'react';
import PropTypes from 'prop-types';

const LogoutIcon = ({
  viewBox,
  height,
  width,
  title,
  className,
  style,
  ariaHidden }) => (

  <svg
    viewBox={viewBox}
    height={height}
    width={width}
    className={`${className} svgIcon`}
    style={style}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
    <path d="M35.951 9.268a2.826 2.826 0 1 0-4.084 3.906l5.418 5.664H13.187a2.826 2.826 0 0 0 0 5.652h24.258l-5.742 6.222a2.826 2.826 0 0 0 4.154 3.834l11.916-12.917z"/><path d="M45.173 39.56H5.652V5.653h17.366a2.826 2.826 0 0 0 0-5.652H0v45.212h45.173a2.826 2.826 0 0 0 0-5.651z"/>
  </svg>
);

LogoutIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  style: PropTypes.object,
  ariaHidden: PropTypes.bool,
};

LogoutIcon.defaultProps = {
  className: 'logoutIcon',
  height: '45.212',
  title: 'NYPL Logout SVG Icon',
  viewBox: '0 0 47.99 45.212',
  width: '47.99',
};

export default LogoutIcon;
