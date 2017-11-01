import React from 'react';
import PropTypes from 'prop-types';

const TwitterIcon = ({
    ariaHidden,
    className,
    height,
    iconId,
    preserveAspectRatio,
    title,
    viewBox,
    width,
  }) => (
  <svg
    aria-hidden={ariaHidden}
    className={`${className} svgIcon`}
    height={height}
    preserveAspectRatio={preserveAspectRatio}
    title={title}
    viewBox={viewBox}
    width={width}
  >
  <title id={iconId}>{title}</title>
    <path d="M68,6.51074a27.99231,27.99231,0,0,1-8.01276,2.18635,13.937,13.937,0,0,0,6.13419-7.68177,28.01282,28.01282,0,0,1-8.859,3.36949A13.94135,13.94135,0,0,0,33.48906,17.04873,39.66941,39.66941,0,0,1,4.73387,2.54149,13.85672,13.85672,0,0,0,9.05141,21.0789a13.94473,13.94473,0,0,1-6.319-1.73673c-.001.058-.0012.11605-.0012.17455a13.91,13.91,0,0,0,11.1911,13.61485,14.05089,14.05089,0,0,1-6.30034.23787,13.95724,13.95724,0,0,0,13.03232,9.6428A28.07735,28.07735,0,0,1,3.328,48.95584,28.53232,28.53232,0,0,1,0,48.762,39.625,39.625,0,0,0,21.38562,55c25.66113,0,39.69344-21.15722,39.69344-39.50546q0-.90295-.04031-1.79619A28.279,28.279,0,0,0,68,6.51074Z"/>
  </svg>
);

TwitterIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  iconId: PropTypes.string,
  preserveAspectRatio: PropTypes.string,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
};

TwitterIcon.defaultProps = {
  ariaHidden: true,
  className: 'twitter-icon',
  height: '68',
  iconId: 'Twitter',
  preserveAspectRatio: 'xMidYMid meet',
  title: 'Twitter',
  width: '55',
  viewBox: '0 0 68 55',
};

export default TwitterIcon;
