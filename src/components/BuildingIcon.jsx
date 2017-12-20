import React from 'react';
import PropTypes from 'prop-types';

const BuildingIcon = ({
  viewBox,
  height,
  width,
  title,
  className,
  style,
  fill,
  ariaHidden,
  preserveAspectRatio,
  iconId,
  svgRole,
}) => (
  <svg
    viewBox={viewBox}
    height={height}
    width={width}
    className={`${className} svgIcon`}
    style={style}
    aria-hidden={ariaHidden}
    preserveAspectRatio={preserveAspectRatio}
    aria-labelledby={iconId}
    role={svgRole}
  >
  <title id={iconId}>{title}</title>
    <path d="M13.329 9.245a1.466 1.466 0 0 0 .766-.217l9.536-5.834 9.536 5.834a1.47 1.47 0 0 0 1.535-2.509L24.398.216a1.473 1.473 0 0 0-1.535 0L12.56 6.519a1.47 1.47 0 0 0 .769 2.726zM45.811 36.982h-1.564V20.08h1.423a1.51 1.51 0 0 0 0-3.018h-5.817a1.51 1.51 0 0 0 0 3.018h1.376v16.902H6.218V20.08h1.8a1.51 1.51 0 0 0 0-3.018H2.202a1.51 1.51 0 0 0 0 3.018h.997v16.902H1.47a1.51 1.51 0 0 0 0 3.018h44.341a1.51 1.51 0 0 0 0-3.018z"/>
  <path d="M21.007 35.128a1.504 1.504 0 0 0 1.509-1.47V22.512a5.435 5.435 0 1 0-10.866 0v11.146a1.51 1.51 0 0 0 3.019 0V22.512a2.424 2.424 0 1 1 4.829 0v11.146a1.504 1.504 0 0 0 1.509 1.47zM34.287 35.128a1.504 1.504 0 0 0 1.509-1.47V22.512a5.435 5.435 0 1 0-10.866 0v11.146a1.51 1.51 0 0 0 3.019 0V22.512a2.424 2.424 0 1 1 4.829 0v11.146a1.504 1.504 0 0 0 1.509 1.47zM2.06 14.647h43.613a1.51 1.51 0 0 0 0-3.018H2.06a1.51 1.51 0 0 0 0 3.018z"/>
    </svg>
);

BuildingIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  style: PropTypes.object,
  ariaHidden: PropTypes.bool,
  preserveAspectRatio: PropTypes.string,
  svgRole: PropTypes.string,
  iconId: PropTypes.string,
};

BuildingIcon.defaultProps = {
  ariaHidden: true,
  className: 'bldgIcon',
  height: '40',
  preserveAspectRatio: 'xMidYMid meet',
  svgRole: 'img',
  title: 'NYPL Building Icon',
  viewBox: '0 0 47.282 40',
  width: '47.282',
};

export default BuildingIcon;
