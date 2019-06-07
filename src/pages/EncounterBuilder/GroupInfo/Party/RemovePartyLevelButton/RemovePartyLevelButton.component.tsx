import * as React from 'react';
import { EncounterBuilderAction } from 'shared/types/encounterBuilder';
import { IconWrapper, RemoveIcon } from 'shared/components/Icons';
import StyledRemovePartyLevelButton from './RemovePartyLevelButton.styled';

interface Props {
  removePartyLevel: (id: string) => EncounterBuilderAction;
  id: string;
}

const RemovePartyLevelButton: React.FC<Props> = ({ removePartyLevel, id }) => {
  const handleOnClick = React.useCallback(() => {
    removePartyLevel(id);
  }, [removePartyLevel, id]);

  return (
    <StyledRemovePartyLevelButton type='button' onClick={handleOnClick}>
      <IconWrapper>
        <RemoveIcon />
      </IconWrapper>
    </StyledRemovePartyLevelButton>
  );
};

export default RemovePartyLevelButton;
