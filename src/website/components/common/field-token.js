import React from 'react';
import styled from 'styled-components';

import {
  FILED_TYLE_DISPLAY,
  FILED_COLORS
} from '../../constants/default-settings';

const FieldTag = styled.div`
  background-color: rgba(${props => props.color}, 0.2);
  border-radius: 2px;
  border: 1px solid rgb(${props => props.color});
  color: rgb(${props => props.color});
  display: inline-block;
  font-size: 10px;
  font-weight: 400;
  padding: 0 5px;
  text-align: center;
  width: 40px;
`;

const FieldToken = ({type}) => (
  <FieldTag
    color={
      (FILED_TYLE_DISPLAY[type] && FILED_TYLE_DISPLAY[type].color)
    }
  >
    {FILED_TYLE_DISPLAY[type].label}
  </FieldTag>
);

export default FieldToken;