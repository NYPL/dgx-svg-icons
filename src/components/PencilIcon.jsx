import React from 'react';
import PropTypes from 'prop-types';

const PencilIcon = ({
  ariaHidden,
  className,
  height,
  title,
  viewBox,
  width,
  focusable
}) => (
  <svg
    aria-hidden={ariaHidden}
    className={`${className} svgIcon`}
    height={height}
    viewBox={viewBox}
    width={width}
    focusable={focusable}
  >
    <title>{title}</title>
      <path d="M9.826 45.06l28.026-28.026-6.964-6.964L2.862 38.096 0 47.923l9.826-2.863zM33.409 7.626l2.792-2.792 6.965 6.964-2.793 2.793zM38.243 2.793L41.036 0 48 6.965l-2.792 2.792z"/>
  </svg>
);

PencilIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  focusable: PropTypes.bool,
};

PencilIcon.defaultProps = {
  ariaHidden: true,
  className: 'filter-cancel-icon',
  height: '47.923',
  title: 'NYPL Cancel Filter SVG Icon',
  width: '48',
  viewBox: '0 0 48 47.923',
};

export default PencilIcon;
