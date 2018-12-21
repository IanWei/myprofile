import { css } from 'styled-components';

export const color = {
  primaryLight: 'rgba(100, 133, 164, 0.8)',
  primaryDark: 'rgba(38, 56, 76, 0.8)'
};

export const media = {
  phone: (...args) => css`
    @media only screen and (max-width: 37.5em) {
      ${css(...args)}
    }
  `,
  tabPort: (...args) => css`
    @media only screen and (max-width: 56.25em) {
      ${css(...args)}
    }
  `,
  phoneView: (...args) => css`
    @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
           only screen and (min-width: 125em) {
      ${css(...args)}
  `
};