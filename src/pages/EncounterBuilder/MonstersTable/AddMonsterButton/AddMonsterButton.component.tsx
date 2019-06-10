import * as React from 'react';
import { EncounterBuilderAction } from 'shared/types/encounterBuilder';
import { Monster } from 'shared/types/monsters';
import { IconWrapper, PlusIcon } from 'shared/components/Icons';
import { StyledButton } from 'shared/components/forms';

interface Props {
  monsterID: string;
  getMonsterById: (monsterID: string) => Monster | undefined;
  addMonsterToGroup: (monsterID: string, monster: Monster | undefined) => EncounterBuilderAction;
}

const AddMonsterButton: React.FC<Props> = ({ monsterID, getMonsterById, addMonsterToGroup }) => {
  const handleOnClick = React.useCallback(
    (e: React.SyntheticEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      addMonsterToGroup(monsterID, getMonsterById(monsterID));
    },
    [monsterID, getMonsterById, addMonsterToGroup]
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
