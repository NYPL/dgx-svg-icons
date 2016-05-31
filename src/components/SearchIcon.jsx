import React from 'react';

const SearchIcon = ({ viewBox, height, width, title, className, style, fill, ariaHidden }) => (
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
    <path d="M25.26014,23.627l-3.76-3.75948a8.53632,8.53632,0,1,0-2.07145,1.85393l3.86877,3.86822A1.38781,1.38781,0,0,0,25.26014,23.627ZM9.109,14.52943a5.75012,5.75012,0,1,1,5.75012,5.74948A5.75662,5.75662,0,0,1,9.109,14.52943Z" />
  </svg>
);

SearchIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  style: React.PropTypes.object,
  ariaHidden: React.PropTypes.bool,
};

SearchIcon.defaultProps = {
  ariaHidden: true,
  className: 'searchIcon',
  title: 'NYPL Search SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default SearchIcon;
