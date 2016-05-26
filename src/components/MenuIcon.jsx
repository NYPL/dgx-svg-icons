import React from 'react';

const MenuIcon = ({ viewBox, height, width, title, className, style, fill, ariaHidden }) => (
  <svg
    viewBox={viewBox}
    width={width}
    height={height}
    className={`${className} svgIcon`}
    fill={fill}
    style={style}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
    <path d="M26.22029,10.40244H5.77971a1.09221,1.09221,0,1,1,0-2.18441H26.22029A1.09221,1.09221,0,1,1,26.22029,10.40244Z" />
    <path d="M26.22029,16.95568H5.77971a1.09221,1.09221,0,0,1,0-2.18441H26.22029A1.09221,1.09221,0,0,1,26.22029,16.95568Z" />
    <path d="M26.22029,23.782H5.77971a1.09221,1.09221,0,1,1,0-2.18441H26.22029A1.09221,1.09221,0,1,1,26.22029,23.782Z" />
  </svg>
);

MenuIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  style: React.PropTypes.object,
  ariaHidden: React.PropTypes.bool,
};

MenuIcon.defaultProps = {
  className: 'menuIcon',
  title: 'NYPL Hamburger Menu SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default MenuIcon;
