import React from 'react';
import PropTypes from 'prop-types';

const FaceBookIcon = ({
    ariaHidden,
    className,
    iconId,
    preserveAspectRatio,
    title,
    viewBox,
  }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-labelledby={iconId}
    className={`${className} svgIcon`}
    preserveAspectRatio={preserveAspectRatio}
    title={title}
    viewBox={viewBox}
  >
  <title id={iconId}>{title}</title>
    <path d="M7.1267,13.68408v9.7265H0V35.30576H7.1267V67.94592H21.76584V35.30576H31.588s.9207-5.70326,1.36529-11.94H21.82116v-8.1318a3.45468,3.45468,0,0,1,3.17363-2.85086h7.9757V0H22.12679C6.76506,0,7.1267,11.90635,7.1267,13.68408Z"/>
  </svg>
);

FaceBookIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  preserveAspectRatio: PropTypes.string,
  title: PropTypes.string,
  viewBox: PropTypes.string,
};

FaceBookIcon.defaultProps = {
  ariaHidden: true,
  className: 'face-book-icon',
  preserveAspectRatio: 'xMidYMid meet',
  title: 'Facebook',
  viewBox: '0 0 32 67',
};

export default FaceBookIcon;
