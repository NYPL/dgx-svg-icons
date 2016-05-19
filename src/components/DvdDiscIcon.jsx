import React from 'react';

const DvdDiscIcon = ({ viewBox, height, width, title, className, ref }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <title>{title}</title>
      <circle cx="16" cy="16" r="3.75" fill="none"/>
      <path d="M16,10.625A5.375,5.375,0,1,0,21.375,16,5.381,5.381,0,0,0,16,10.625Zm0,9.125A3.75,3.75,0,1,1,19.75,16,3.75,3.75,0,0,1,16,19.75Z"/>
      <path d="M16,4.0625A11.9375,11.9375,0,1,0,27.9375,16,11.9375,11.9375,0,0,0,16,4.0625Zm0,19.65625A7.71875,7.71875,0,1,1,23.71875,16,7.72719,7.72719,0,0,1,16,23.71875Z"/>
    </svg>
  );
};

DvdDiscIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  ref: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
};

DvdDiscIcon.defaultProps = {
  className: 'dvd-disc-icon',
  title: 'NYPL DVD Disc SVG Icon',
  ref: 'DvdDiscIcon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default DvdDiscIcon;
