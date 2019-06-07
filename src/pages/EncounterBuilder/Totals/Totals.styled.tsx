import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;

  & div + div {
    margin-left: ${props => props.theme.margins.medium};
  }
`;
