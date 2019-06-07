import { EncounterBattleAction } from 'shared/types/encounterBattle';
import { Monster, MonsterState } from 'shared/types/monsters';

export const ADD_MONSTER_TO_BATTLE_TABLE = 'encounterBattle/ADD_MONSTER_TO_BATTLE_TABLE';
export const SET_MONSTER_HP = 'encounterBattle/SET_MONSTER_HP';
export const SET_MONSTER_STATE = 'encounterBattle/SET_MONSTER_STATE';
export const NEXT_TURN = 'encounterBattle/NEXT_TURN';

export const addMonsterToBattleTable = (monster: Monster): EncounterBattleAction => ({
  type: ADD_MONSTER_TO_BATTLE_TABLE,
  monster
});
export const setMonsterHP = (rowID: string, hp: number): EncounterBattleAction => ({
  type: SET_MONSTER_HP,
  rowID,
  hp
});

export const setMonsterState = (rowID: string, state: MonsterState): EncounterBattleAction => ({
  type: SET_MONSTER_STATE,
  rowID,
  state
});

export const nextTurn = (): EncounterBattleAction => ({
  type: NEXT_TURN
});
