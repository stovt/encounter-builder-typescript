import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { PartyLevels, Groups } from 'shared/types/encounterBuilder';
import { numberWithCommas } from 'shared/helpers';
import {
  getTotalPartyExpLevels,
  getDifficulty
} from 'pages/EncounterBuilder/EncounterBuilder.helpers';
import { PARTY_LEVEL_TYPES } from './TotalPartyLevels.constants';
import StyledTotalPartyLevelItem from './TotalPartyLevelItem';
import StyledTotalPartyLevels from './TotalPartyLevels.styled';

interface Props {
  partyLevels: PartyLevels;
  groups: Groups;
}

const TotalPartyLevels: React.FC<Props> = ({ partyLevels, groups }) => {
  const totalPartyExpLevels = React.useMemo(() => getTotalPartyExpLevels(partyLevels), [
    partyLevels
  ]);
  const difficulty = React.useMemo(() => getDifficulty(groups, partyLevels), [groups, partyLevels]);

  return (
    <StyledTotalPartyLevels>
      {PARTY_LEVEL_TYPES.map(type => (
        <StyledTotalPartyLevelItem key={type} bold={type === difficulty}>
          <FormattedMessage
            id={`group-info.party-levels.${type}-exp`}
            values={{ exp: numberWithCommas(totalPartyExpLevels[type]) }}
          />
        </StyledTotalPartyLevelItem>
      ))}
    </StyledTotalPartyLevels>
  );
};

export default TotalPartyLevels;
