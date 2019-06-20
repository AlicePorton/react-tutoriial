import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import KeplerGlLogo from '../common/logo'
import {Tooltip} from '../common/style-components';
import {Save, Files, Share, Picture, MapIcon} from '../icons';
import ClickOutsideCloseDropdown from '../sidepanel/panel-dropdown';


const StyledPanelHeader = styled.div.attrs({
  className: 'side-side-panel__header'
})`
  background-color: ${props => props.theme.sidePanmelHeaderBg};
  padding: 12px 16px 0 16px;
`;

const StyledPanelHeaderTop = styled.div.attrs({
  className: 'side-panel__header__top'
})`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
`;

const StyledPanelTopActions = styled.div.attrs({
  className: 'side-panel__header__actions'
})`
  display: flex;
`;

const StyledPanelAction = styled.div.attrs({
  className: 'side-panel__header__actions'
})`
  align-items: center;
  border-radius: 2px;
  color: ${props => (props.active ? props.theme.textColorHl : props.theme.subtextColor)};
  display: flex;
  height: 26px;
  justify-content: space-between;
  margin-left: 4px;
  width: 70px;
  padding: 5px;
  font-weight: bold;
  a {
    height: 20px;
  }

  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.secondaryBtnActBgd};
    color: ${props => props.theme.textColorHl};
    a {
      color: ${props => props.theme.textColorHl};
    }
  }
`;

const StyledPanelDropdown = styled.div`
  background-color: ${props => props.theme.dropdownListBgd};
  box-shadow: ${props => props.theme.dropdownListShadow};
  font-size: 11px;
  padding: 16px 0;
  position: absolute;
  left: 64px;
  transition: ${props => props.theme.transitionSlow};
  display: flex;
  margin-top: ${props => props.show ? '6px' : '20px'};
  opacity: ${props => props.show ? 1 : 0 };
  transform: translateX(calc(-50% + 20px));
  pointer-events: ${props => props.show ? 'all' : 'none'};
  z-index: 1000;

  .save-export-dropdown__inner {
    box-shadow: none;
    background-color: transparent;
    display: flex;
  }

  .save-export-dropdown__item {
    align-items: center;
    border-right: 1px solid ${props => props.theme.panelHeaderIcon};
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: column;
    padding: 0 22px;

    :hover {
      cursor: pointer;
      color: ${props => props.theme.textColorHl};
    }

    &:last-child {
      border-right: 0;
    }
  }

  .save-export-dropdown__title {
    white-space: nowrap;
    margin-top: 4px;
  }
`;

export const PanelAction = ({item, onClick}) => (
  <StyledPanelAction className="side_panel__panel-header__action"
    data-tip
    data-for={`${item.id}-action`}
    onClick={onClick}>
      {item.label ? <p>{item.label}</p> : null}
      <a 
        target={item.blank ? '_blank': '' }
        href={item.href}
      >
        <item.iconComponent height="20px" />
      </a>
      {item.tooltip ? (<Tooltip
        id={`${item.id}-action`}
        place="bottom"
        delayShow={500}
        effect="solid"
      >
        <span>{item.tooltip}</span> 
      </Tooltip>) : null}
    </StyledPanelAction>
);

const PanelItem = ({onClose, onClickHandler, label, icon}) => (
  <div className="save-export-dropdown__item" onClick={(e) => {
    e.stopPropagation();
    onClose();
    onClickHandler();
  }}>
    {icon}
    <div className="save-export-dropdown__title">{label}</div>
  </div>
);

export const ExportImageFactory = () => {
  const ExportImage = (props) => (
    <PanelItem {...props} />
  );

  ExportImage.defaultProps = {
    label: 'Export Image',
    icon: <Picture />
  };

  return ExportImage;
};

export const ExportDataFactory = () => {
  const ExportData = (props) => (
    <PanelItem {...props} />
  );
  ExportData.defaultProps = {
    label: 'Export Data',
    icon:  <Files />
  };
  
  return ExportData;
};

