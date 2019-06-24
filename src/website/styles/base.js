import {css} from 'styled-components';

const dropdownListAnchor = css`
  color: ${props => props.theme.selectColor};
  padding-left: 3px;
`;

const dropdownListItem = css`
  font-size: 11px;
  padding: 3px 9px;
  font-weight: 500;

  &.hover,
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.dropdownListHighlightBg};

    .list__item__anchor {
      color: ${props => props.theme.textColorHl};
    }
  }
`;

