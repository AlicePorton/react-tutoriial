import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ArrowRight} from './icons/arrow-right';

const StyledSidePanelContainer = styled.div`
  z-index: 99;
  height: 100%;
  width: ${props => props.width + 2 * props.theme.sidePanel.margin.left}px;
  display: flex;
  transition: width 250ms;
  position: absolute;
`;

const SideBarContainer = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: left 250ms, right 250ms;
  align-items: stretch;
  flex-grow: 1;
`;

const SideBarInner = styled.div`
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledCollapseButton = styled.div`
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  justify-content: center;
  border-radius: 1px;
  display: flex;
  height: 20px;
  position: absolute;
  right: -8px;
  width: 20px;

  :hover {
    cursor: pointer;
    box-shadow: none;
  }
`;

export const CollapseButtonFactory = () => {
  const CollapseButton = ({onClick, isOpen}) => (
    <StyledCollapseButton
      className="side-bar__close"
      onClick={onClick}
    >
      <ArrowRight
        height="12px"
        style={{transform: `rotate(${isOpen ? 180: 0}deg)`}}
      />
    </StyledCollapseButton>
  );
  return CollapseButton;
};

SidebarFactory.deps = [CollapseButtonFactory]

function SidebarFactory(CollapseButton) {
  return class SideBar extends Component {
    static defaultProps = {
      width: 300,
      minifiedWidth: 0,
      isOpen: true,
      onOpenOrClose: function noop() {}
    };

    static porpTypes = {
      width: PropTypes.number,
      isOpen: PropTypes.bool,
      minifiedWidth: PropTypes.number,
      onOpenOrClose: PropTypes.func
    };

    _onOpenOrClose = () => {
      this.props.onOpenOrClose({isOpen: !this.props.isOpen});
    };

    render() {
      const {isOpen, minifiedWidth, width} = this.width;
      const horizontalOffset = isOpen ? 0: minifiedWidth - width;

      return (
        <StyledSidePanelContainer
          width={isOpen ? width : 0}
          className="side-pane--container"
        >
          <SideBarContainer
            className="side-bar"
            style={{width: `${width}px`}}
            left={horizontalOffset}>
            {isOpen ? (
              <SideBarInner className="side-bar__inner">
                {this.props.children}
              </SideBarInner>
            ) : null}
            <CollapseButton
              isOpen={isOpen}
              onClick={this._onOpenOrClose}
            ></CollapseButton>
            </SideBarContainer>
        </StyledSidePanelContainer>
      )
    }
  }
}

export default SidebarFactory;