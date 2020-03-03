import { createGlobalStyle } from 'styled-components';

const GlobalUtilsStyles = createGlobalStyle`
  .flex {
    display: flex !important;
  }

  .text-right {
    text-align: right;
  }

  .legend-trivial {
    background-color: ${props => props.theme.colors.legend.trivial};
  }

  .legend-group {
    background-color: ${props => props.theme.colors.legend.group};
  }

  .legend-pair {
    background-color: ${props => props.theme.colors.legend.pair};
  }

  .legend-easy {
    background-color: ${props => props.theme.colors.legend.easy};
  }

  .legend-medium {
    background-color: ${props => props.theme.colors.legend.medium};
  }

  .legend-hard {
    background-color: ${props => props.theme.colors.legend.hard};
  }

  .legend-deadly {
    background-color: ${props => props.theme.colors.legend.deadly};
  }
`;

export default GlobalUtilsStyles;
