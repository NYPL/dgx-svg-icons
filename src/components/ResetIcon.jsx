import React from 'react';
import PropTypes from 'prop-types';

const ResetIcon = ({ viewBox, height, width, title, className, fill, ariaHidden, labelledById }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
    aria-labelledby={labelledById}
    fill={fill}
  >
    <title id={labelledById}>{title}</title>
    <path d="M10.96075,11l4.60907-3.19434a1,1,0,0,0-1.13965-1.64355L5.939,12.04688l8.83594,6.248a0.99981,0.99981,0,0,0,1.1543-1.63281L10.75061,13H23v8H6a1,1,0,0,0,0,2H25V11H10.96075Z" />
  </svg>
);

ResetIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaHidden: PropTypes.bool,
  labelledById: PropTypes.string,
};

ResetIcon.defaultProps = {
  ariaHidden: true,
  className: 'reset-icon',
  title: 'NYPL Reset SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
  fill: '#000',
  labelledById: '',
};

export default ResetIcon;
