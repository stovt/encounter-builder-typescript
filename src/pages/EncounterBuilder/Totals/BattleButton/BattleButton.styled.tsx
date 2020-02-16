import styled from 'styled-components';
import { StyledButton, bigBtnStyles, mainBtnStyles } from 'shared/components/forms';
import { NavLink } from 'react-router-dom';

export default styled(StyledButton.withComponent(NavLink))`
  ${mainBtnStyles}
`;
