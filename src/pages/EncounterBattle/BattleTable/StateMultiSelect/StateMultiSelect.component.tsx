import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import Select from 'react-select';
import { EncounterBattleAction } from 'shared/types/encounterBattle';
import { MonsterState } from 'shared/types/monsters';
import { MONSTER_STATES } from './StateMultiSelect.constants';
import { customStyles } from './StateMultiSelect.styled';
import MultiValueLabel from './MultiValueLabel';

interface Props {
  value: MonsterState;
  rowID: string;
  setMonsterState: (rowID: string, state: MonsterState) => EncounterBattleAction;
  intl: InjectedIntl;
}

const StateMultiSelect: React.FC<Props> = ({
  value,
  rowID,
  setMonsterState,
  intl: { formatMessage }
}) => {
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
