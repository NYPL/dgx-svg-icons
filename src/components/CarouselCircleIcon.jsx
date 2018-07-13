import React from 'react';
import PropTypes from 'prop-types';

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
  focusable,
}) => (
  <svg
    className={`${className} svgIcon`}
    width={width}
    height={height}
    viewBox={viewBox}
    aria-hidden={ariaHidden}
    focusable={focusable}
  >
    <title>{title}</title>
    {(type !== 'solid') ? renderSvgIcon(fill) : renderSolidSvgIcon(fill)}
  </svg>
);

CarouselCircleIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaHidden: PropTypes.bool,
  focusable: PropTypes.bool,
};

CarouselCircleIcon.defaultProps = {
  className: 'nyplCarouselCircle-icon',
  title: 'NYPL Carousel Circle SVG Icon',
  ref: 'nyplCarouselCircle',
  type: '',
  height: '24px',
  width: '24px',
  viewBox: '0 0 24 24',
  fill: '#000',
};

export default CarouselCircleIcon;
