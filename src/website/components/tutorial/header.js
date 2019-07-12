import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import PropTypes from 'prop-types';
import Earth from './earth';
import {LOGO, TITLE_BG, HEADER_BG} from './imgconfig';

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  margin-top: 10px;
  
  background: url(${HEADER_BG}) fixed no-repeat center;

  .specialFont {
    position: relative;
    background: url(${TITLE_BG}) no-repeat center;
    font-family: specialFont;
  }

  .al-c,
  .alc {
    text-align: center;
  }
`;

const Title = styled.span`
  color: #2a8fb9;
  font-size: 28px;
  letter-spacing: 4px;
`;




class Header extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    src: PropTypes.string
  };

  static defaultProps = {
    id: "1",
    label: "test",
    src: LOGO,
    title: "This is a title"
  };

  render() {
    return (
      <HeaderContainer>
        <header className="specialFont al-c">
          <img src={this.props.src} alt="fsee" />
          <Title>{this.props.title}</Title>
          <Earth></Earth>
        </header>
        {this.props.children}
      </HeaderContainer>
    );
  }
}

export default Header;