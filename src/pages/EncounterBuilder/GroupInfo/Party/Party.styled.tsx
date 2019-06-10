import styled from 'styled-components';

export const StyledPartyWrapper = styled.div`
  display: flex;
`;

export const StyledParty = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: ${props => props.theme.margins.small};
  }
`;

export const StyledPartyItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  &:first-child {
    height: auto;
  }

  & + & {
    margin-top: ${props => props.theme.margins.small};
  }
`;
