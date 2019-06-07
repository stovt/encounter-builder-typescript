import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import { SIZES } from '../MonstersTable.constants';

interface Props {
  onChange: (value: any) => void;
  value: string;
  intl: InjectedIntl;
}

const SizeFilter: React.FC<Props> = ({ onChange, value, intl: { formatMessage } }) => {
  const handleChange = React.useCallback(
    e => {
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

export default injectIntl(SizeFilter);
