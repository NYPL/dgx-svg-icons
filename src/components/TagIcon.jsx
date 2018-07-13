import React from 'react';
import PropTypes from 'prop-types';

const TagIcon = ({ viewBox, height, width, title, className, ariaHidden, focusable }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
    focusable={focusable}
  >
    <title>{title}</title>
    <path d="M26.45536,26.45536H16.80078L4.92843,14.58216l9.65373-9.65373,11.8732,11.87235v9.65458ZM17.87606,23.859h5.983v-5.983L14.58216,8.5992l-5.983,5.983Z" />
  </svg>
);

TagIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  ariaHidden: PropTypes.bool,
  focusable: PropTypes.bool,
};

TagIcon.defaultProps = {
  className: 'tag-icon',
  title: 'NYPL Tag SVG Icon',
  width: '24',
  height: '24',
  viewBox: '0 0 32 32',
};

export default TagIcon;
