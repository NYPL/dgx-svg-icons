import React from 'react';
import PropTypes from 'prop-types';

const InstagramIcon = ({
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
      <path d="M47.832 41.697a6.167 6.167 0 0 1-6.135 6.136H6.135A6.167 6.167 0 0 1 0 41.697V6.135A6.167 6.167 0 0 1 6.135 0h35.562a6.167 6.167 0 0 1 6.135 6.135zm-5.418-21.455H38.21a13.628 13.628 0 0 1 .622 4.079 14.651 14.651 0 0 1-14.885 14.418A14.644 14.644 0 0 1 9.093 24.321a13.621 13.621 0 0 1 .623-4.08H5.325v20.18a1.888 1.888 0 0 0 1.9 1.9h33.29a1.887 1.887 0 0 0 1.899-1.9zm-18.467-5.73a9.46 9.46 0 0 0-9.591 9.311 9.46 9.46 0 0 0 9.591 9.31 9.466 9.466 0 0 0 9.623-9.31 9.466 9.466 0 0 0-9.623-9.311zm18.467-7.038a2.153 2.153 0 0 0-2.15-2.148h-5.418a2.153 2.153 0 0 0-2.148 2.148v5.138a2.153 2.153 0 0 0 2.148 2.15h5.419a2.153 2.153 0 0 0 2.149-2.15z" />
  </svg>
);

InstagramIcon.propTypes = {
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

InstagramIcon.defaultProps = {
  ariaHidden: true,
  className: 'instagram-icon',
  height: '47.832',
  preserveAspectRatio: 'xMidYMid meet',
  title: 'Instagram',
  viewBox: '0 0 47.832 47.833',
  width: '47.832',
};

export default InstagramIcon;
