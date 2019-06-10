import styled from 'styled-components';
import { StyledButton, bigBtnStyles } from 'shared/components/forms';
import { Link } from 'react-router-dom';

export default styled(StyledButton.withComponent(Link))`
  ${bigBtnStyles}
`;
