import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { EncounterBuilderAction, Groups } from 'shared/types/encounterBuilder';
import { Monster } from 'shared/types/monsters';
import StyledTitle from 'shared/components/Title';
import GroupInfo from './GroupInfo';

interface Props {
  groups: Groups;
  setMonsterQTY: (monster: Monster, qty: number) => EncounterBuilderAction;
}

const EncounterInfo: React.FC<Props> = ({ groups, setMonsterQTY }) => (
  <div>
    <StyledTitle>
      <FormattedMessage id='encounter-info.title' />
    </StyledTitle>
    {!groups.length ? (
      <div>
        <FormattedMessage id='encounter-info.empty-groups-message' />
      </div>
    ) : (
      groups.map(group => (
        <GroupInfo key={group.monster.id} group={group} setMonsterQTY={setMonsterQTY} />
      ))
    )}
  </div>
);

export default EncounterInfo;
