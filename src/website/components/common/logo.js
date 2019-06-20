import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {NAME, VERSION, WEBSITE} from '../../constants/default-settings';

const theme = {
  activeColor: '#000',
  subtextColor: '#6A7485'
};

const LogoTitle = styled.div`
  display: inline-block;
  margin-left: 6px;
`;

const LogoName = styled.div`
  .logo__link {
    color: ${theme.activeColor};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.17px;
  }
`;

const LogoVersion = styled.div`
  font-size: 10px;
  color: ${theme.subtextColor};
  letter-spacing: 0.83px;
  line-height: 14px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const LogoSvgWrapper = styled.div`
  margin-top: 3px;
`;

const LogoSvg = () => (
  <svg
    className="side-panel-logo__logo"
    width="22px"
    height="15px"
    viewBox="0 0 22 15"
  >
    <g transform="translate(11, -3) rotate(45.000000)">
      <rect fill="#535c6c" x="0" y="5" width="10" height="10" />
      <rect fill="#1FBAD6" x="5" y="0" width="10" height="10" />
    </g>
  </svg>
);

class KeplerGlLogo extends PureComponent {
  static propTypes = {
    appName: PropTypes.string,
    version: PropTypes.string
  };

  static defaultProps = {
    appName: NAME,
    version: VERSION,
    website: WEBSITE
  };

  render() {
    return (
      <LogoWrapper className="side-panel-logo">
        <LogoSvgWrapper>
          <LogoSvg />
        </LogoSvgWrapper>
        <LogoTitle className="logo__title">
          <LogoName className="logo__name">
            <a
              className="logo__link"
              target="_blank"
              rel="noopener noreferrer"
              href={this.props.website}>
              {this.props.appName}
            </a>
          </LogoName>
          {this.props.version ? (
            <LogoVersion className="logo__version">{this.props.version}</LogoVersion>
          ) : null}
        </LogoTitle>
      </LogoWrapper>
    );
  }
}



export default KeplerGlLogo;