import { useSelector } from 'react-redux';
import { State, ErrorType } from 'shared/types';
import { PartyLevels, Groups } from 'shared/types/encounterBuilder';
import { MonstersBase, Monster, Monsters } from 'shared/types/monsters';

export const useMonstersSelector = () =>
  useSelector<State, MonstersBase>(state => state.encounterBuilder.monsters);
export const useLoadedMonstersSelector = () =>
  useSelector<State, Monsters>(state =>
    state.encounterBuilder ? state.encounterBuilder.loadedMonsters : []
  );
export const useMonsterByIDSelector = (monsterID: string) =>
  useSelector<State, Monster | undefined>(state =>
    state.encounterBuilder
      ? state.encounterBuilder.loadedMonsters.find(monster => monster.id === monsterID)
      : undefined
  );
export const useMonsterLoadingSelector = () =>
  useSelector<State, boolean>(state =>
    state.encounterBuilder ? state.encounterBuilder.monsterLoading : false
  );
export const useMonsterErrorSelector = () =>
  useSelector<State, ErrorType | null>(state =>
    state.encounterBuilder ? state.encounterBuilder.monsterError : null
  );
export const useLoadingSelector = () =>
  useSelector<State, boolean>(state => state.encounterBuilder.loading);
export const useErrorSelector = () =>
  useSelector<State, ErrorType | null>(state => state.encounterBuilder.error);
export const usePartyLevelsSelector = () =>
  useSelector<State, PartyLevels>(state => state.encounterBuilder.partyLevels);
export const useGroupsSelector = () =>
  useSelector<State, Groups>(state => state.encounterBuilder.groups);
