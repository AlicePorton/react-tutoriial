import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import {Tooltip} from '../common/style-components';


const theme = {
  textColorHl: "#2473bd",
  panelHeaderIconActive: '#A0A784',
  panelHeaderIcon: "#6A7485"
};


const HeaderActionWrapper = styled.div`
  margin-left: ${props => (props.flush ? 0: 8)}px;
  display: flex;
  align-items: center;
  color: ${props =>
    props.active
      ? theme.panelHeaderIconActive
      : theme.panelHeaderIcon};
  :hover {
    cursor: pointer;
    color: ${props => 
      props.hoverColor
        ? props.theme[props.hoverColor]
        : theme.textColorHl}
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`;

export default class panelHeaderAction extends Component {
  static propTypes = {
    id: PropTypes.string,
    flush: PropTypes.bool,
    Tooltip: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    hoverColor: PropTypes.string,
    className: PropTypes.string,
    tooltipType: PropTypes.string,
  };

  static defalutProps = {
    onClick: () => {},
    hoverColor: null,
    active: false
  };

  render() {
    const {
      onClick,
      tooltip,
      id,
      active,
      flush,
      hoverColor,
      tooltipType,
      disabled,
      className
    } = this.props;
    return (
      <HeaderActionWrapper
        className={classnames('panel--header__action', {disabled, [className]: className})}
        active={active}
        hoverColor={hoverColor}
        flush={flush}
      >
        <this.props.IconComponent
          data-tip 
          data-for={`${tooltip}_${id}`}
          height="18px"
          onClick={onClick}
        />
        {tooltip ? (
          <Tooltip
            id={`${tooltip}_${id}`}
            effect="solid"
            delayShow={500}
            type={tooltipType}
          >
            <span>{tooltip}</span>
          </Tooltip>
        ) : null}
      </HeaderActionWrapper>
    )
  }
}