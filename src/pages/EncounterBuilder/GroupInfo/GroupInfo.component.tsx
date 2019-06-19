import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import StyledTitle from 'shared/components/Title';
import { usePartyLevelsSelector, useGroupsSelector } from '../EncounterBuilder.selectors';
import Party from './Party';
import TotalPartyLevels from './TotalPartyLevels';
import StyledGroupInfo from './GroupInfo.styled';

const GroupInfo: React.FC = () => {
  const partyLevels = usePartyLevelsSelector();
  const groups = useGroupsSelector();

  return (
    <StyledGroupInfo>
      <div>
        <StyledTitle>
          <FormattedMessage id='group-info.title' />
        </StyledTitle>
        <Party partyLevels={partyLevels} />
      </div>
      <TotalPartyLevels partyLevels={partyLevels} groups={groups} />
    </StyledGroupInfo>
  );
};

export default GroupInfo;
