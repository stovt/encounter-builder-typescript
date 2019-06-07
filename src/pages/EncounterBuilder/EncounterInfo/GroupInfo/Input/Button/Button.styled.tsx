import styled, { css } from 'styled-components';
import { IconWrapper, IconUtils } from 'shared/components/Icons';

const leftBtnStyles = css`
  border-right: 1px solid ${props => props.theme.colors.input.border};
  border-radius: 4px 0 0 4px;
`;
const rightBtnStyles = css`
  border-left: 1px solid ${props => props.theme.colors.input.border};
  border-radius: 0 4px 4px 0;
`;

interface Props {
  left?: boolean;
  right?: boolean;
}

export default styled(IconWrapper)<Props>`
  ${IconUtils.colorOverrideCss('#929292')}
  padding: ${props => props.theme.paddings.medium};
  background-color: #f3f3f3;
  color: #929292;
  cursor: pointer;
  ${props => props.left && leftBtnStyles}
  ${props => props.right && rightBtnStyles}
`;
