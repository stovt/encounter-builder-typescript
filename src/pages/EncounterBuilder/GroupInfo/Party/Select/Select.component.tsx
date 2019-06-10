import * as React from 'react';
import { EncounterBuilderAction } from 'shared/types/encounterBuilder';
import { StyledSelect } from 'shared/components/forms';

interface Props {
  onChange: (value: number, id: string) => EncounterBuilderAction;
  value: number;
  maxValue: number;
  id: string;
}

const Select: React.FC<Props> = ({ onChange, value, maxValue, id }) => {
  const handleOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(Number(event.target.value), id);
    },
    [id, onChange]
  );

  const arraySequence: number[] = React.useMemo(
    () => Array.from(new Array(maxValue), (val: number, index) => index + 1),
    [maxValue]
  );

  return (
    <StyledSelect onChange={handleOnChange} value={value}>
      {arraySequence.map(val => (
        <option key={val} value={val}>
          {val}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
