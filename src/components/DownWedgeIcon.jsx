import React from 'react';
import PropTypes from 'prop-types';

const DownWedgeIcon = ({ ariaHidden, className, stroke, height, title, viewBox, width, focusable }) => (
  <svg
    aria-hidden={ariaHidden}
    className={`${className} svgIcon`}
    height={height}
    viewBox={viewBox}
    width={width}
    focusable={focusable}
    fill='none'
  >
    <title>{title}</title>
    <path d="M1 1L9 9L17 1" stroke={stroke} />
  </svg>
);

DownWedgeIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  stroke: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  focusable: PropTypes.bool,
};

DownWedgeIcon.defaultProps = {
  ariaHidden: true,
  className: 'down-wedge-icon',
  stroke: '#000',
  height: '10',
  title: 'NYPL Down Wedge SVG Icon',
  width: '18',
  viewBox: '0 0 18 10',
};

export default DownWedgeIcon;
