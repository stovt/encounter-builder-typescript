import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ROUTES } from 'shared/constants';
import StyledWrapper from './Wrapper';
import StyledBattleButton from './BattleButton.styled';

const BattleButton: React.FC = () => (
  <StyledWrapper>
    <StyledBattleButton to={ROUTES.ENCOUNTER_BATTLE}>
      <FormattedMessage id='encounter-info.battle-btn' />
    </StyledBattleButton>
  </StyledWrapper>
);

export default BattleButton;
