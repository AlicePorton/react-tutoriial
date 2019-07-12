import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import MouseEventHandler from './mouse-event';

const StyledSlider = styled.div`
  position: relative;
  background-color: ${props => 
    props.active
      ? props.theme.sliderBarHoverColor
      : props.theme.sliderBarColor};
  ${props => `${props.vertical ? 'width' : 'height'} : ${props.theme.sliderBarHeight}px`};
  border-radius: ${props => props.theme.sliderBarRadius};

  :hover {
    cursor: pointer;
  }
`;

function nope() {}

export default class SliderBarHandle extends Component {

  static propTypes = {
    width: PropTypes.number,
    left: PropTypes.string,
    sliderBarListener: PropTypes.func,
    enableBarDrag: PropTypes.bool,
    vertical: PropTypes.bool
  };

  static defaultProps = {
    sliderBarListener: nope,
    enableBarDrag: false,
    vertical: false
  };

  constructor(props) {
    super(props);
    this.mouseEvent = new MouseEventHandler({
      vertical: props.vertical,
      valueListener: props.sliderBarListener,
      toggleMouseOver: this.toggleMouseOver
    });
  }

  state = {mouseOver: false};

  toggleMouseOver = () => {
    this.setState({mouseOver: !this.state.mouseOver});
  };

  render() {
    const {width, v0Left} = this.props;
    const style = this.props.vertical ? {
      height: `${width}%`,
      bottom: `${-100 + width + v0Left}%`
    } : {
      width: `${width}`,
      left: `${v0Left}%`
    };
    return (
      <StyledSlider
        active={this.state.mouseOver}
        className={classnames('kg-ranger-slider__bar', {
          'kg-range-slider__bar--active': this.state.mouseOver
        })}
        style={style}
        onMouseDown={this.props.enableBarDrag ? this.mouseEvent.handleMouseDown : nope}
        onTouchStart={this.props.enableBarDrag ? this.mouseEvent.handleTouchStart : nope}
      />
    );
  }
};