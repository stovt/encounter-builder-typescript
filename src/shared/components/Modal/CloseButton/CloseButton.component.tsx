import * as React from 'react';
import { CloseIcon } from 'shared/components/Icons';
import StyledCloseButton from './CloseButton.styled';

interface Props {
  onClick: () => void;
}

const CloseButton: React.FC<Props> = props => (
  <StyledCloseButton size={16} {...props}>
    <CloseIcon width={10} height={10} />
  </StyledCloseButton>
);

export default CloseButton;
