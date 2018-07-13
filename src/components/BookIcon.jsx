import React from 'react';
import PropTypes from 'prop-types';

const BookIcon = ({ viewBox, height, width, title, className, ariaHidden, preserveAspectRatio, focusable }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
    preserveAspectRatio={preserveAspectRatio}
    focusable={focusable}
  >
    <title>{title}</title>
    <g>
      <path d="M26.09478,8.31652A13.1617,13.1617,0,0,0,15.97189,8.1603a13.079,13.079,0,0,0-10.09165.18746,0.88881,0.88881,0,0,0-.46865.84357V21.81371a0.89164,0.89164,0,0,0,.37492.81233,0.93487,0.93487,0,0,0,.90606.06249,11.44018,11.44018,0,0,1,8.9044,0c0.03124,0,.03124,0,0.03124.03124a0.06237,0.06237,0,0,1,.06249.03124,0.70873,0.70873,0,0,0,.125.03124h0.18746a0.5317,0.5317,0,0,0,.2187-0.03124,0.06237,0.06237,0,0,0,.06249-0.03124,0.70873,0.70873,0,0,1,.125-0.03124,11.464,11.464,0,0,1,8.9044,0,0.86486,0.86486,0,0,0,.40617.09373A1.05326,1.05326,0,0,0,26.251,22.626a0.94244,0.94244,0,0,0,.43741-0.81233V9.19133A1.04849,1.04849,0,0,0,26.09478,8.31652ZM24.78256,20.439a13.30172,13.30172,0,0,0-8.74818.34368A13.26349,13.26349,0,0,0,7.2862,20.439V9.8162a11.30538,11.30538,0,0,1,8.342.2187c0.03124,0,.03124,0,0.03124.03124a0.06237,0.06237,0,0,1,.06249.03124,0.70872,0.70872,0,0,0,.125.03124h0.34368a0.11478,0.11478,0,0,0,.09373-0.03124c0.03125,0,.06249-0.03124.09373-0.03124,0,0,.06249,0,0.06249-0.03124a11.51979,11.51979,0,0,1,8.37326-.2187V20.439H24.78256Z" />
      <path d="M16.00313,17.81454a0.76028,0.76028,0,0,1-.74984-0.74984V13.378a0.74984,0.74984,0,0,1,1.49969,0V17.0647A0.74014,0.74014,0,0,1,16.00313,17.81454Z" />
    </g>
  </svg>
);

BookIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  preserveAspectRatio: PropTypes.string,
  ariaHidden: PropTypes.bool,
  focusable: PropTypes.bool,
};

BookIcon.defaultProps = {
  className: 'book-icon',
  title: 'NYPL Book SVG Icon',
  height: '24px',
  width: '24px',
  viewBox: '0 0 32 32',
  preserveAspectRatio: 'xMidYMid meet',
};

export default BookIcon;
