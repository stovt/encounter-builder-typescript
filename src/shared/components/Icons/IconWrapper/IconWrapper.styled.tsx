import styled from 'styled-components';

export default styled.div<{ size?: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
  user-select: none;
`;
