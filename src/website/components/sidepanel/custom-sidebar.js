import SidebarFactory, {CollapseButtonFactory} from './sidebar';
import React, { Component } from 'react';
import {ThemeProvider} from 'styled-components';
import SidebarSpec from './sidebar-spec';
import {theme} from '../../styles';

const Button = CollapseButtonFactory();
const SideBar = SidebarFactory(Button);



export default class CustomSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: true}
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <SideBar
          isOpen={this.state.isOpen}
          onOpenOrClose={e => this.setState(e)}>
          <SidebarSpec />
        </SideBar>
      </ThemeProvider>
    );
  }
}