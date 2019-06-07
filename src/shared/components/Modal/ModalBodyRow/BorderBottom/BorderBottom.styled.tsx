import styled from 'styled-components';

interface Props {
  right: number;
  opacity: number;
}

export default styled.div<Props>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: ${props => props.right}px;
  height: 6px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
  opacity: ${props => props.opacity};
`;
