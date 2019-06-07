import * as React from 'react';
import { EncounterBuilderAction, Group } from 'shared/types/encounterBuilder';
import { Monster } from 'shared/types/monsters';
import { CR_INFO } from 'shared/constants';
import StyledMonsterName from './MonsterName';
import StyledMonsterDescription from './MonsterDescription';
import StyledGroupInfo from './GroupInfo.styled';
import Input from './Input';

interface Props {
  group: Group;
  setMonsterQTY: (monster: Monster, qty: number) => EncounterBuilderAction;
}

const GroupInfo: React.FC<Props> = ({ group: { monster, qty }, setMonsterQTY }) => (
  <StyledGroupInfo>
    <div>
      <StyledMonsterName>{monster.name}</StyledMonsterName>
      <StyledMonsterDescription
        cr={monster.challenge_rating}
        xp={CR_INFO[monster.challenge_rating].exp}
      />
    </div>
    <div>
      <Input monsterID={monster.id} setMonsterQTY={setMonsterQTY} qty={qty} />
    </div>
  </StyledGroupInfo>
);

export default GroupInfo;
