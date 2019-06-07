import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { EncounterBattleAction } from 'shared/types/encounterBattle';
import StyledNextTurnButton from './NextTurnButton.styled';

interface Props {
  nextTurn: () => EncounterBattleAction;
}

const NextTurnButton: React.FC<Props> = ({ nextTurn }) => (
  <StyledNextTurnButton onClick={nextTurn}>
    <FormattedMessage id='encounter-battle.next-turn' />
  </StyledNextTurnButton>
);

export default NextTurnButton;
