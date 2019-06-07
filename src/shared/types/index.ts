import { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import { RouterRootState, RouterAction } from 'connected-react-router';
import { BreakpointsState, BreakpointsAction } from './breakpoints';
import { ModalsState, ModalsAction } from './modals';
import { EncounterBuilderState, EncounterBuilderAction } from './encounterBuilder';
import { EncounterBattleState, EncounterBattleAction } from './encounterBattle';

export type ErrorType = string;

export interface ReduxInitAction {
  type: '@@INIT';
}
export type State = RouterRootState &
  BreakpointsState &
  ModalsState &
  EncounterBuilderState &
  EncounterBattleState;
export type Action =
  | ReduxInitAction
  | RouterAction
  | BreakpointsAction
  | ModalsAction
  | EncounterBuilderAction
  | EncounterBattleAction;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
