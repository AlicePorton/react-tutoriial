import React from 'react';
import styled, {keyframes} from 'styled-components';
import EarthImg from './earth_bg.png';

const divRotate = keyframes`
  from {
    transform: rotateX(0deg);
    -moz-transform: scale(2).rotateX(0deg)
  }
  to {
    transform: rotateX(360deg);
    -moz-transform: scale(2).rotateX(360deg)
  }
`;

const EarthContainer = styled.section`
  display: block;
  width: 70px;
  height: 70px;
  zoom: 3;
  perspective: 600px;
  transform-style: preserve-3d;
  position: absolute;
  animation: ${divRotate} 15s linear infinite;
  top: 50%;
  left: 50%;

  ${props => (props.__dev__ ? undefined : "z-index")}: 9999;
`;

const Container = styled.div`
`
const ImgContainer = styled.div`
  background: url(${EarthImg}) no-repeat;
  ${props => (props.__dev__ ? undefined : "z-index")}: 9999;
  position: absolute;
  width: 365px;
  height: 155px;
  left: 50%;
  background-size: 54%;
`;

const EarchLine = styled.div`
  transform: rotate${props => props.tdirection}(${props => props.deg}deg);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  border: 1px solid #009bf6;
`;

const EarthData = [0, 20, 40, 60, 90, 120, 150];


const Earth = (props) => (
  <Container>
    <ImgContainer />
    <EarthContainer>
      {EarthData.map(t => (
        <EarchLine tdirection="X" deg={t} />
      ))}
    </EarthContainer>
    <EarthContainer>
      {EarthData.map(t => (
        <EarchLine tdirection="Y" deg={t} />
      ))}
    </EarthContainer>
  </Container>
)

export default Earth;