import * as React from 'react';
import { IconWrapper, PlusIcon } from 'shared/components/Icons';
import { StyledButton } from 'shared/components/forms';
import { useAddMonsterToGroupDispatch } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import { useMonsterByIDSelector } from 'pages/EncounterBuilder/EncounterBuilder.selectors';

interface Props {
  monsterID: string;
}

const AddMonsterButton: React.FC<Props> = ({ monsterID }) => {
  const addMonsterToGroup = useAddMonsterToGroupDispatch();

  const monster = useMonsterByIDSelector(monsterID);

  const handleOnClick = React.useCallback(
    (e: React.SyntheticEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      addMonsterToGroup(monsterID, monster);
    },
    [addMonsterToGroup, monsterID, monster]
  );

  return (
    <StyledButton type='button' onClick={handleOnClick}>
      <IconWrapper>
        <PlusIcon />
      </IconWrapper>
    </StyledButton>
  );
};

export default AddMonsterButton;
