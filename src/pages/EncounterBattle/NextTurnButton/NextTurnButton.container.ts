import { connect } from 'react-redux';
import { Dispatch } from 'shared/types';
import { nextTurn } from 'pages/EncounterBattle/EncounterBattle.actions';
import NextTurnButton from './NextTurnButton.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  nextTurn: () => dispatch(nextTurn())
});

export default connect(
  null,
  mapDispatchToProps
)(NextTurnButton);
