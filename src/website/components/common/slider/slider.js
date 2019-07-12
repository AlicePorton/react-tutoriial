import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

import SliderHandle from './slider-handle';
import SliderBarHandle from './slider-bar-handle';
import {roundValToStep} from 'website/utils/data-utils';

function noop() {}

const StyledRangeSlider = styled.div`
  position: relative;
  margin-bottom: 12px;
  background-color: ${props => props.theme.sliderBarBgd};
  ${props =>
    `${props.vertical ? 'wdith' : 'height'}: ${props.theme.sliderBarHeight}px`};
  ${props => `${props.vertical ? 'height' : 'width'} : 100%`};
`;

const SliderWrapper = styled.div`
  flex-grow: 1;
  margin-top: ${props => (props.isRange ? 0 :10)}px;
`;

export default class Slider extends Component {
  static propTypes = {
    title: PropTypes.string,
    isRanged: PropTypes.bool,
    value0: PropTypes.number,
    value1: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    sliderHandleWidth: PropTypes.number,
    onSlider0Change: PropTypes.func,
    onInput0Change: PropTypes.func,
    onSlider1Change: PropTypes.func,
    onInput1Change: PropTypes.func,
    onSliderBarChange: PropTypes.func,
    step: PropTypes.number,
    enableBarDrag: PropTypes.bool,
    showTooltip: PropTypes.bool
  };

  static defaultProps = {
    title: '',
    isRanged: true,
    value0: 0,
    value1: 100,
    minValue: 0,
    maxValue: 100,
    step: 1,
    sliderHandleWidth: 12,
    enableBarDrag: false,
    onSlider0Change: noop,
    onInput0Change: noop,
    onSlider1Change: noop,
    onInput1Change: noop,
    disabled: false,
    vertical: false,
    showTooltip: false
  };

  ref = undefined;

  _saveRef = ref => {
    this.ref = ref;
  };

  _getBaseDistance() {
    return this.props.vertical ? this.ref.offsetHeight : this.ref.offsetWidth;
  }

  _getValDelta(x) {
    const percent = x / this._getBaseDistance();
    const maxDelta = this.props.maxValue - this.props.minValue;
    return percent * maxDelta;
  }

  _getValue(val, offset) {
    const delta = this._getValDelta(offset);
    const rawValue = this.props.vertical ? val - delta : val + delta;

    return this._roundValToStep(rawValue);
  }

  _isVal0InRange = val => {
    const {value1, minValue} = this.props;
    return Boolean(val >= minValue && val <= value1)
  }

  _isVal1InRange = val => {
    const {maxValue, value0} = this.props;
    return Boolean(val <= maxValue && val >= value0); 
  }

  _roundValToStep(val) {
    const {minValue, step} = this.props;
    return roundValToStep(minValue, step, val);
  }

  slide0Listener = x => {
    const val = this._getValue(this.props.value0, x);
    if (this._isVal0InRange(val)) {
      this.props.onSlider0Change(val);
    }
  };

  slider1Listener = x => {
    const val = this._getValue(this.props.value1, x);
    if (this._isVal1InRange(val)) {
      this.props.onSlider1Change(val);
    }
  };

  sliderBarListener = x => {
    const val0 = this._getValue(this.props.value0, x);
    const val1 = this._getValue(this.props.value1, x);
    if (this._isVal1InRange(val1) && this._isVal0InRange(val0)) {
      this.props.onSliderBarChange(val0, val1);
    }
  };

  calcHandleLeft0 = (w, l, num) => {
    return w === 0
      ? `calc(${l}% - ${this.props.sliderHandleWidth / 2}px)`
      : `calc(${l}% - ${this.props.sliderHandleWidth / 2}px)`;
  };

  calcHandleLeft1 = (w, l) => {
    return this.props.isRanged && w === 0
      ? `${l}%`
      : `calc(${l + w}% - ${this.props.sliderHandleWidth / 2 }px)`;
  };

  render() {
    const {
      classSet,
      isRanged,
      maxValue,
      minValue,
      value1,
      vertical,
      sliderHandleWidth,
      showTooltip
    } = this.props;
    const value0 = !isRanged && minValue  > 0 ? minValue : this.props.value0;
    const currValDelta = value1 - value0;
    const maxDelta = maxValue - minValue;
    const width = (currValDelta / maxDelta) * 100;
    const v0Left = ((value0 - minValue) / maxDelta) * 100;
    return (
      <SliderWrapper
        className={classnames('kg-slider', {...classSet})}
        ref={this._saveRef}
        isRanged={isRanged}
        vertical={vertical}
      >
        <StyledRangeSlider className="kg-range-slider" vertical={vertical}>
          <SliderHandle
            className="kg-range-slider__handle"
            left={this.calcHandleLeft0(width, v0Left)}
            valueListener={this.slide0Listener}
            sliderHandleWidth={sliderHandleWidth}
            display={isRanged}
            vertical={vertical}
            showTooltip={showTooltip}
          />
          <SliderHandle
            className="kg-range-slider__handle"
            left={this.calcHandleLeft1(width, v0Left)}
            valueListener={this.slider1Listener}
            sliderHandleWidth={sliderHandleWidth}
            vertical={vertical}
            value={value1}
            showTooltip={showTooltip}
          />
          <SliderBarHandle
            width={width}
            v0Left={v0Left}
            enableBarDrag={this.props.enableBarDrag}
            sliderBarListener={this.sliderBarListener}
            vertical={vertical}
          />
        </StyledRangeSlider>
      </SliderWrapper>
    )
  }

}