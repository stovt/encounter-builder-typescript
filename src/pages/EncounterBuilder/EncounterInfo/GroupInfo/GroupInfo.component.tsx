import * as React from 'react';
import { Group } from 'shared/types/encounterBuilder';
import { CR_INFO } from 'shared/constants';
import StyledMonsterName from './MonsterName';
import StyledMonsterDescription from './MonsterDescription';
import StyledGroupInfo from './GroupInfo.styled';
import Input from './Input';

interface Props {
  group: Group;
}

const GroupInfo: React.FC<Props> = ({ group: { monster, qty } }) => (
  <StyledGroupInfo>
    <div>
      <StyledMonsterName>{monster.name}</StyledMonsterName>
      <StyledMonsterDescription
        cr={monster.challengeRating}
        xp={CR_INFO[monster.challengeRating].exp}
      />
    </div>
    <div>
      <Input monsterID={monster.id} qty={qty} />
    </div>
  </StyledGroupInfo>
);

export default GroupInfo;
