import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: ${props => props.theme.margins.large};
  }

  & > div + div {
    margin-left: ${props => props.theme.margins.medium};
  }
`;
