import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import { TYPES } from '../MonstersTable.constants';

interface Props {
  onChange: (value: string) => void;
  value: string;
  intl: InjectedIntl;
}

const TypeFilter: React.FC<Props> = ({ onChange, value, intl: { formatMessage } }) => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const sortedTypes = React.useMemo(
    () =>
      TYPES.sort((type1, type2) => {
        const translatedType1 = formatMessage({ id: `monster.types.${type1}` });
        const translatedType2 = formatMessage({ id: `monster.types.${type2}` });
        if (translatedType1 < translatedType2) return -1;
        if (translatedType1 > translatedType2) return 1;
        return 0;
      }),
    [formatMessage]
  );

  return (
    <select onChange={handleChange} value={value}>
      <option value=''>{formatMessage({ id: 'table-labels.Any' })}</option>
      {sortedTypes.map(type => (
        <option value={type} key={type}>
          {formatMessage({ id: `monster.types.${type}` })}
        </option>
      ))}
    </select>
  );
};

export default injectIntl(TypeFilter);
