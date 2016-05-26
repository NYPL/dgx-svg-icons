import React from 'react';

const AudioDiscIcon = ({ viewBox, height, width, title, className, ariaHidden }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
    <path d="M16,4.0625A11.9375,11.9375,0,1,0,27.9375,16,11.9375,11.9375,0,0,0,16,4.0625ZM16,19.75A3.75,3.75,0,1,1,19.75,16,3.75,3.75,0,0,1,16,19.75Z" />
  </svg>
);

AudioDiscIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  ariaHidden: React.PropTypes.bool,
};

AudioDiscIcon.defaultProps = {
  className: 'audio-disc-icon',
  title: 'NYPL Audio Disc SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default AudioDiscIcon;
