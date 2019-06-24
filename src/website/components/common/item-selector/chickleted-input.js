import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'; 
import {Delete} from '../../icons';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,

  selectedItems: PropTypes.arrayOf(PropTypes.any),
  disabled: PropTypes.bool,
  displayOption: PropTypes.func,
  focus: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  inputTheme: PropTypes.string
};

const ChickletButton = styled.div`
  background: ${props => props.theme.panelActiveBg};
  border-radius: 1px;
  color: ${props => props.theme.textColor};
  font-size: 11px;
  line-height: 20px;
  margin: 4px 10px 4px 3px;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  max-width: calc(100% - 8px);

  :hover {
    color: ${props => props.theme.textColorHl};
  }
`;

const ChickletTag = styled.span`
  margin-right: 10px;
  text-overflow: ellipsis;
  width:100%;
  overflow: hidden;

  :hover {
    overflow: visible;
  }
`;

const Chicklet = ({disabled, name, remove}) => (
  <ChickletButton>
    <ChickletTag>{name}</ChickletTag>
    <Delete height="10px" onClick={disabled ? null : remove} />
  </ChickletButton>
);

const ChickletedInputContainer = styled.div`
  ${props => props.inputTheme === 'secondary' ?
    props.theme.secondaryChickletedInput : props.theme.chickletedInput}

  color: ${props => 
    props.hasPlaceholder
      ? props.theme.selectColorPlaceHolder
      : props.theme.selectColor};
    overflow: hidden;
`;

const ChickletedInput = ({
  focus,
  disabled,
  error,
  onClick,
  className,
  selectedItems = [],
  placeholder = '',
  removeItem,
  displayOption = d => d,
  inputTheme
}) => (
  <ChickletedInputContainer
    className={`${className} chickleted-input`}
    focus={focus}
    disabled={disabled}
    error={error}
    onClick={onClick}
    inputTheme={inputTheme}
    hasPlaceholder={!selectedItems || !selectedItems.length}
  >
    {selectedItems.length > 0
      ? selectedItems.map((item, i) => (
        <Chicklet
          disabled={disabled}
          key={`${displayOption(item)}_${i}`}
          name={displayOption(item)}
          remove={e => removeItem(item ,e)}
        />
      ))
      : <span className={`${className} chickleted-input__placeholder`}>{placeholder}</span>
    }
  </ChickletedInputContainer>
);

ChickletedInput.propTypes = propTypes;

export default ChickletedInput;