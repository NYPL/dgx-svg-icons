import React from 'react';
import PropTypes from 'prop-types';

const FilterIcon = ({ ariaHidden, className, fill, height, title, viewBox, width, focusable }) => (
  <svg
    aria-hidden={ariaHidden}
    className={`${className} svgIcon`}
    fill={fill}
    height={height}
    viewBox={viewBox}
    width={width}
    focusable={focusable}
  >
    <title>{title}</title>
    <g>
      <circle cx="13.0944" cy="7.375" r="1.3192" />
      <circle cx="19.6222" cy="6.375" r="1.3189" />
      <circle cx="15.9997" cy="10.5242" r="1.3193" />
      <g>
        <path d="M14.1785,27.562a0.95,0.95,0,0,1-.95-0.95v-10.27L6.6875,9.2893a0.95,0.95,0,0,1,1.3956-1.29l7.0455,7.598v11.015A0.95,0.95,0,0,1,14.1785,27.562Z" />
        <path d="M18.0387,24.794a0.95,0.95,0,0,1-.95-0.95V15.603l7.126-7.8149a0.95,0.95,0,0,1,1.41,1.2744l-6.636,7.2729v7.5083A0.95,0.95,0,0,1,18.0387,24.794Z" />
      </g>
    </g>
  </svg>
);

FilterIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  focusable: PropTypes.bool,
};

FilterIcon.defaultProps = {
  ariaHidden: true,
  className: 'filter-icon',
  fill: '#000',
  height: '32',
  title: 'NYPL Filter SVG Icon',
  width: '32',
  viewBox: '0 0 32 32',
};

export default FilterIcon;
