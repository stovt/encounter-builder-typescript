import styled from 'styled-components';

export const StyledPartyWrapper = styled.div`
  display: table;
  border-collapse: collapse;
`;

export const StyledParty = styled.div`
  display: table-row;

  & + & {
    border-top: 6px solid transparent;
  }
`;

export const StyledPartyItem = styled.div`
  display: table-cell;

  & + & {
    border-left: 6px solid transparent;
  }
`;
