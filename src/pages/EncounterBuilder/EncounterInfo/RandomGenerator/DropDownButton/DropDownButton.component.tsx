import * as React from 'react';
import { IconWrapper, ChevronDown } from 'shared/components/Icons';
import StyledDropDownButton from './DropDownButton.styled';

const DropDownButton: React.FC = props => (
  <StyledDropDownButton {...props}>
    <IconWrapper>
      <ChevronDown />
    </IconWrapper>
  </StyledDropDownButton>
);

export default DropDownButton;
