import styled from 'styled-components';

export default styled.button`
  display: block;
  transition: all 0.1s ease;
  cursor: pointer;
  outline: none;
  padding: ${props => props.theme.paddings.small};
  border-radius: 4px;
  border: 1px solid transparent;
  /* stylelint-disable-next-line declaration-colon-newline-after */
  background: ${props => `${props.theme.colors.btn.prime3}`};
  color: ${props => props.theme.colors.grey};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.3;
    cursor: text;
  }
`;
