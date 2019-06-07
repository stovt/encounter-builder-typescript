import styled from 'styled-components';
import { IconWrapper, IconUtils } from 'shared/components/Icons';

export default styled(IconWrapper)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  ${props => IconUtils.colorOverrideCss(props.theme.colors.black)}
`;
