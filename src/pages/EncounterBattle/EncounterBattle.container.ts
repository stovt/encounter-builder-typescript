import { connect } from 'react-redux';
import { State } from 'shared/types';
import { getMonsters } from './EncounterBattle.selectors';
import EncounterBattle from './EncounterBattle.component';

const mapStateToProps = (state: State) => ({
  monsters: getMonsters(state)
});

export default connect(mapStateToProps)(EncounterBattle);
