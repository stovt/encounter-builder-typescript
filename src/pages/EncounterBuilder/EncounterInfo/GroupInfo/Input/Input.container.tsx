import { connect } from 'react-redux';
import { State } from 'shared/types';
import { getMonsterByID } from 'pages/EncounterBuilder/EncounterBuilder.selectors';
import Input from './Input.component';

const mapStateToProps = (state: State) => ({
  getMonsterById: (monsterID: string) => getMonsterByID(state, monsterID)
});

export default connect(mapStateToProps)(Input);
