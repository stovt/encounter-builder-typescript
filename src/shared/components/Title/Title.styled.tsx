import styled, { css } from 'styled-components';

const centerStyles = css`
  text-align: center;
`;

export default styled.h2<{ center?: boolean }>`
  margin: 0;
  margin-bottom: ${props => props.theme.margins.medium};
  font-size: ${props => props.theme.fontSize.title};
  font-weight: normal;
  line-height: 1;
  ${props => props.center && centerStyles}
`;
