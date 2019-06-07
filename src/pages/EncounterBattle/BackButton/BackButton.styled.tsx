import styled from 'styled-components';
import { StyledButton, bigBtnStyles } from 'shared/components/forms';
import { NavLink } from 'react-router-dom';

export default styled(StyledButton.withComponent(NavLink))`
  ${bigBtnStyles}
`;
