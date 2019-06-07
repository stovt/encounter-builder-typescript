import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { isIE } from 'shared/helpers';

const desktopVisibleStyles = css`
  display: ${isIE ? 'block' : 'flex'};
`;

const visibleStyles = css`
  display: block;
  ${props => props.theme.breakpoints.sm`${desktopVisibleStyles}`}
`;

interface Props {
  visible: boolean;
}

const StyledOverlay = styled.div<Props>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  z-index: 100;
  overflow-y: auto;
  background-color: ${props => rgba(props.theme.colors.black, 0.16)};
  ${props => props.visible && visibleStyles}
`;

export default StyledOverlay;
