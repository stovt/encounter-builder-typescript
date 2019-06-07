import { css } from 'styled-components';

export const colorOverrideCss = (color: string) => css`
  svg {
    path {
      stroke: ${color};
    }

    circle {
      stroke: ${color};
      fill: ${color};
    }
  }
`;

export const fillColorOverrideCss = (color: string) => css`
  svg {
    circle {
      fill: ${color};
    }
  }
`;

export const strokeColorOverrideCss = (color: string) => css`
  svg {
    path {
      stroke: ${color};
    }

    circle {
      stroke: ${color};
    }
  }
`;

export const iconWrapperCss = (size: number) => css`
  width: ${size}px;
  height: ${size}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
