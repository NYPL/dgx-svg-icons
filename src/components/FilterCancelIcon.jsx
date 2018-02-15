import React from 'react';
import PropTypes from 'prop-types';

const FilterCancelIcon = ({
  ariaHidden,
  className,
  height,
  title,
  viewBox,
  width }) => (
  <svg
    aria-hidden={ariaHidden}
    className={`${className} svgIcon`}
    height={height}
    viewBox={viewBox}
    width={width}
  >
    <title>{title}</title>
      <path d="M22.987 71.854a2.822 2.822 0 0 1-2.82-2.821V38.545L.75 17.61a2.821 2.821 0 0 1 4.143-3.831l20.915 22.555v32.699a2.822 2.822 0 0 1-2.82 2.82zM34.447 63.637a2.822 2.822 0 0 1-2.82-2.821V36.352L52.78 13.153a2.822 2.822 0 0 1 4.187 3.783l-19.7 21.59v22.29a2.822 2.822 0 0 1-2.82 2.82zM31.175 11.192l7.778-7.778A2 2 0 0 0 36.125.586l-7.779 7.778L20.568.586a2 2 0 1 0-2.828 2.828l7.778 7.778-7.778 7.779a2 2 0 0 0 2.828 2.828l7.778-7.778 7.779 7.778a2 2 0 0 0 2.828-2.828z"/>
  </svg>
);

FilterCancelIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
};

FilterCancelIcon.defaultProps = {
  ariaHidden: true,
  className: 'filter-cancel-icon',
  height: '71.854',
  title: 'NYPL Cancel Filter SVG Icon',
  width: '57.693',
  viewBox: '0 0 57.693 71.854',
};

export default FilterCancelIcon;
