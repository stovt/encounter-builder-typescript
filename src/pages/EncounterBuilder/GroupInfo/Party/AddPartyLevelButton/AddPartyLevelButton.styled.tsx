import styled from 'styled-components';
import { StyledButton } from 'shared/components/forms';

export default styled(StyledButton)`
  font-size: 14px;
  margin-top: 10px;

  & svg {
    margin-right: ${props => props.theme.margins.small};
  }
`;
