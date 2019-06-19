import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import Select from 'react-select';
import { MonsterState } from 'shared/types/monsters';
import { useSetMonsterStateDispatch } from 'pages/EncounterBattle/EncounterBattle.actions';
import { MONSTER_STATES } from './StateMultiSelect.constants';
import { customStyles } from './StateMultiSelect.styled';
import MultiValueLabel from './MultiValueLabel';

interface Props {
  value: MonsterState;
  rowID: string;
  intl: InjectedIntl;
}

const StateMultiSelect: React.FC<Props> = ({ value, rowID, intl: { formatMessage } }) => {
  const setMonsterState = useSetMonsterStateDispatch();

  const handleOnChange = React.useCallback(
    (val: MonsterState) => {
      setMonsterState(rowID, val);
    },
    [setMonsterState, rowID]
  );

  const options = React.useMemo(
    () =>
      MONSTER_STATES.map(state => ({
        label: formatMessage({ id: `monster.states.${state}` }),
        value: state
      })),
    [formatMessage]
  );

  return (
    <Select
      isMulti
      name='colors'
      options={options}
      components={{ MultiValueLabel }}
      onChange={handleOnChange as any}
      value={value}
      styles={customStyles}
      menuPortalTarget={document.body}
      placeholder={`${formatMessage({ id: 'monster.state' })}...`}
    />
  );
};

export default injectIntl(StateMultiSelect);
