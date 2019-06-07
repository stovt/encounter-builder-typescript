import styled from 'styled-components';

interface Props {
  bold?: boolean;
}

export default styled.li<Props>`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  &:last-child {
    margin-top: ${props => props.theme.margins.medium};
  }
`;
