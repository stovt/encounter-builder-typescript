// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      main: string;
    };
    fontSize: {
      body: string;
      title: string;
    };
    colors: {
      body: string;
      error: string;
      black: string;
      white: string;
      grey: string;
      link: string;
      hr: string;
      btn: {
        prime1: string;
        prime2: string;
        prime3: string;
        shadow: string;
      };
      input: {
        border: string;
        focusBorder: string;
        focusShadow: string;
      };
      legend: {
        trivial: string;
        group: string;
        pair: string;
        easy: string;
        medium: string;
        hard: string;
        deadly: string;
      };
    };
    margins: {
      small: string;
      medium: string;
      large: string;
    };
    paddings: {
      small: string;
      medium: string;
      large: string;
      btn: string;
      smallBtn: string;
      input: string;
    };
    flexboxgrid: {
      gridSize: number;
      gutterWidth: number;
      outerMargin: number;
      mediaQuery: string;
      container: {
        sm: number;
        md: number;
        lg: number;
      };
      breakpoints: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
      };
    };
    breakpoints: Record<'xs' | 'sm' | 'md' | 'lg', BaseThemedCssFunction<any>>;
  }
}
