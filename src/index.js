import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeProvider} from 'styled-components';
import Examples from './components/examples';
import {theme} from './styles';
// ========================================

ReactDOM.render(
  // <Game />,
  <ThemeProvider theme={theme}>
    <Examples></Examples>
  </ThemeProvider>,
  document.getElementById('root')
);
