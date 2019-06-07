import * as React from 'react';
import { EncounterBuilderAction } from 'shared/types/encounterBuilder';
import { Monster } from 'shared/types/monsters';
import { MinusIcon, PlusIcon } from 'shared/components/Icons';
import StyledWrapper from './Wrapper';
import StyledButton from './Button';
import StyledInput from './Input.styled';

interface Props {
  monsterID: string;
  qty: number;
  getMonsterById: (monsterID: string) => Monster | undefined;
  setMonsterQTY: (monster: Monster, qty: number) => EncounterBuilderAction;
}

const Input: React.FC<Props> = ({ monsterID, qty, getMonsterById, setMonsterQTY }) => {
  const handleOnClickMinus = React.useCallback(() => {
    const monster = getMonsterById(monsterID);
    if (monster) setMonsterQTY(monster, qty - 1);
  }, [monsterID, qty, getMonsterById, setMonsterQTY]);

  const handleOnClickPlus = React.useCallback(() => {
    const monster = getMonsterById(monsterID);
    if (monster) setMonsterQTY(monster, qty + 1);
  }, [monsterID, qty, getMonsterById, setMonsterQTY]);

  return (
    <StyledWrapper>
      <StyledButton left onClick={handleOnClickMinus}>
        <MinusIcon size={12} />
      </StyledButton>
      <StyledInput type='text' value={qty} readOnly />
      <StyledButton right onClick={handleOnClickPlus}>
        <PlusIcon size={12} />
      </StyledButton>
    </StyledWrapper>
  );
};

export default Input;
