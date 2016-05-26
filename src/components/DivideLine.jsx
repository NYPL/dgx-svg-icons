import React from 'react';

const DividedLine = ({ ariaHidden, className, height, length, stroke, strokeWidth, title, viewBox, width }) => (
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

DividedLine.propTypes = {
  ariaHidden: React.PropTypes.bool,
  className: React.PropTypes.string,
  height: React.PropTypes.string,
  length: React.PropTypes.string,
  stroke: React.PropTypes.string,
  strokeWidth: React.PropTypes.string,
  title: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  width: React.PropTypes.string,
};

DividedLine.defaultProps = {
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