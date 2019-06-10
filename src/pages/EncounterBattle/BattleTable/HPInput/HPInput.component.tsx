import * as React from 'react';
import { EncounterBattleAction } from 'shared/types/encounterBattle';
import { StyledInput } from 'shared/components/forms';

type Value = string | number;

interface Props {
  value: Value;
  rowID: string;
  setMonsterHP: (rowID: string, hp: number) => EncounterBattleAction;
}

const HPInput: React.FC<Props> = ({ value, rowID, setMonsterHP }) => {
  const [val, setVal] = React.useState<Value>(value);

  React.useEffect(() => {
    setVal(value);
  }, [value]);

  // eslint-disable-next-line no-new-func
  const handleEval = React.useCallback((v: Value) => Number(new Function(`return ${v}`)()), []);

  const handleSetMonsterHP = React.useCallback(
    (hp: string | number): void => {
      setMonsterHP(rowID, Number(hp));
    },
    [rowID, setMonsterHP]
  );

  const handleOnChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[\s\d()+\-*/.]*$/.test(e.target.value)) setVal(e.target.value);
  }, []);

  const handleOnBlur = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        handleSetMonsterHP(handleEval(e.target.value));
      } catch {
        handleSetMonsterHP(value);
      }
    },
    [handleEval, handleSetMonsterHP, value]
  );

  return <StyledInput onChange={handleOnChange} onBlur={handleOnBlur} value={val} />;
};

export default HPInput;
