import React from 'react';
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
// ========================================
const SECTION_CONTENT = {
  examples: Examples,
  showcase: Showcase,
  features: Features,
  walkthrough: Walkthrough
}

ReactDOM.render(
  // <Game />,
  <ThemeProvider theme={theme}>
    {/* <Examples></Examples> */}
    {/* <Showcase></Showcase> */}
    <div>
      <Header />
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
    </div>
  </ThemeProvider>,
  document.getElementById('root')
);
