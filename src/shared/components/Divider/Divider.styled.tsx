import styled from 'styled-components';

export default styled.hr`
  border: 0;
  color: ${props => props.theme.colors.hr};
  background-color: ${props => props.theme.colors.hr};
  height: 1px;
  margin-top: 10px;
  margin-bottom: ${props => props.theme.margins.medium};
`;
