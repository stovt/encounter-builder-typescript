import { connect } from 'react-redux';
import { State, Dispatch } from 'shared/types';
import { Monster } from 'shared/types/monsters';
import { setMonsterQTY } from '../EncounterBuilder.actions';
import { getGroups } from '../EncounterBuilder.selectors';
import EncounterInfo from './EncounterInfo.component';

const mapStateToProps = (state: State) => ({
  groups: getGroups(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMonsterQTY: (monster: Monster, qty: number) => dispatch(setMonsterQTY(monster, qty))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EncounterInfo);
