import styled from 'styled-components';

interface Props {
  error: boolean;
}

const StyledTitle = styled.h3<Props>`
  margin: 0;
  padding: ${props => props.theme.paddings.large};
  font-size: 24px;
  color: ${props => (props.error ? '#e20000' : props.theme.colors.black)};
  font-weight: 900;
  text-align: center;
  background-color: ${props => props.theme.colors.legend.pair};
`;

export default StyledTitle;
