import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

export const classList = {
  list: 'list-selector',
  listHeader: 'list__header',
  listSection: 'list__section',
  listItem: 'list__item',
  listItemAnchor: 'list__item__anchor'
};

const defaultDisplay = d => d;
export const ListItem = ({value, displayOption = defaultDisplay}) => (
  <span className={classList.listItemAnchor}>{displayOption(value)}</span>
);

const DropdownListWrapper = styled.div`
  background-color:${props => props.theme.dropdownListBgd};
  border-top: 1px solid ${props => props.theme.dropdownListBorderTop};
  ${props => props.theme.dropdownList};
`;

export default class DropdownList extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.any),
    allowCustomValues: PropTypes.number,
    customClassed: PropTypes.object,
    customValues: PropTypes.arrayOf(PropTypes.any),
    customListItemComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func
    ]),
    customListHeaderComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func
    ]),
    selectionIndex: PropTypes.number,
    onOptionSelected: PropTypes.func,
    displayOption: PropTypes.func.isRequired,
    defaultClassNames: PropTypes.bool,
    areResultsTruncated: PropTypes.bool,
    resultsTruncatedMessage: PropTypes.string,
    listItemComponent: PropTypes.func
  };

  static defaultProps = {
    options: [],
    customClasses: {},
    customListItemComponent: ListItem,
    customListHeaderComponent: null,
    allowCustomValues: 0,
    customValues: [],
    displayOption: defaultDisplay,
    onOptionSelected: () => {},
    defaultClassNames: true,
    selectionIndex: null
  };

  _onClick(result, event) {
    event.preventDefault();
    this.props.onOptionSelected(result, event);
  }

  render() {
    const {fixedOptions} = this.props;
    const display = this.props.displayOption;
    if (!this.props.options.length && this.props.allowCustomValues <= 0) {
      return false;
    }

    const valueOffset = Array.isArray(fixedOptions) ? fixedOptions.length : 0;
    return (
      <DropdownListWrapper className={classList.list}>
        {this.props.customListHeaderComponent ? (
          <div className={classList.listHeader}>
            <this.props.customListHeaderComponent />
          </div>
        ) : null}

        {valueOffset > 0 ? (
          <div className={classList.listSection}>
            {fixedOptions.map((value, i) => (
              <div className={classNames(classList.listItem, {
                hover: this.props.selectionIndex === i,
                fixed: true
              })}
              key={`${display(value)}_${i}`}
              onMouseDown={e => this._onClick(value, e)}
              onClick={e => this._onClick(value, e)}
              >
                <this.props.customListItemComponent
                  value={value}
                  displayOption={display}
                />
              </div>
            ))}
          </div>
        ) : null}

        {this.props.options.map((value, i) => (
          <div
            className={classNames(classList.listItem, {
              hover: this.props.selectionIndex === i + valueOffset
            })}
            key={`${display(value)}_${i}`}
            onMouseDown={e => this._onClick(value, e)}
            onClick={e => this._onClick(value, e)}
          >
           <this.props.customListItemComponent
            value={value}
            displayOption={display}
            />
          </div>
        ))}
      </DropdownListWrapper>
    )
  }
}