import styled from 'styled-components';

interface Props {
  open: boolean;
}

export default styled.ul<Props>`
  position: absolute;
  background: ${props => props.theme.colors.white};
  top: 100%;
  right: 0;
  display: ${props => (props.open ? 'block' : 'none')};
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: ${props => props.theme.paddings.small} 0;
  margin: 2px 0 0;
  list-style: none;
  border: 1px solid ${props => props.theme.colors.input.border};
  border-radius: 4px;
  box-shadow: 0 6px 12px ${props => props.theme.colors.btn.shadow};
`;
