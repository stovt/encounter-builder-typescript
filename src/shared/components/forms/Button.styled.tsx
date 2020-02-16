import styled, { css } from 'styled-components';

export const bigBtnStyles = css`
  font-size: 20px;
  padding: 10px;
`;

export const mainBtnStyles = css`
  font-size: 20px;
  background: linear-gradient(79deg, #c32e16, #e93519);
  padding: 20px 32px;
  color: rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(60, 18, 6, 0.16);
  text-transform: uppercase;
  border: 1px solid transparent;
`;

export default styled.button`
  display: block;
  font-size: 1em;
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
