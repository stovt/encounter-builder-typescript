import * as React from 'react';
import { IconWrapper, RemoveIcon } from 'shared/components/Icons';
import { useRemovePartyLevelDispatch } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import StyledRemovePartyLevelButton from './RemovePartyLevelButton.styled';

interface Props {
  id: string;
}

const RemovePartyLevelButton: React.FC<Props> = ({ id }) => {
  const removePartyLevel = useRemovePartyLevelDispatch();

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
