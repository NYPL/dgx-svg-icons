import React from 'react';
import PropTypes from 'prop-types';

const EnvelopeIcon = ({
    ariaHidden,
    className,
    height,
    iconId,
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
    viewBox={viewBox}
    width={width}
    focusable={focusable}
  >
    <title id={iconId}>{title}</title>
    <path d="M46.052 36.91H1.948A1.938 1.938 0 0 1 0 34.981V1.927A1.937 1.937 0 0 1 1.948 0h44.104A1.938 1.938 0 0 1 48 1.927v33.055a1.938 1.938 0 0 1-1.948 1.927zM3.896 33.054h40.208V3.854H3.896z" />
    <path d="M24 25.007a1.915 1.915 0 0 1-1.176-.402l-11.93-9.251a1.925 1.925 0 0 1 2.352-3.049L24 20.644l10.754-8.339a1.925 1.925 0 0 1 2.352 3.049l-11.93 9.25a1.917 1.917 0 0 1-1.176.403z" />
  </svg>
);

EnvelopeIcon.propTypes = {
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

EnvelopeIcon.defaultProps = {
  ariaHidden: true,
  className: 'envelope-icon',
  height: '48',
  preserveAspectRatio: 'xMidYMid meet',
  title: 'mail',
  viewBox: '0 0 48 36.909',
  width: '36.909',
};

export default EnvelopeIcon;
