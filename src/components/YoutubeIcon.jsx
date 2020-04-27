import React from 'react';
import PropTypes from 'prop-types';

const YoutubeIcon = ({
    ariaHidden,
    className,
    iconId,
    height,
    preserveAspectRatio,
    title,
    viewBox,
    width,
    focusable,
  }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-labelledby={iconId}
    className={`${className} svgIcon`}
    height={height}
    preserveAspectRatio={preserveAspectRatio}
    title={title}
    viewBox={viewBox}
    width={width}
    focusable={focusable}
  >
  <title id={iconId}>{title}</title>
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  </svg>
);

YoutubeIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  preserveAspectRatio: PropTypes.string,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  focusable: PropTypes.bool,
};

YoutubeIcon.defaultProps = {
  ariaHidden: true,
  className: 'youtube-icon',
  height: '48',
  preserveAspectRatio: 'xMidYMid meet',
  title: 'Youtube',
  viewBox: '0 0 24 24',
  width: '48',
};

export default YoutubeIcon;
