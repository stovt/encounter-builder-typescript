import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { IconWrapper, PlusIcon } from 'shared/components/Icons';
import StyledAddPartyLevelButton from './AddPartyLevelButton.styled';

interface Props {
  onClick: () => void;
}

const AddPartyLevelButton: React.FC<Props> = props => (
  <StyledAddPartyLevelButton type='button' {...props}>
    <IconWrapper>
      <PlusIcon size={12} />
      <FormattedMessage id='group-info.add-another-level' />
    </IconWrapper>
  </StyledAddPartyLevelButton>
);

export default AddPartyLevelButton;
