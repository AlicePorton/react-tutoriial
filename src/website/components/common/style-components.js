import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const theme = {
  tooltipBg: '#1869b5',
  tooltipColor: '#ffffff',
  panelBackground: '#29323C',
  panelBackgroundHover: '#3A4552',
}

export const StyledPanelDropdown = styled.div`
  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }

  ::-webkit-scrollbar-corner {
    background: ${theme.panelBackground};
  }

  ::-webkit-scrollbar-track {
    background: ${theme.panelBackground};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${theme.panelBackgroundHover};
    border: 3px solid ${theme.panelBackground};
    :hover {
      background: ${theme.labelColor};
      cursor: pointer;
    }
  }
`;


export const Tooltip = styled(ReactTooltip)`
  &.__react_component_tooltip {
    font-size: 9.5px;
    font-weight: 500;
    padding: 7px 18px;

    &.type-dark {
      background-color: ${theme.tootipBg};
      color: ${theme.tooltipColor};
      &.place-bottom {
        :after {
          border-bottom-color: ${theme.tooltopBg};
        }
      }

      &.place-top {
        :after {
          border-top-color: ${theme.tooltipBg};
        }
      }

      &.place-right {
        :after {
          border-left-color: ${theme.tooltipBg};
        }
      }
    }
  }
`;

