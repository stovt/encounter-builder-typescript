import { useDispatch } from 'react-redux';
import { ErrorType } from 'shared/types';
import { EncounterBuilderAction } from 'shared/types/encounterBuilder';
import { MonstersBase, Monster } from 'shared/types/monsters';

export const FETCH_ALL_MONSTERS = 'encounterBuilder/FETCH_ALL_MONSTERS';
export const FETCH_ALL_MONSTERS_SUCCESS = 'encounterBuilder/FETCH_ALL_MONSTERS_SUCCESS';
export const FETCH_ALL_MONSTERS_ERROR = 'encounterBuilder/FETCH_ALL_MONSTERS_ERROR';
export const FETCH_MONSTER_BY_ID = 'encounterBuilder/FETCH_MONSTER_BY_ID';
export const FETCH_MONSTER_BY_ID_SUCCESS = 'encounterBuilder/FETCH_MONSTER_BY_ID_SUCCESS';
export const FETCH_MONSTER_BY_ID_ERROR = 'encounterBuilder/FETCH_MONSTER_BY_ID_ERROR';
export const SET_FILTERED_MONSTER_IDS = 'encounterBuilder/SET_FILTERED_MONSTER_IDS';
export const ADD_PARTY_LEVEL = 'encounterBuilder/ADD_PARTY_LEVEL';
export const REMOVE_PARTY_LEVEL = 'encounterBuilder/REMOVE_PARTY_LEVEL';
export const SET_PARTY_LEVEL = 'encounterBuilder/SET_PARTY_LEVEL';
export const SET_PARTY_PLAYER_COUNT = 'encounterBuilder/SET_PARTY_PLAYER_COUNT';
export const ADD_MONSTER_TO_GROUP = 'encounterBuilder/ADD_MONSTER_TO_GROUP';
export const ADD_MONSTER_TO_GROUP_SUCCESS = 'encounterBuilder/ADD_MONSTER_TO_GROUP_SUCCESS';
export const SET_MONSTER_QTY = 'encounterBuilder/SET_MONSTER_QTY';

export const fetchAllMonsters = (): EncounterBuilderAction => ({ type: FETCH_ALL_MONSTERS });
export const fetchAllMonstersSuccess = (monsters: MonstersBase): EncounterBuilderAction => ({
  type: FETCH_ALL_MONSTERS_SUCCESS,
  monsters
});
export const fetchAllMonstersError = (error: ErrorType): EncounterBuilderAction => ({
  type: FETCH_ALL_MONSTERS_ERROR,
  error
});
export const fetchMonsterByID = (monsterID: string): EncounterBuilderAction => ({
  type: FETCH_MONSTER_BY_ID,
  monsterID
});
export const fetchMonsterByIDSuccess = (monster: Monster): EncounterBuilderAction => ({
  type: FETCH_MONSTER_BY_ID_SUCCESS,
  monster
});
export const fetchMonsterByIDError = (error: ErrorType): EncounterBuilderAction => ({
  type: FETCH_MONSTER_BY_ID_ERROR,
  error
});
export const setFilteredMonsterIDs = (IDs: string[]): EncounterBuilderAction => ({
  type: SET_FILTERED_MONSTER_IDS,
  IDs
});
export const addPartyLevel = (): EncounterBuilderAction => ({
  type: ADD_PARTY_LEVEL
});
export const removePartyLevel = (id: string): EncounterBuilderAction => ({
  type: REMOVE_PARTY_LEVEL,
  id
});
export const setPartyLevel = (value: number, id: string): EncounterBuilderAction => ({
  type: SET_PARTY_LEVEL,
  value,
  id
});
export const setPartyPlayerCount = (value: number, id: string): EncounterBuilderAction => ({
  type: SET_PARTY_PLAYER_COUNT,
  value,
  id
});
export const addMonsterToGroup = (
  monsterID: string,
  monster: Monster | undefined
): EncounterBuilderAction => ({
  type: ADD_MONSTER_TO_GROUP,
  monsterID,
  monster: monster || null
});
export const addMonsterToGroupSuccess = (monsterID: string): EncounterBuilderAction => ({
  type: ADD_MONSTER_TO_GROUP_SUCCESS,
  monsterID
});
export const setMonsterQTY = (monster: Monster, qty: number): EncounterBuilderAction => ({
  type: SET_MONSTER_QTY,
  monster,
  qty
});

export const useFetchAllMonstersDispatch = () => {
  const dispatch = useDispatch();
  return () => dispatch(fetchAllMonsters());
};
export const useFetchAllMonstersSuccessDispatch = () => {
  const dispatch = useDispatch();
  return (monsters: MonstersBase) => dispatch(fetchAllMonstersSuccess(monsters));
};
export const useFetchAllMonstersErrorDispatch = () => {
  const dispatch = useDispatch();
  return (error: ErrorType) => dispatch(fetchAllMonstersError(error));
};
export const useFetchMonsterByIDDispatch = () => {
  const dispatch = useDispatch();
  return (monsterID: string) => dispatch(fetchMonsterByID(monsterID));
};
export const useFetchMonsterByIDSuccessDispatch = () => {
  const dispatch = useDispatch();
  return (monster: Monster) => dispatch(fetchMonsterByIDSuccess(monster));
};
export const useFetchMonsterByIDErrorDispatch = () => {
  const dispatch = useDispatch();
  return (error: ErrorType) => dispatch(fetchMonsterByIDError(error));
};
export const useSetFilteredMonsterIDsDispatch = () => {
  const dispatch = useDispatch();
  return (IDs: string[]) => dispatch(setFilteredMonsterIDs(IDs));
};
export const useAddPartyLevelDispatch = () => {
  const dispatch = useDispatch();
  return () => dispatch(addPartyLevel());
};
export const useRemovePartyLevelDispatch = () => {
  const dispatch = useDispatch();
  return (id: string) => dispatch(removePartyLevel(id));
};
export const useSetPartyLevelDispatch = () => {
  const dispatch = useDispatch();
  return (value: number, id: string) => dispatch(setPartyLevel(value, id));
};
export const useSetPartyPlayerCountDispatch = () => {
  const dispatch = useDispatch();
  return (value: number, id: string) => dispatch(setPartyPlayerCount(value, id));
};
export const useAddMonsterToGroupDispatch = () => {
  const dispatch = useDispatch();
  return (monsterID: string, monster: Monster | undefined) =>
    dispatch(addMonsterToGroup(monsterID, monster));
};
export const useAddMonsterToGroupSuccessDispatch = () => {
  const dispatch = useDispatch();
  return (monsterID: string) => dispatch(addMonsterToGroupSuccess(monsterID));
};
export const useSetMonsterQTYDispatch = () => {
  const dispatch = useDispatch();
  return (monster: Monster, qty: number) => dispatch(setMonsterQTY(monster, qty));
};
