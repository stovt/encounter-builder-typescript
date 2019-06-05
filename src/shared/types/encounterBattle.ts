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
  | { type: 'encounterBattle/ADD_MONSTER_TO_BATTLE_TABLE'; monster: Monster }
  | { type: 'encounterBattle/SET_MONSTER_HP'; rowID: string; hp: number }
  | { type: 'encounterBattle/SET_MONSTER_STATE'; rowID: string; state: MonsterState }
  | { type: 'encounterBattle/NEXT_TURN' };
