import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { useNextTurnDispatch } from 'pages/EncounterBattle/EncounterBattle.actions';
import StyledNextTurnButton from './NextTurnButton.styled';

const NextTurnButton: React.FC = () => {
  const nextTurn = useNextTurnDispatch();

  const handleNextTurn = React.useCallback(() => nextTurn(), [nextTurn]);

  return (
    <StyledNextTurnButton onClick={handleNextTurn}>
      <FormattedMessage id='encounter-battle.next-turn' />
    </StyledNextTurnButton>
  );
};

export default NextTurnButton;
