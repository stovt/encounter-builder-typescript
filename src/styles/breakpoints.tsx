import { css, CSSObject, SimpleInterpolation } from 'styled-components';

export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

const breakpoints = (sizes: Breakpoints, unit: string): Record<string, CSSObject> => {
  const keys = Object.keys(sizes) as ['xs', 'sm', 'md', 'lg'];

  return keys.reduce(
    (acc, label, index) => ({
      ...acc,
      [label]:
        index > 0
          ? (strings: CSSObject, ...interpolations: SimpleInterpolation[]) => css`
            @media only screen and (min-width: ${sizes[label]}${unit}) {
              ${css(strings, ...interpolations)}
            }
          `
          : (strings: CSSObject, ...interpolations: SimpleInterpolation[]) => css`
            @media only screen and (max-width: ${sizes[keys[1]]}${unit}) {
              ${css(strings, ...interpolations)}
            }
          `
    }),
    {}
  );
};

export default breakpoints;
