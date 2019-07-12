import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import MouseEventHandler from './mouse-event';

const StyledSliderHandle = styled.span`
  position: absolute;
  z-index: 10;
  margin-${props => (props.vertical ? 'left' : 'top')}: -${props => 
    (props.sliderHandleWidth - props.theme.sliderBarHeight) / 2}px;
  height: ${props =>
    Number.isFinite(props.sliderHandleWidth)
      ? props.sliderHandleWidth
      : props.theme.sliderHandleWidth}px;
  width: ${props => 
    Number.isFinite(props.sliderHandleWidth)
      ? props.sliderHandleWidth
      : props.theme.sliderHandleWidth}px;
  box-shadow: ${props => props.theme.sliderHandleShadow};
  background-color: ${props => props.theme.sliderHandleColor};
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.active
      ? props.theme.selectBorderColor
      : props.theme.sliderHandleColor};
  :hover {
    background-color: ${props => props.theme.sliderHandleHoverColor};
    cursor: pointer;
  }
`;

const StyledSliderTooltip = styled.div`
  position: absolute;
  border-radius: 3px;
  display: inline-block;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
  z-index: 999;
  margin-left: ${props => props.sliderHandleWidth + 12}px;
  font-size: 9.5px;
  font-weight: 500;
  padding: 7px 10px;
  background-color: ${props => props.theme.tooltipColor};
  color: ${props => props.theme.tooltipColor};
  margin-bottom: -6px;
  width: 50px;

  :before, :after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
  }

  :before {
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    left: -8px;
    top: 50%;
  }

  :after {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    left: -6px;
    top: 50%;
    margin-top: -4px;
    border-right-color: ${props => props.theme.tooltipBg};
    border-right-style: solid;
    border-right-width: 6px;
  }
`;

const SliderTooltip = ({
  value,
  format = val => val,
  style,
  sliderHandleWidth
}) => {
  return (
    <StyledSliderTooltip
      sliderHandleWidth={sliderHandleWidth}
      style={style}>{
        format(value)
      }</StyledSliderTooltip>
  )
}

export default class SliderHandle extends Component {
  static propTypes = {
    sliderHandleWidth: PropTypes.number,
    left: PropTypes.string,
    display: PropTypes.bool,
    valueListener: PropTypes.func,
    vertical: PropTypes.bool
  };

  static defaultProps = {
    sliderHandleWidth: 12,
    left: '50%',
    display: true,
    vertical: false,
    valueListener: function valueListenerFn() {},
    showTooltip: false
  };

  constructor(props) {
    super(props);

    this.mouseEvent = new MouseEventHandler({
      vertical: props.vertical,
      valueListener: props.valueListener,
      toggleMouseOver: this.toggleMouseOver
    });
  }

  state = {mouseOver: false};

  toggleMouseOver = () => {
    this.setState({mouseOver: !this.state.mouseOver});
  };

  render() {
    const style = {[this.props.vertical ?'bottom' : 'left'] : this.props.left};

    return (
      <div style={{display: this.props.display ? 'block' : 'none'}}>
        {this.props.showTooltip && this.state.mouseOver ? <SliderTooltip
          style={style}
          sliderHandleWidth={this.props.sliderHandleWidth}
          value={Number.isFinite(this.props.value) ? this.props.value : null}/>
          : null}

        <StyledSliderHandle
          className={classnames('kg-ranger-slider__handle', {
            'kg-ranger-slider__handle--active' : this.state.mouseOver
          })}
          sliderHandleWidth={this.props.sliderHandleWidth}
          active={this.state.mouseOver}
          vertical={this.props.vertical}
          style={style}
          onMouseDown={this.mouseEvent.handleMouseDown}
          onTouchStart={this.mouseEvent.handleTouchStart}
        />
      </div>
    )
  }
}