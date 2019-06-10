import {
  FETCH_ALL_MONSTERS,
  FETCH_ALL_MONSTERS_SUCCESS,
  FETCH_ALL_MONSTERS_ERROR,
  FETCH_MONSTER_BY_ID,
  FETCH_MONSTER_BY_ID_SUCCESS,
  FETCH_MONSTER_BY_ID_ERROR,
  ADD_PARTY_LEVEL,
  REMOVE_PARTY_LEVEL,
  SET_PARTY_LEVEL,
  SET_PARTY_PLAYER_COUNT,
  ADD_MONSTER_TO_GROUP,
  ADD_MONSTER_TO_GROUP_SUCCESS,
  SET_MONSTER_QTY
} from 'pages/EncounterBuilder/EncounterBuilder.actions';
import { ErrorType } from './index';
import { MonsterBase, MonstersBase, Monster, Monsters } from './monsters';

export interface PlayerLevel {
  level: number;
  budget: number;
  easy: number;
  medium: number;
  hard: number;
  deadly: number;
}
export type PlayerLevels = Record<number, PlayerLevel>;
export interface PartyLevel {
  id: string;
  level: PlayerLevel;
  playerCount: number;
}
export type PartyLevels = PartyLevel[];

export interface Group {
  qty: number;
  monster: MonsterBase;
}

export type Groups = Group[];

export interface EncounterBuilder {
  monsters: MonstersBase;
  loadedMonsters: Monsters;
  monsterLoading: boolean;
  monsterError: ErrorType | null;
  loading: boolean;
  error: ErrorType | null;
  partyLevels: PartyLevels;
  groups: Groups;
}

export interface EncounterBuilderState {
  encounterBuilder: EncounterBuilder;
}

export type EncounterBuilderAction =
  | { type: typeof FETCH_ALL_MONSTERS }
  | { type: typeof FETCH_ALL_MONSTERS_SUCCESS; monsters: MonstersBase }
  | { type: typeof FETCH_ALL_MONSTERS_ERROR; error: ErrorType }
  | { type: typeof FETCH_MONSTER_BY_ID; monsterID: string }
  | { type: typeof FETCH_MONSTER_BY_ID_SUCCESS; monster: Monster }
  | { type: typeof FETCH_MONSTER_BY_ID_ERROR; error: ErrorType }
  | { type: typeof ADD_PARTY_LEVEL }
  | { type: typeof REMOVE_PARTY_LEVEL; id: string }
  | { type: typeof SET_PARTY_LEVEL; value: number; id: string }
  | { type: typeof SET_PARTY_PLAYER_COUNT; value: number; id: string }
  | { type: typeof ADD_MONSTER_TO_GROUP; monsterID: string; monster: Monster | null }
  | { type: typeof ADD_MONSTER_TO_GROUP_SUCCESS; monsterID: string }
  | { type: typeof SET_MONSTER_QTY; monster: Monster; qty: number };
