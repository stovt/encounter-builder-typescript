import * as React from 'react';
import { CloseIcon } from 'shared/components/Icons';
import StyledCloseButton from './CloseButton.styled';

const CloseButton: React.FC<Record<string, any>> = props => (
  <StyledCloseButton size={16} {...props}>
    <CloseIcon width={10} height={10} />
  </StyledCloseButton>
);

export default CloseButton;
