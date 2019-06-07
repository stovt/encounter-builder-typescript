import styled from 'styled-components';

export default styled.div`
  font-size: 16px;

  & > div + div {
    margin-top: 15px;
  }
`;
