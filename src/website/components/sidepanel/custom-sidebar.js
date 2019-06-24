import SidebarFactory, {CollapseButtonFactory} from './sidebar';
import React, { Component } from 'react';
import {ThemeProvider} from 'styled-components';
import SidebarSpec from './sidebar-spec';
import {theme} from '../../styles';

import ChickletedInput from '../common/item-selector/chickleted-input';
import Typeahead from '../common/item-selector/typeahead';
import DropdownList from '../common/item-selector/dropdown-list';

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
          {/* <DropdownList /> */}
          {/* <ChickletedInput
            selectedItems={['tag-1', 'tag-2']} /> */}
            <Typeahead
              options={['test-1', 'test-2', 'test-3', 'test-4']}
              onBlur={e => console.log('blur')}
              // 写入input中的值
              initialValue="test-1"
              searchable={true}
              // searchOptions不存在的时候使用filterOption
              searchOptions={(value, options) => options}
              inputDisplayOption="test"/>
        </SideBar>
      </ThemeProvider>
    );
  }
}