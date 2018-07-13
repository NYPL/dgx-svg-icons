import React from 'react';
import PropTypes from 'prop-types';

const EReaderIcon = ({ viewBox, height, width, title, className, ariaHidden, focusable }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
    focusable={focusable}
  >
    <title>{title}</title>
    <path d="M23.02352,5.00588H9.00588a2.38332,2.38332,0,0,0-2,2.00588V24.99412A2.45762,2.45762,0,0,0,9,27.00588H22.99412A2.22259,2.22259,0,0,0,24.98824,25V6.98843a1.97259,1.97259,0,0,0-1.6106-1.94478ZM23,23.99608H9V7.0002l14.02352-.01178Z" />
    <path d="M20.61338,9.99038h-9.186a0.456,0.456,0,0,1,0-.9121h9.12081a0.44532,0.44532,0,0,1,.456.456,0.43566,0.43566,0,0,1-.3909.456h0Z" />
    <path d="M20.642,13H11.456a0.50163,0.50163,0,1,1,0-1h9.12081a0.674,0.674,0,0,1,.6497.49219A0.74346,0.74346,0,0,1,20.642,13h0Z" />
    <path d="M20.65624,15.956h-9.186a0.456,0.456,0,1,1,0-.9121h9.12081a0.44532,0.44532,0,0,1,.456.456,0.43566,0.43566,0,0,1-.3909.456h0Z" />
    <path d="M20.55608,18.9121h-9.186a0.456,0.456,0,1,1,0-.9121h9.12081a0.44532,0.44532,0,0,1,.456.456,0.43566,0.43566,0,0,1-.3909.456h0Z" />
    <path d="M20.61338,21.98237h-9.186a0.456,0.456,0,0,1,0-.9121h9.12081a0.44532,0.44532,0,0,1,.456.456,0.43566,0.43566,0,0,1-.3909.456h0Z" />
  </svg>
);

EReaderIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  ariaHidden: PropTypes.bool,
  focusable: PropTypes.bool,
};

EReaderIcon.defaultProps = {
  className: 'eReader-icon',
  title: 'NYPL eReader SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default EReaderIcon;
