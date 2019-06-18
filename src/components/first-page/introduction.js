import React, { PureComponent } from 'react';
import {VerticalCard} from '../common/card';
import styled from 'styled-components';

const Container = styled.div`
  background: #3f51b5;
`;


class Introduction extends PureComponent {
  render() {
    return (
      <Container>
        <VerticalCard
          title="test"
          Description="test"
        >
        </VerticalCard>
      </Container>
    );
  };
}

export default Introduction;