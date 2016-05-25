import React from 'react';

const renderSvgIcon = (fill) => (
  <path
    d="M12,4a8,8,0,1,1-8,8,8.00906,8.00906,0,0,1,8-8m0-4A12,12,0,1,0,24,12,12,12,0,0,0,12,0h0Z"
    fill={fill}
  />
);

const renderSolidSvgIcon = (fill) => (
  <path
    d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0h0Z"
    fill={fill}
  />
);

const CarouselCircleIcon = ({
  className,
  title,
  type,
  height,
  width,
  viewBox,
  fill,
  ariaHidden,
}) => (
  <svg
    className={`${className} svgIcon`}
    width={width}
    height={height}
    viewBox={viewBox}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
    {(type !== 'solid') ? renderSvgIcon(fill) : renderSolidSvgIcon(fill)}
  </svg>
);

CarouselCircleIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  type: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  ariaHidden: React.PropTypes.bool,
};

CarouselCircleIcon.defaultProps = {
  className: 'nyplCarouselCircle-icon',
  title: 'NYPL Carousel Circle SVG Icon',
  ref: 'nyplCarouselCircle',
  type: '',
  height: '24px',
  width: '24px',
  viewBox: '0 0 24 24',
  fill: '#FFF',
};

export default CarouselCircleIcon;
