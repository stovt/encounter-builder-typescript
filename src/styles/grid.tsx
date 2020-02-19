import { createGlobalStyle } from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import variables from './variables';

const GlobalGridStyles = createGlobalStyle`
  ${Grid} {
    padding: ${variables.flexboxgrid.gutterWidth / 2}rem;
  }
`;

export default GlobalGridStyles;
