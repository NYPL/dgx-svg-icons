import React from 'react';
import PropTypes from 'prop-types';

const DownLoadIcon = ({
    ariaHidden,
    className,
    height,
    iconId,
    title,
    viewBox,
    width,
  }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-labelledby={iconId}
    className={`${className} svgIcon`}
    height={height}
    viewBox={viewBox}
    width={width}
  >
    <title id={iconId}>{title}</title>
    <path d="M23.26,13.1819a1.2736,1.2736,0,0,0-1.7332,0L17,17.6253V6.1041a1.0119,1.0119,0,1,0-2,0V17.6253l-4.5268-4.4434a1.2212,1.2212,0,0,0-1.6916,0,1.17,1.17,0,0,0-.0208,1.65L15.1786,21.26l0,0.0083a1.1694,1.1694,0,0,0,1.6488,0l0.0048-.0083L23.26,14.8318A1.17,1.17,0,0,0,23.26,13.1819Z" />
    <rect x="14.8333" y="16.3602" width="2.3333" height="16.6711" rx="1.1667" ry="1.1667" transform="translate(-8.6957 40.6957) rotate(-90)" />
  </svg>
);

DownLoadIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
};

DownLoadIcon.defaultProps = {
  ariaHidden: true,
  className: 'download-icon',
  height: '32',
  title: 'Download',
  viewBox: '0 0 32 32',
  width: '32',
};

export default DownLoadIcon;
