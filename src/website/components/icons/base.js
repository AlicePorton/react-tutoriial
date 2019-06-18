import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getStyleClassFromColor = (totalColor, colors) => 
  new Array(totalColor)
    .fill(1)
    .reduce(
      (accu, c, i) => `${accu}.cr${i + 1} {fill: ${colors[i % colors.length]};}`,
      ''
    );

export default class Base extends Component {
  static displayName = 'Base Icon';

  static propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    viewBox: PropTypes.string,
    children: PropTypes.node,

    predefindClassName: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    height: null,
    width: null,
    viewBox: '0 0 64 64',
    predefinedClassName: '',
    className: ''
  };

  render() {
    const {
      height,
      width,
      viewBox,
      style = {},
      children,
      predefindClassName,
      className,
      colors,
      totalColor,
      ...props
    } = this.props;
    const svgHeight = height;
    const svgWidth = width || svgHeight;
    style.fill = 'currentColor';

    const fillStyle = 
      Array.isArray(colors) &&
      totalColor &&
      getStyleClassFromColor(totalColor, colors);

    return (
      <svg
        viewBox={viewBox}
        width={svgWidth}
        height={svgHeight}
        style={style}
        className={`${predefindClassName} ${className}`}
        {...props}
      >
        {fillStyle ? 
          <style type="text/css"> {fillStyle} </style>: null}
          {children} 
      </svg>
    )
  }
}