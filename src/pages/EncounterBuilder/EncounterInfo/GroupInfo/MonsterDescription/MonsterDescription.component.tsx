import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { numberWithCommas } from 'shared/helpers';
import StyledMonsterDescription from './MonsterDescription.styled';

interface Props {
  cr: string;
  xp: number;
}

const MonsterDescription: React.FC<Props> = ({ cr, xp }) => (
  <StyledMonsterDescription>
    <div>
      <FormattedMessage id='encounter-info.cr' values={{ cr }} />
    </div>
    <div>
      <FormattedMessage id='encounter-info.xp' values={{ xp: numberWithCommas(xp) }} />
    </div>
  </StyledMonsterDescription>
);

export default MonsterDescription;
