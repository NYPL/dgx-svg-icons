import React from 'react';

const RadioActiveIcon = ({
  className,
  title,
  height,
  width,
  viewBox,
  fill,
  ariaHidden,
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    fill={fill}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
    <path d="M16,4A12,12,0,1,1,4,16,12.01358,12.01358,0,0,1,16,4m0-4A16,16,0,1,0,32,16,16,16,0,0,0,16,0Z" />
    <circle cx="16" cy="15.94029" r="8.02846" />
  </svg>
);

RadioActiveIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  ariaHidden: React.PropTypes.bool,
};

RadioActiveIcon.defaultProps = {
  className: 'radioActiveIcon',
  title: 'NYPL Radio Active Icon',
  height: '24px',
  width: '24px',
  viewBox: '0 0 32 32',
  fill: '#000',
};

export default RadioActiveIcon;
