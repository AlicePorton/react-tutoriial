import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeProvider} from 'styled-components';
import Examples from './components/examples';
import {theme} from './styles';
import Showcase from "./components/showcase";

import { SECTIONS } from "./content";
import Section from "./components/common/section";
import Header from "./components/header";
import Features from "./components/features";
import Walkthrough from "./components/walkthrough";

import Hero from './components/hero';
import styled from 'styled-components';

import Introduction from './components/first-page/introduction';
import Website from './website/index';
// ========================================
const SECTION_CONTENT = {
  examples: Examples,
  showcase: Showcase,
  features: Features,
  walkthrough: Walkthrough
}

const IndexContainer = styled.div`
  font-family: ff-clan-web-pro, 'Helvetica Neue', Helvetica, sans-serif;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.71429;

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.labelColor};
  }
 `;
class App extends Component {
  render() {

    return (
        <ThemeProvider theme={theme}>
        {/* <Examples></Examples> */}
        {/* <Showcase></Showcase> */}
        <IndexContainer>
          <Header />
          <Hero />
          {SECTIONS.map(
            ({id, title, description, icon, isDark, background}, i) => {
              const SectionContent = SECTION_CONTENT[id];
              return (
                <Section
                  key={`section-${i}`}
                  title={title}
                  description={description}
                  icon={icon}
                  isDark={isDark}
                  background={background}
                >
                  <SectionContent></SectionContent>
                </Section>
              )
            }
          )}
        <Introduction></Introduction>
        </IndexContainer>

      </ThemeProvider>
    )
  }
}
ReactDOM.render(
  // <Game />,
  // <App />,
  <Website></Website>,
  document.getElementById('root')
);
