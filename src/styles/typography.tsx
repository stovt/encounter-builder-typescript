import { createGlobalStyle } from 'styled-components';
import theme from './variables';

const GlobalTypographyStyles = createGlobalStyle`
  button,
  input,
  optgroup,
  select,
  textarea,
  html,
  body {
    font-family: '${theme.fonts.main}', sans-serif;
    font-size: ${theme.fontSize.body};
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  html {
    background-color: ${theme.colors.body};
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  b,
  strong {
    font-weight: 600;
  }

  a {
    color: ${theme.colors.link};
    text-decoration: none;
  }
`;

export default GlobalTypographyStyles;
