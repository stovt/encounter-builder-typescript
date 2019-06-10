import {
  ADD_MONSTER_TO_BATTLE_TABLE,
  SET_MONSTER_HP,
  SET_MONSTER_STATE,
  NEXT_TURN
} from 'pages/EncounterBattle/EncounterBattle.actions';
import { BattleMonsterRows, Monster, MonsterState } from './monsters';

export interface EncounterBattle {
  monsters: BattleMonsterRows;
  turn: number;
  battleStarted: boolean;
}

export interface EncounterBattleState {
  encounterBattle: EncounterBattle;
}

export type EncounterBattleAction =
  | { type: typeof ADD_MONSTER_TO_BATTLE_TABLE; monster: Monster }
  | { type: typeof SET_MONSTER_HP; rowID: string; hp: number }
  | { type: typeof SET_MONSTER_STATE; rowID: string; state: MonsterState }
  | { type: typeof NEXT_TURN };
