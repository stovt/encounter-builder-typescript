import * as React from 'react';
import GlobalGridStyles from './grid';
import GlobalNormalizeStyles from './normalize';
import GlobalTypographyStyles from './typography';
import GlobalUtilsStyles from './utils';

export const GlobalStyles: React.FC = () => (
  <>
    <GlobalGridStyles />
    <GlobalNormalizeStyles />
    <GlobalTypographyStyles />
    <GlobalUtilsStyles />
  </>
);

export { default as theme } from './variables';
