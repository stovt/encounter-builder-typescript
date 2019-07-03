import styled from 'styled-components';

export default styled.li`
  margin: 0;
  padding: ${props => props.theme.paddings.small} ${props => props.theme.paddings.medium};
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }
`;
