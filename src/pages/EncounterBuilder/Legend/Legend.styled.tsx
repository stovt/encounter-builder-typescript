import styled from 'styled-components';

export default styled.ul`
  list-style: none;
  margin: 0 0 ${props => props.theme.margins.medium} 0;
  padding: 0;
  border: 1px solid ${props => props.theme.colors.hr};
`;
