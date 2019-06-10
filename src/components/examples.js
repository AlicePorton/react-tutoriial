import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {EXAMPLES} from '../content';
import {VerticalCard} from './common/card';
import { media } from '../styles'
import StaggeredScrollAnimation from './common/staggered-scroll-animation'


// const image = 'https://s3.amazonaws.com/uber-static/kepler.gl/sample/earthquakes.png'
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.margins.large};
  ${media.palm`
    display: block;
  `}
`
const StyledCardContainer = styled.a `
  display: block;
  margin: ${props => props.theme.margins.small};
  color: black;
  cursor: pointer;
  transition: transform 350ms;
  :hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  ${media.palm`
    margin: 0px;
    margin-bottom: ${props => props.theme.margins.small}
  `};
`;



const CardContainer = ({linkUrl, children}) => (
  <StyledCardContainer href={linkUrl} target="_blank">
    {children}
  </StyledCardContainer>
)



class Examples extends PureComponent {
  render() {
    return (
      <div>
        <StaggeredScrollAnimation container={CardsContainer}>
          {EXAMPLES.map(({title, description, image, url}, i) => (
            <CardContainer linkUrl={url} key={`emaple-${i}`}>
              <VerticalCard
                title={title}
                description={description}
                image={image}
                linkText="Explore Map"
              >
              </VerticalCard>
            </CardContainer>
          ))}
        </StaggeredScrollAnimation>
      </div>
    )
  }
}

export default Examples;