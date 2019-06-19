import * as React from 'react';
import { MinusIcon, PlusIcon } from 'shared/components/Icons';
import { useSetMonsterQTYDispatch } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import { useMonsterByIDSelector } from 'pages/EncounterBuilder/EncounterBuilder.selectors';
import StyledWrapper from './Wrapper';
import StyledButton from './Button';
import StyledInput from './Input.styled';

interface Props {
  monsterID: string;
  qty: number;
}

const Input: React.FC<Props> = ({ monsterID, qty }) => {
  const setMonsterQTY = useSetMonsterQTYDispatch();

  const monster = useMonsterByIDSelector(monsterID);

  const handleOnClickMinus = React.useCallback(() => {
    if (monster) setMonsterQTY(monster, qty - 1);
  }, [monster, setMonsterQTY, qty]);

  const handleOnClickPlus = React.useCallback(() => {
    if (monster) setMonsterQTY(monster, qty + 1);
  }, [monster, setMonsterQTY, qty]);

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
