import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from './style-components';
import {Docs} from 'website/components/icons';
import styled from 'styled-components';

const StyledInfoHelper = styled.div`
  align-items: center;
  margin-left: 10px;
  color: ${props => props.theme.labelColor}
  display: inline-flex;

  .info-helper__content {
    max-width: 100px;
  }

  :hover {
    cursor: pointer;
    color: ${props => props.theme.textColorHl};
  }
`;

const propTypes = {
  description: PropTypes.string.isRequired,
  containerClass: PropTypes.string
};

const InfoHelper = ({description, containerClass, id}) => (
  <StyledInfoHelper className={`info-helper ${containerClass || ''}`} data-tip data-for={id}>
    <Docs height="16px" />
    <Tooltip id={id} effect="solid">
      <div className="info-helper__content">{description}</div>
    </Tooltip>
  </StyledInfoHelper>
);

InfoHelper.propTypes = propTypes;

export default InfoHelper;