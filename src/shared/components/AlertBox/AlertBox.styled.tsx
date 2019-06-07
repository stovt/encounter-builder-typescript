import styled from 'styled-components';

export default styled.div`
  width: 100%;
  padding: ${props => props.theme.paddings.small};
  text-align: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.error};
`;
