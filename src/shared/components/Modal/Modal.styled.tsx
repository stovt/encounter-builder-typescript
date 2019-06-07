import styled, { css } from 'styled-components';
import { isIE } from 'shared/helpers';

interface Props {
  width: string;
  padded: boolean;
  flex: boolean;
  cover: boolean;
  fullscreenOnMobile: boolean;
}

const flexStyles = css`
  display: flex;
  flex-direction: column;
`;

const defaultStyles = css`
  overflow-y: auto;
`;

const coverStyles = css`
  width: calc(100vw - 100px);
  height: 100%;
`;

const ieStyles = css`
  margin-top: 50px;
`;

const desktopStyles = css<Props>`
  min-height: 0;
  max-height: calc(100vh - 100px);
  margin: auto;
  width: ${props => (props.width ? props.width : '435px')};
  ${isIE && ieStyles}
  ${props =>
    props.padded &&
    css`
      padding: 40px;
    `}
  ${props => (props.flex ? flexStyles : defaultStyles)}
  ${props => props.cover && coverStyles}
`;

const StyledModal = styled.div<Props>`
  position: relative;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 24px 0 rgba(104, 135, 226, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);
  width: 100%;
  min-height: ${props => (props.fullscreenOnMobile ? '100vh' : 0)};
  ${props =>
    props.padded &&
    css`
      padding: 20px;
    `}
  ${props => props.theme.breakpoints.sm`${desktopStyles}`};
`;

export default StyledModal;
