import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowRight from '../icons/arrow-right';


const sidePanel = {
  margin: {top: 20, left: 20, bottom: 30, right: 20},
  sideBarCloseBtnBgdHover: "#A0A7B4"
}


const StyledSidePanelContainer = styled.div`
  top:10px;
  z-index: 99;
  height: 400px;
  width: ${props => props.width + 2 * sidePanel.margin.left}px;
  display: flex;
  transition: width 250ms;
  position: absolute;
  padding-top: ${sidePanel.margin.top}px;
  padding-right: ${sidePanel.margin.right}px;
  padding-left: ${sidePanel.margin.left}px;
  padding-bottom: ${sidePanel.margin.bottom}px;
`;

const SideBarContainer = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: left 250ms, right 250ms;
  left: ${props => props.left}px;
  align-items: stretch;
  flex-grow: 1;
`;

const SideBarInner = styled.div`
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
`;

const StyledCollapseButton = styled.div`
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  background-color: #6A7485;
  justify-content: center;
  border-radius: 1px;
  display: flex;
  height: 20px;
  position: absolute;
  top: ${sidePanel.margin.top}px;
  right: -8px;
  width: 20px;

  :hover {
    cursor: pointer;
    background-color: ${sidePanel.sideBarCloseBtnBgdHover};
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
      onOpenOrClose: (t) => {
        
        console.log(t);
      }
    };

    static porpTypes = {
      width: PropTypes.number,
      isOpen: PropTypes.bool,
      minifiedWidth: PropTypes.number,
      onOpenOrClose: PropTypes.func
    };

    _onOpenOrClose = (e) => {
      this.props.onOpenOrClose({ isOpen: !this.props.isOpen });
    };

    render() {
      const { isOpen, minifiedWidth, width } = this.props;
      const horizontalOffset = isOpen ? 0 : minifiedWidth - width;

      return (
        <StyledSidePanelContainer
          width={isOpen ? width : 0}
          className="side-pane--container">
          <SideBarContainer
            className="side-bar"
            style={{ width: `${width}px` }}
            left={horizontalOffset}>
            {isOpen ? (
              <SideBarInner className="side-bar__inner">
                {this.props.children}
              </SideBarInner>
            ) : null}
            <CollapseButton isOpen={isOpen} onClick={this._onOpenOrClose} />
          </SideBarContainer>
        </StyledSidePanelContainer>
      );
    }
  };
}

export default SidebarFactory;