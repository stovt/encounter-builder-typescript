import { css, CSSObject, SimpleInterpolation, BaseThemedCssFunction } from 'styled-components';

export type Breakpoints = Record<'xs' | 'sm' | 'md' | 'lg', number>;

type ReturnType = Record<'xs' | 'sm' | 'md' | 'lg', BaseThemedCssFunction<any>>;

const breakpoints = (sizes: Breakpoints, unit: string): ReturnType => {
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
  ) as ReturnType;
};

export default breakpoints;
