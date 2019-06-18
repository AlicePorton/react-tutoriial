import React, { PureComponent } from 'react';
import styled,{css} from 'styled-components';

const containerStyles = css`
  box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
  border-radius: 4px;
`;

const VerticalContainer = styled.div`
  ${containerStyles} width: 400px;
`

const Header = styled.div`
  width: 100%;
  padding-left: 20px;
`;

const Content = styled.div`

`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  background: #5c6bc0;
  height: 46px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-left: 20px;
  line-height: 46px;
`;

const Description = styled.div`
  font-size: 14px;
  position: relative;
  background: #3f51b5;
  padding: 30px;
  color: #777;
  height: 82px;
  .info_ele {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
  }

  .whiteC {
    color: white;
    text-align: right;
  }

  .num_font {
    font-size: 22px;
  }

  .weight {
    font-weight: bold;
  }
`;

const Link = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: black;
  background: #36459a;
  height: 46px;
  cursor: pointer;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const IntroductionCard = ({
  title,
  description,
  linkText,
  linkUrl
}) => (
  <VerticalContainer>
    <Header></Header>
    <Content>
      <Title>{title}</Title>
      <Description>
        <div className="info_ele">
          <div className="whiteC text-right">
            <span className="num_font">45</span>
            <span className="weight">条</span>
          </div>
          <div className="little_title">
            {description}
          </div>
        </div> 
      </Description>
    </Content>
    <Link>{linkText}</Link>
  </VerticalContainer>
);