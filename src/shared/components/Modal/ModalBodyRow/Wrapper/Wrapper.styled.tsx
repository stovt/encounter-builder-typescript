import styled from 'styled-components';

interface Props {
  scrollbarWidth: number;
}

export default styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-right: -${props => props.scrollbarWidth}px;
`;
