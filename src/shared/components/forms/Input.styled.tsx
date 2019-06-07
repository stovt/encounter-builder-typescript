import styled from 'styled-components';

export default styled.input`
  height: 34px;
  width: 100%;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};
  line-height: 34px;
  padding: 0 15px;
  border: 1px solid ${props => props.theme.colors.input.border};
  outline: none;

  &:focus {
    box-shadow: 0 4px 16px 0 ${props => props.theme.colors.input.focusShadow};
    border: solid 1px ${props => props.theme.colors.input.focusBorder};
  }
`;
