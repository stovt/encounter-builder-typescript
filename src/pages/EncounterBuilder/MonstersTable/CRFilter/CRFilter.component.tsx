import React from 'react';
import { useIntl } from 'react-intl';
import { CR_VALUES_STR, CR_VALUES_NUMB } from '../MonstersTable.constants';

interface Props {
  onChange: (value: { minCR: string; maxCR: string }) => void;
}

const CRFilter: React.FC<Props> = ({ onChange }) => {
  const [minCR, setMinCR] = React.useState<string>('');
  const [maxCR, setMaxCR] = React.useState<string>('');

  const { formatMessage } = useIntl();

  const handleChangeMin = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setMinCR(e.target.value);
      onChange({
        minCR: e.target.value,
        maxCR
      });
    },
    [onChange, maxCR]
  );

  const handleChangeMax = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setMaxCR(e.target.value);
      onChange({
        minCR,
        maxCR: e.target.value
      });
    },
    [onChange, minCR]
  );

  return (
    <div>
      <select onChange={handleChangeMin} value={minCR} style={{ width: '50%' }}>
        <option value=''>{formatMessage({ id: 'table-labels.min' })}</option>
        {CR_VALUES_NUMB.map((cr, index) => (
          <option value={cr} key={cr}>
            {CR_VALUES_STR[index]}
          </option>
        ))}
      </select>
      <select onChange={handleChangeMax} value={maxCR} style={{ width: '50%' }}>
        <option value=''>{formatMessage({ id: 'table-labels.max' })}</option>
        {CR_VALUES_NUMB.map((cr, index) => (
          <option value={cr} key={cr}>
            {CR_VALUES_STR[index]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CRFilter;
