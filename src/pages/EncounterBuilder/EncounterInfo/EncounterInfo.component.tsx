import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import StyledTitle from 'shared/components/Title';
import { useGroupsSelector } from '../EncounterBuilder.selectors';
import GroupInfo from './GroupInfo';

const EncounterInfo: React.FC = () => {
  const groups = useGroupsSelector();
  return (
    <div>
      <StyledTitle>
        {' '}
        <FormattedMessage id='encounter-info.title' />
      </StyledTitle>{' '}
      {!groups.length ? (
        <div>
          {' '}
          <FormattedMessage id='encounter-info.empty-groups-message' />
        </div>
      ) : (
        groups.map(group => <GroupInfo key={group.monster.id} group={group} />)
      )}
    </div>
  );
};

export default EncounterInfo;