export const ExportMapFactory = () => {
  const ExportMap = (props) => (
    <PanelItem {...props} />
  );

  ExportMap.defaultProps = {
    label: 'Export Map',
    icon: <MapIcon />
  };

  return ExportMap;
};

export const SaveMapFactory = () => {
  const SaveMap = (props) => (
    <PanelItem {...props} />
  );

  SaveMap.defaultProps = {
    label: 'Save Map',
    icon: <Share />
  };

  return SaveMap;
};

export const SaveExportDropdownFactory = (
  ExportImage,
  ExportData,
  ExportMap,
  SaveMap) => {
    const SaveExportDropdown = ({
      onExportImage,
      onExportData,
      onExportConfig,
      onExportMap,
      onSaveMap,
      show,
      onClose
    }) => {
      return (
        <StyledPanelDropdown show={show} className="save-export-dropdown">
          <ClickOutsideCloseDropdown
            className="save-export-dropdown__inner"
            show={show}
            onClose={onClose}
          >
            <ExportImage
              onClickHandler={onExportImage}
              onClose={onClose}
            />
            <ExportData
              onClickHandler={onExportData}
              onClose={onClose}
            />
            <ExportMap
              onClickHandler={onExportData}
              onClose={onClose}
            />
            {onSaveMap ? (
              <SaveMap
                onClickHandler={onSaveMap}
                onClose={onClose}
              />
            ) : null}
          </ClickOutsideCloseDropdown>
        </StyledPanelDropdown>
      );
    };
    return SaveExportDropdown;
};


SaveExportDropdownFactory.deps = [
  ExportImageFactory,
  ExportDataFactory,
  ExportMapFactory,
  SaveMapFactory
];

PanelHeaderFactory.deps = [
  SaveExportDropdownFactory
];

function PanelHeaderFactory(
  SaveExportDropdown
){
  return class PanelHeader extends Component {
    static propTypes = {
      appName: PropTypes.string,
      version: PropTypes.string,
      uiState: PropTypes.object,
      uiStateActions: PropTypes.object,
      logoComponet: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
      actionItems: PropTypes.arrayOf(PropTypes.any)
    };

    static defaultProps = {
      logoComponent: KeplerGlLogo,
      actionItems: [{
        id: 'save',
        iconComponent: Save,
        onClick: () => {},
        label: 'Share',
        dropdownComponent: SaveExportDropdown,
        tooltip: '分享给好友'
      }]
    };

    render() {
      const {
        appName,
        version,
        actionItems,
        onSaveMap,
        onExportImage,
        onExportData,
        onExportConfig,
        onExportMap,
        visibleDropdown,
        showExportDropdown,
        hideExportDropdown
      } = this.props;

      return (
        <StyledPanelHeader  className="side-panel__panel-header">
          <StyledPanelHeaderTop className="side-panel__panel-header__top">
            <this.props.logoComponent appName={appName} version={version} />
            <StyledPanelTopActions>
              {actionItems.map(item => (
                <div className="side-panel__panel-header__right"
                  key={item.id}
                  style={{position: 'relative'}}
                >
                  <PanelAction
                    item={item}
                    onClick={() => {
                      if (item.dropdownComponent) {
                        showExportDropdown(item.id);
                      }
                      item.onClick();
                    }}
                  />
                  {item.dropdownComponent ? (
                    <item.dropdownComponent
                      onClose={hideExportDropdown}
                      show={visibleDropdown === item.id}
                      onSaveMap={onSaveMap}
                      onExportData={onExportData}
                      onExportImage={onExportImage}
                      onExportConfig={onExportConfig}
                      onExportMap={onExportMap}
                    />
                  ) : null}
                </div>
              ))}
            </StyledPanelTopActions>
          </StyledPanelHeaderTop>
        </StyledPanelHeader>
      )
    }
  }
}

export default PanelHeaderFactory;








