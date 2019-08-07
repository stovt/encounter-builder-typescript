import * as React from 'react';
import { useIntl } from 'react-intl';
import { SIZES } from '../MonstersTable.constants';

interface Props {
  onChange: (value: string) => void;
  value: string;
}

const SizeFilter: React.FC<Props> = ({ onChange, value }) => {
  const { formatMessage } = useIntl();

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <select onChange={handleChange} value={value}>
      <option value=''>{formatMessage({ id: 'table-labels.Any' })}</option>
      {SIZES.map(size => (
        <option value={size} key={size}>
          {formatMessage({ id: `monster.sizes.${size}` })}
        </option>
      ))}
    </select>
  );
};

export default SizeFilter;
