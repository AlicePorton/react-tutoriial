import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationBarWrapper = styled.div`
  padding: 16px 0px;
  cursor: pointer;
  margin-left: 2px;
  :first-child {
    margin-left: 0px;
  }
`;

const PaginationBar = styled.div`
  width: 50px;
  height: 4px;
  background: white;
  opacity: ${props => (props.isActive ? '1.0' :'0.5')};
  transition: opacity 200ms;
`;

const Pagination = ({items, selectedIndex, onChange}) => (
  <PaginationContainer>
    {items.map((item, index) => (
      <PaginationBarWrapper key={index} onclick={() => onChange(index)}>
        <PaginationBar isActive={index === selectedIndex} />
      </PaginationBarWrapper>
    ))}
  </PaginationContainer>
);

export default class Swipeable extends PureComponent {
  render() {
    const {children , onChange, selectedIndex } = this.props;
    return (
      <div>
        <SwipeableViews
          enableMouseEvents
          index={selectedIndex}
          onChange={onChange}
        >
          {children}
        </SwipeableViews>
        <Pagination
          items={children}
          selectedIndex={selectedIndex}
          onChange={onChange}
        >
        </Pagination>
      </div>
    );
  }
}
