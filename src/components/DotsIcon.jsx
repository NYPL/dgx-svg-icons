import React from 'react';

class DotsIcon extends React.Component {
  render() {
    return (
      <svg
        width={this.props.width}
        height={this.props.height}
        viewBox={this.props.viewBox}
        className={`${this.props.className} svgIcon`}
        ref={this.props.ref}
        fill={this.props.fill}
      >
        <title>{this.props.title}</title>
        <circle cx="16" cy="16" r="1.9029" />
        <circle cx="24" cy="16" r="1.9029" />
        <circle cx="8" cy="16" r="1.9029" />
      </svg>
    );
  }
}

DotsIcon.propTypes = {
  className: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  ref: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
};

DotsIcon.defaultProps = {
  className: 'dotsIcon',
  title: 'NYPL Dots SVG Icon',
  ref: 'nyplDotsIcon',
  height: '24px',
  width: '24px',
  viewBox: '0 0 32 32',
  fill: '#000',
};

export default DotsIcon;
