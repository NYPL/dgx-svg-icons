import React from 'react';
import PropTypes from 'prop-types';

const FilterCancelIcon = ({
  ariaHidden,
  className,
  height,
  title,
  viewBox,
  width,
  focusable,
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
      <path d="M21.649 67.67a2.657 2.657 0 0 1-2.657-2.657V36.3L.706 16.584a2.657 2.657 0 1 1 3.902-3.608l19.697 21.242v30.795a2.657 2.657 0 0 1-2.656 2.656zM32.441 59.93a2.657 2.657 0 0 1-2.656-2.656V34.235l19.922-21.848a2.657 2.657 0 0 1 3.943 3.563L35.098 36.283v20.991a2.657 2.657 0 0 1-2.657 2.657zM29.36 10.54l7.325-7.325A1.884 1.884 0 0 0 34.02.552l-7.325 7.325L19.37.552a1.884 1.884 0 1 0-2.664 2.663l7.325 7.326-7.325 7.325a1.884 1.884 0 1 0 2.664 2.664l7.325-7.326 7.325 7.326a1.884 1.884 0 1 0 2.664-2.664z"/>
  </svg>
);

FilterCancelIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  focusable: PropTypes.bool,
};

FilterCancelIcon.defaultProps = {
  ariaHidden: true,
  className: 'filter-cancel-icon',
  height: '67.669',
  title: 'NYPL Cancel Filter SVG Icon',
  width: '54.333',
  viewBox: '0 0 54.333 67.669',
};

export default FilterCancelIcon;
