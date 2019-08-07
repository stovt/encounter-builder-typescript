import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Groups, PartyLevels } from 'shared/types/encounterBuilder';
import {
  getTotalExp,
  getAdjustedExp,
  getDifficulty,
  getTotalPlayerCount
} from 'pages/EncounterBuilder/EncounterBuilder.helpers';
import StyledTitle from './Title';
import StyledSubTitle from './SubTitle';
import StyledTotals from './Totals.styled';

interface Props {
  groups: Groups;
  partyLevels: PartyLevels;
}

const Totals: React.FC<Props> = ({ groups, partyLevels }) => {
  const { formatMessage } = useIntl();

  const totalPlayerCount = React.useMemo(() => getTotalPlayerCount(partyLevels), [partyLevels]);

  const totalExp = React.useMemo(() => getTotalExp(groups), [groups]);

  const totalExpPerPlayer = React.useMemo(() => Math.round(totalExp / totalPlayerCount), [
    totalExp,
    totalPlayerCount
  ]);

  const adjustedExp = React.useMemo(() => getAdjustedExp(groups, partyLevels), [
    groups,
    partyLevels
  ]);

  const adjustedExpPerPlayer = React.useMemo(() => Math.round(adjustedExp / totalPlayerCount), [
    adjustedExp,
    totalPlayerCount
  ]);

  const difficulty = React.useMemo(() => {
    const d = getDifficulty(groups, partyLevels);
    return d
      ? formatMessage({
          id: `group-info.party-levels.${d}`
        })
      : '';
  }, [formatMessage, groups, partyLevels]);

  return (
    <StyledTotals>
      <StyledTitle>
        <FormattedMessage id='encounter-info.difficulty' values={{ difficulty }} />
      </StyledTitle>
      <div>
        <StyledTitle className='text-right'>
          <FormattedMessage id='encounter-info.total-xp' values={{ exp: totalExp }} />
        </StyledTitle>
        <StyledSubTitle className='text-right'>
          <FormattedMessage
            id='encounter-info.exp-per-player'
            values={{ exp: totalExpPerPlayer }}
          />
        </StyledSubTitle>
        <StyledTitle className='text-right'>
          <FormattedMessage id='encounter-info.adjusted-xp' values={{ exp: adjustedExp }} />
        </StyledTitle>
        <StyledSubTitle className='text-right'>
          <FormattedMessage
            id='encounter-info.exp-per-player'
            values={{ exp: adjustedExpPerPlayer }}
          />
        </StyledSubTitle>
      </div>
    </StyledTotals>
  );
};

export default Totals;
