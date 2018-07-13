import React from 'react';
import PropTypes from 'prop-types';

const LargePrintIcon = ({ viewBox, height, width, title, className, ariaHidden, focusable }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
    focusable={focusable}
  >
    <title>{title}</title>
    <path d="M7.132,6.0411H24.97514l0.16949,5.36219h-0.755a6.43678,6.43678,0,0,0-1.40988-3.28973q-0.85518-.76272-3.5979-0.76272H17.62525V23.499q0,1.824.57012,2.25992a5.26381,5.26381,0,0,0,2.49619.57525v0.58553H11.49263V26.3342a4.36809,4.36809,0,0,0,2.49619-.66,4.1201,4.1201,0,0,0,.49307-2.545V7.35083h-1.772a6.022,6.022,0,0,0-3.56709.755,5.57976,5.57976,0,0,0-1.42529,3.29744H6.9471Z" />
  </svg>
);

LargePrintIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  ariaHidden: PropTypes.bool,
  focusable: PropTypes.bool,
};

LargePrintIcon.defaultProps = {
  className: 'large-print-icon',
  title: 'NYPL Large Print SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default LargePrintIcon;
