import styled from 'styled-components';
import { StyledButton } from 'shared/components/forms';

export default styled(StyledButton)`
  font-size: 14px;
  margin-top: ${props => props.theme.margins.medium};

  & svg {
    margin-right: ${props => props.theme.margins.small};
  }
`;
