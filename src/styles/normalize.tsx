import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const normalizeStyles = normalize();

const GlobalNormalizeStyles = createGlobalStyle`
  ${normalizeStyles}
`;

export default GlobalNormalizeStyles;
