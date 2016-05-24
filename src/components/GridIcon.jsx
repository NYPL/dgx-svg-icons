import React from 'react';

const GridIcon = ({ viewBox, height, width, title, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
  >
    <title>{title}</title>
    <rect x="8" y="8" width="7" height="7" />
    <rect x="17" y="8" width="7" height="7" />
    <rect x="8" y="17" width="7" height="7" />
    <rect x="17" y="17" width="7" height="7" />
  </svg>
);

GridIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
};

GridIcon.defaultProps = {
  className: 'grid-icon',
  title: 'NYPL Grid SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default GridIcon;