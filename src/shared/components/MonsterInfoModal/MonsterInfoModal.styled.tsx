import styled from 'styled-components';

export default styled.div`
  font-size: 16px;
  padding: ${props => props.theme.paddings.large};

  & > div + div {
    margin-top: 15px;
  }
`;
