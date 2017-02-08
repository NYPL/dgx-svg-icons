import React from 'react';

const BuildingIcon = ({ viewBox, height, width, title, className, style, fill, ariaHidden }) => (
  <svg
    viewBox={viewBox}
    height={height}
    width={width}
    className={`${className} svgIcon`}
    style={style}
    fill={fill}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
      <polygon points="8 10 16 7 24 10 28 10 16 5 4 10 8 10" />
      <polygon points="28 25 26 25 26 16 27 16 27 14 24 14 24 16 24 25 8 25 8 16 8 14 5 14 5 16 6 16 6 25 4 25 4 27 28 27 28 25" />
      <rect x="5" y="11" width="22" height="2" />
      <rect x="10" y="15" width="2" height="9" />
      <rect x="20" y="15" width="2" height="9" />
      <rect x="15" y="15" width="2" height="9" />
    </svg>
);

BuildingIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  style: React.PropTypes.object,
  ariaHidden: React.PropTypes.bool,
};

BuildingIcon.defaultProps = {
  className: 'bldgIcon',
  title: 'NYPL Building Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default BuildingIcon;
