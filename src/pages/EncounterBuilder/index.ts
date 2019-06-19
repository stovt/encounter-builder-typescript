import reducerRegistry from 'store/reducerRegistry';
import encounterBattleReducer from '../EncounterBattle/EncounterBattle.reducer';
import encounterBuilderReducer from './EncounterBuilder.reducer';

reducerRegistry.register('encounterBattle', encounterBattleReducer);
reducerRegistry.register('encounterBuilder', encounterBuilderReducer);

export { default } from './EncounterBuilder.component';
