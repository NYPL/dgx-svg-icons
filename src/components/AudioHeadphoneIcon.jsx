import React from 'react';
import PropTypes from 'prop-types';

const AudioHeadphoneIcon = ({
  viewBox,
  height,
  width,
  title,
  className,
  ariaHidden,
  focusable,
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
    focusable={focusable}
  >
    <title>{title}</title>
    <g>
      <path d="M7.50842,19.29355A0.94557,0.94557,0,0,1,6.56284,18.348V15.376a9.47232,9.47232,0,0,1,18.94464,0v2.91654a0.94558,0.94558,0,0,1-1.89117,0V15.376a7.58115,7.58115,0,0,0-15.16231,0v2.972A0.94557,0.94557,0,0,1,7.50842,19.29355Z" />
      <g>
        <path d="M21.82651,23.66863a0.94557,0.94557,0,0,1-.94558-0.94558V16.22111a0.94558,0.94558,0,0,1,1.89117,0V22.723A0.94557,0.94557,0,0,1,21.82651,23.66863Z" />
        <path d="M10.24381,23.75a0.94557,0.94557,0,0,1-.94558-0.94558V16.22111a0.94558,0.94558,0,1,1,1.89117,0v6.58331A0.94557,0.94557,0,0,1,10.24381,23.75Z" />
      </g>
    </g>
  </svg>
);

AudioHeadphoneIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  ariaHidden: PropTypes.bool,
  focusable: PropTypes.bool,
};

AudioHeadphoneIcon.defaultProps = {
  className: 'audio-headphone-icon',
  title: 'NYPL Audio/Headphone SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default AudioHeadphoneIcon;
