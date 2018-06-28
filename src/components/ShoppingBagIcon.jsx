import React from 'react';
import PropTypes from 'prop-types';

const ShoppingBagIcon = ({
    ariaHidden,
    className,
    height,
    iconId,
    preserveAspectRatio,
    title,
    viewBox,
    width,
  }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-labelledby={iconId}
    className={`${className} svgIcon`}
    height={height}
    preserveAspectRatio={preserveAspectRatio}
    viewBox={viewBox}
    width={width}
  >
    <title id={iconId}>{title}</title>
      <path d="M45.163 50.301l-6.19-32.137a6.754 6.754 0 0 0-6.75-5.289h-.07V6.25A6.25 6.25 0 0 0 25.902 0h-6.5a6.25 6.25 0 0 0-6.25 6.25v6.625h-.102a6.754 6.754 0 0 0-6.75 5.289L.11 50.3a6.568 6.568 0 0 0 6.75 7.574h31.551a6.568 6.568 0 0 0 6.75-7.574zM17.682 6.671a2.235 2.235 0 0 1 2.234-2.234h5.533a2.235 2.235 0 0 1 2.234 2.235v6.203H17.682zm22.925 46.492a2.891 2.891 0 0 1-2.195.962H6.862a2.89 2.89 0 0 1-2.195-.962 2.535 2.535 0 0 1-.62-2.196l6.19-32.137a2.814 2.814 0 0 1 2.814-2.205h.101v5.57a2.235 2.235 0 0 0 2.243 2.234h.06a2.235 2.235 0 0 0 2.227-2.234v-5.57h10.001v5.518a2.235 2.235 0 1 0 4.47 0v-5.518h.07a2.814 2.814 0 0 1 2.814 2.205l6.19 32.137a2.535 2.535 0 0 1-.62 2.196z"/>
  </svg>
);

ShoppingBagIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  preserveAspectRatio: PropTypes.string,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
};

ShoppingBagIcon.defaultProps = {
  ariaHidden: true,
  className: 'shopping-bag-icon',
  height: '45.274',
  preserveAspectRatio: 'xMidYMid meet',
  title: 'shop',
  viewBox: '0 0 45.274 57.875',
  width: '57.875',
};

export default ShoppingBagIcon;
