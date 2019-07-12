import {css} from 'styled-components';

const breakPoints = {
  palm: 588,
  desk: 768
};

export const media = {
  palm: (...args) => css`
    @media (max-width: ${props => (props.theme.breakPoints || breakPoints).palm}px) {
      ${css(...args)};
    }
  `,

  portable: (...args) => css`
    @media (max-width: ${props => (props.theme.breakPoints || breakPoints).desk}px) {
      ${css(...args)};
    }
  `,

  desk: (...args) => css`
    @media (max-width: ${props => (props.theme.breakPoints || breakPoints).desk + 1}px) {
      ${css(...args)};
    }
  `,
};
