import React from 'react';
import PropTypes from 'prop-types';

const GridIcon = ({ viewBox, height, width, title, className, ariaHidden }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
    <rect x="8" y="8" width="7" height="7" />
    <rect x="17" y="8" width="7" height="7" />
    <rect x="8" y="17" width="7" height="7" />
    <rect x="17" y="17" width="7" height="7" />
  </svg>
);

GridIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  ariaHidden: PropTypes.bool,
};

GridIcon.defaultProps = {
  className: 'grid-icon',
  title: 'NYPL Grid SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default GridIcon;
