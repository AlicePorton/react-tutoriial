import React, { Component } from 'react';
import
  PanelHeaderFactory,
 {
  ExportImageFactory, 
  ExportMapFactory, 
  ExportDataFactory, 
  SaveMapFactory, 
  SaveExportDropdownFactory,
} from './panel-header';
import {PANELS} from '../../constants/default-settings';
import PanelToggleFactory from './panel-toggle';

const PanelToggle = PanelToggleFactory()


const ExportImage = ExportImageFactory();
const ExportMap = ExportMapFactory();
const ExportData = ExportDataFactory();
const SaveMap = SaveMapFactory();

const SaveExportDropdown = SaveExportDropdownFactory(ExportImage, ExportData, ExportMap, SaveMap)

const PanelHeader = PanelHeaderFactory(SaveExportDropdown)


export default class SidebarSpec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleDropdown: 'false'
    };
    this.hideExportDropdown = this.hideExportDropdown.bind(this);
  }
  
  showExportDropdown = () => {
    this.setState({ visibleDropdown: 'save' });
  }

  hideExportDropdown = () => {
    this.setState({ visibleDropdown: 'false' });
  }
  render() {
    return (
      <div>
        {/* <ExportImage />
        <ExportMap />
        <ExportData />
        <SaveMap /> */}
        {/* <SaveExportDropdown show={true} />
         */}
        <PanelHeader
          showExportDropdown={this.showExportDropdown}
          visibleDropdown={this.state.visibleDropdown}
          hideExportDropdown={this.hideExportDropdown}
        />
        <PanelToggle
          panels={PANELS}
        />
      </div>
    );
  };
}
