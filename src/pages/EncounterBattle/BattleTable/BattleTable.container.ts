import { connect } from 'react-redux';
import { State, Dispatch } from 'shared/types';
import { showModal } from 'shared/components/Modal/Modal.actions';
import { getTurn } from '../EncounterBattle.selectors';
import { setMonsterHP } from '../EncounterBattle.actions';
import BattleTable from './BattleTable.component';

const mapStateToProps = (state: State) => ({
  turn: getTurn(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMonsterHP: (rowID: string, hp: number) => dispatch(setMonsterHP(rowID, hp)),
  showModal: (modalId: string, data: { monsterID: string }) => dispatch(showModal(modalId, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleTable);
