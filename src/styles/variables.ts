import { DefaultTheme } from 'styled-components';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  fonts: {
    main: '"Roboto", "Arial"'
  },
  fontSize: {
    body: '14px',
    title: '30px'
  },
  colors: {
    body: '#f9fafc',
    error: '#d0021b',
    black: '#000',
    white: '#fff',
    grey: '#505050',
    link: '#00448b',
    hr: '#ddd',
    btn: {
      prime1: '#da3319',
      prime2: '#eb4930',
      prime3: '#f3f3f3',
      shadow: 'rgba(60, 18, 6, 0.16)'
    },
    input: {
      border: '#dde3e8',
      focusBorder: '#197aad',
      focusShadow: 'rgba(25, 122, 173, 0.5)'
    },
    legend: {
      trivial: '#fff',
      group: '#f7dfff',
      pair: '#d9edf7',
      easy: '##dff0d8',
      medium: '#faf2cc',
      hard: '#f6ce95',
      deadly: '#eba5a3'
    }
  },
  margins: {
    small: '5px',
    medium: '10px',
    large: '20px'
  },
  paddings: {
    small: '5px',
    medium: '10px',
    large: '20px',
    btn: '16px',
    smallBtn: '12px',
    input: '22px 10p 6px'
  },
  flexboxgrid: {
    gridSize: 12,
    gutterWidth: 2, // rem
    outerMargin: 1.6, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em, ~768px
      md: 64, // em, ~1024px
      lg: 82.5 // em, ~1320px
    }
  },
  breakpoints: breakpoints(
    {
      xs: 0, // em
      sm: 48, // em, ~768px
      md: 64, // em, ~1024px
      lg: 82.5 // em, ~1320px
    },
    'em'
  )
};

export default theme;
