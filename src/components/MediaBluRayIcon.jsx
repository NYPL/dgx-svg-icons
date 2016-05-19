import React from 'react';

const MediaBlueRayIcon = ({ viewBox, height, width, title, className, ref }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <title>{title}</title>
      <path d="M12.25,16a3.738,3.738,0,0,0,1.09839,2.65161l5.30328-5.30328A3.75,3.75,0,0,0,12.25,16Z" fill="none"/>
      <path d="M16,19.75a3.75,3.75,0,0,0,2.65167-6.40167l-5.30328,5.30328A3.738,3.738,0,0,0,16,19.75Z" />
      <path d="M24.4411,7.5589A11.93752,11.93752,0,1,0,27.9375,16,11.90013,11.90013,0,0,0,24.4411,7.5589ZM12.25,16a3.75013,3.75013,0,1,1,1.09839,2.65161A3.75,3.75,0,0,1,12.25,16ZM16,26.9375a10.85556,10.85556,0,0,1-6.99524-2.52808l4.41772-4.41772a4.75228,4.75228,0,0,0,6.56927-6.56927l4.41766-4.41766A10.9387,10.9387,0,0,1,16,26.9375Z" />
    </svg>
  );
};

MediaBlueRayIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  ref: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
};

MediaBlueRayIcon.defaultProps = {
  className: 'media-blu-ray-icon',
  title: 'NYPL Media/Blu-Ray SVG Icon',
  ref: 'MediaBlueRayIcon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default MediaBlueRayIcon;
