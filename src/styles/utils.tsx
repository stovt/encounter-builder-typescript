import { createGlobalStyle } from 'styled-components';

const GlobalUtilsStyles = createGlobalStyle`
  .flex {
    display: flex !important;
  }

  .text-right {
    text-align: right;
  }

  .legend-trivial {
    background-color: #fff;
  }

  .legend-group {
    background-color: #f7dfff;
  }

  .legend-pair {
    background-color: #d9edf7;
  }

  .legend-easy {
    background-color: #dff0d8;
  }

  .legend-medium {
    background-color: #faf2cc;
  }

  .legend-hard {
    background-color: #f6ce95;
  }

  .legend-deadly {
    background-color: #eba5a3;
  }
`;

export default GlobalUtilsStyles;
