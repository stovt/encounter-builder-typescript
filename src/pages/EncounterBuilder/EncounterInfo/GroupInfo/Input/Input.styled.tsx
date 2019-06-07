import styled from 'styled-components';

export default styled.input`
  border: none;
  border-radius: 0;
  vertical-align: middle;
  text-align: center;
  width: 40px;

  &:focus {
    border: solid 1px ${props => props.theme.colors.input.focusBorder};
    box-shadow: 0 4px 16px 0 ${props => props.theme.colors.input.focusShadow};
  }
`;
