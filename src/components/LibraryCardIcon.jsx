import React from 'react';
import PropTypes from 'prop-types';

const LibraryCardIcon = ({
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
    <path d="M61.554 46.28H6.824A6.832 6.832 0 0 1 0 39.453V6.824A6.833 6.833 0 0 1 6.825 0h54.729a6.832 6.832 0 0 1 6.823 6.825v32.63a6.832 6.832 0 0 1-6.823 6.824zM6.824 3.31A3.52 3.52 0 0 0 3.31 6.824v32.63a3.52 3.52 0 0 0 3.516 3.515h54.729a3.519 3.519 0 0 0 3.514-3.516V6.824a3.519 3.519 0 0 0-3.514-3.515z" />
    <path d="M56.943 14.56H42.59a1.707 1.707 0 1 1 0-3.413h14.353a1.707 1.707 0 0 1 0 3.413zM56.943 20.971H42.59a1.707 1.707 0 1 1 0-3.413h14.353a1.707 1.707 0 1 1 0 3.413zM56.943 27.382H42.59a1.707 1.707 0 1 1 0-3.414h14.353a1.707 1.707 0 1 1 0 3.414zM22.471 14.335c1.003 0 1.851 1.129 1.851 2.465s-.848 2.464-1.85 2.464-1.852-1.128-1.852-2.464.848-2.465 1.851-2.465m0-3.111c-2.597 0-4.703 2.496-4.703 5.576s2.106 5.576 4.703 5.576 4.703-2.497 4.703-5.576-2.106-5.576-4.703-5.576zM22.403 24.634a49.169 49.169 0 0 0-7.08.613 2.834 2.834 0 0 0-2.175 1.805l-2.26 5.898a2.793 2.793 0 0 0 2.601 3.81h4.106a1.793 1.793 0 0 0 0-3.587l-2.934-.046 1.666-4.35a44.936 44.936 0 0 1 6.076-.557 42.747 42.747 0 0 1 5.961.49l1.71 4.463h-2.892a1.793 1.793 0 0 0 0 3.586h4.105a2.794 2.794 0 0 0 2.6-3.816l-2.318-5.892a2.92 2.92 0 0 0-2.215-1.817 47.371 47.371 0 0 0-6.95-.6z" />
  </svg>
);

LibraryCardIcon.propTypes = {
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

LibraryCardIcon.defaultProps = {
  ariaHidden: true,
  className: 'library-card-icon',
  height: '46.279',
  preserveAspectRatio: 'xMidYMid meet',
  title: 'library-card',
  viewBox: '0 0 68.377 46.279',
  width: '68.377',
};

export default LibraryCardIcon;
