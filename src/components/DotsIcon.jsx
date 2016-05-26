import React from 'react';

const DotsIcon = ({
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
    <circle cx="16" cy="16" r="1.9029" />
    <circle cx="24" cy="16" r="1.9029" />
    <circle cx="8" cy="16" r="1.9029" />
  </svg>
);

DotsIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  ariaHidden: React.PropTypes.bool,
};

DotsIcon.defaultProps = {
  className: 'dotsIcon',
  title: 'NYPL Dots SVG Icon',
  height: '24px',
  width: '24px',
  viewBox: '0 0 32 32',
  fill: '#000',
};

export default DotsIcon;
