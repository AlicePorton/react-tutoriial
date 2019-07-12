import React from 'react';
import styled, {keyframes} from 'styled-components';

const animationName = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border-left-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  animation: _preloader_spin_ 500ms linear infinite;
  border-radius: 50%;
  border-bottom-color: transparent;
  cursor: wait;
  border-style: solid;
  display: block;
  animation-name: ${animationName};
`;


const LoadingSpinner = ({size = 32}) => (
  <Loader style={{width: `${size}px`, height: `${size}px`}} />
);

export default LoadingSpinner;


