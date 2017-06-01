import React from 'react';
import PropTypes from 'prop-types';

const DivideLineIcon = ({ ariaHidden, className, height, length, stroke, strokeWidth, title, viewBox, width }) => (
  <svg
    aria-hidden={ariaHidden}
    className={`${className} svgIcon`}
    height={height}
    viewBox={viewBox}
    width={width}
  >
    <title>{title}</title>
    <line x1="0" y1="0" x2={length} y2="0" stroke={stroke} strokeWidth={strokeWidth} />
  </svg>
);

DivideLineIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  length: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
};

DivideLineIcon.defaultProps = {
  ariaHidden: true,
  className: 'divideLine-icon',
  height: '2',
  length: '84',
  stroke: '#000',
  strokeWidth: '2',
  title: 'NYPL Divide Line SVG Icon',
  viewBox: '0 0 84 2',
  width: '84',
};

export default DivideLineIcon;
