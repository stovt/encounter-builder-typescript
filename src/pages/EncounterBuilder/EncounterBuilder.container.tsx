import withSaga from 'shared/HOC/withSaga';
import sagas from './EncounterBuilder.sagas';
import EncounterBuilderComponent from './EncounterBuilder.component';

export default withSaga(sagas)(EncounterBuilderComponent);
