import React from 'react';

const SoloXIcon = ({ viewBox, height, width, title, className, ref, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
      className={className}
    >
      <title>{title}</title>
      <polygon points="54.26 6.34 47.91 0 27.13 20.79 6.34 0 0 6.34 20.79 27.13 0 47.91 6.34 54.26 27.13 33.47 47.91 54.26 54.26 47.91 33.47 27.13 54.26 6.34" fill={fill} />
    </svg>
  );
};

SoloXIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  ref: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
};

SoloXIcon.defaultProps = {
  className: 'solo-x-icon',
  title: 'NYPL Solo X SVG Icon',
  ref: 'SoloXIcon',
  width: '2rem',
  height: '2rem',
  viewBox: '0 0 100 100',
  fill: '#FFF',
};

export default SoloXIcon;
