import v4 from 'uuid/v4';
import { EncounterBuilder } from 'shared/types/encounterBuilder';
import { Action } from 'shared/types';
import { PLAYER_LEVELS } from 'shared/constants';
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
} from './EncounterBuilder.actions';
import { DEFAULT_PARTY_LEVELS, NEW_PARTY_LEVEL } from './EncounterBuilder.constants';

const initialState: EncounterBuilder = {
  monsters: [],
  loadedMonsters: [],
  monsterLoading: false,
  monsterError: null,
  loading: false,
  error: null,
  partyLevels: DEFAULT_PARTY_LEVELS,
  groups: []
};

const encounterBuilderReducer = (
  state: EncounterBuilder = initialState,
  action: Action
): EncounterBuilder => {
  switch (action.type) {
    case FETCH_ALL_MONSTERS:
      return {
        ...state,
        monsters: [],
        loading: true,
        error: null
      };
    case FETCH_ALL_MONSTERS_SUCCESS:
      return {
        ...state,
        monsters: action.monsters,
        loading: false,
        error: null
      };
    case FETCH_ALL_MONSTERS_ERROR:
      return {
        ...state,
        monsters: [],
        loading: false,
        error: action.error
      };
    case FETCH_MONSTER_BY_ID:
    case ADD_MONSTER_TO_GROUP:
      return {
        ...state,
        monsterLoading: true,
        monsterError: null
      };
    case FETCH_MONSTER_BY_ID_SUCCESS:
      return {
        ...state,
        loadedMonsters: [...state.loadedMonsters, action.monster],
        monsterLoading: false,
        monsterError: null
      };
    case FETCH_MONSTER_BY_ID_ERROR:
      return {
        ...state,
        monsterLoading: false,
        monsterError: action.error
      };
    case ADD_PARTY_LEVEL:
      return {
        ...state,
        partyLevels: [
          ...state.partyLevels,
          {
            id: v4(),
            ...NEW_PARTY_LEVEL
          }
        ]
      };
    case REMOVE_PARTY_LEVEL: {
      const { id } = action;
      return {
        ...state,
        partyLevels: [
          ...state.partyLevels.slice(0, state.partyLevels.findIndex(p => p.id === id)),
          ...state.partyLevels.slice(state.partyLevels.findIndex(p => p.id === id) + 1)
        ]
      };
    }
    case SET_PARTY_LEVEL: {
      const { id, value } = action;
      return {
        ...state,
        partyLevels: [
          ...state.partyLevels.slice(0, state.partyLevels.findIndex(p => p.id === id)),
          {
            id,
            level: PLAYER_LEVELS[value],
            playerCount:
              state.partyLevels[state.partyLevels.findIndex(p => p.id === id)].playerCount
          },
          ...state.partyLevels.slice(state.partyLevels.findIndex(p => p.id === id) + 1)
        ]
      };
    }
    case SET_PARTY_PLAYER_COUNT: {
      const { id, value } = action;
      return {
        ...state,
        partyLevels: [
          ...state.partyLevels.slice(0, state.partyLevels.findIndex(p => p.id === id)),
          {
            id,
            level: state.partyLevels[state.partyLevels.findIndex(p => p.id === id)].level,
            playerCount: value
          },
          ...state.partyLevels.slice(state.partyLevels.findIndex(p => p.id === id) + 1)
        ]
      };
    }
    case ADD_MONSTER_TO_GROUP_SUCCESS: {
      const { monsterID } = action;
      const monsterIndexInGroup = state.groups.findIndex(g => g.monster.id === monsterID);
      if (monsterIndexInGroup === -1) {
        const monster = state.monsters.find(m => m.id === monsterID);
        if (monster) {
          return {
            ...state,
            groups: [
              ...state.groups,
              {
                qty: 1,
                monster
              }
            ],
            monsterLoading: false
          };
        }
        return { ...state, monsterLoading: false };
      }
      return {
        ...state,
        groups: [
          ...state.groups.slice(0, monsterIndexInGroup),
          {
            ...state.groups[monsterIndexInGroup],
            qty: state.groups[monsterIndexInGroup].qty + 1
          },
          ...state.groups.slice(monsterIndexInGroup + 1)
        ],
        monsterLoading: false
      };
    }
    case SET_MONSTER_QTY: {
      const { monster, qty } = action;
      const monsterIndexInGroup = state.groups.findIndex(g => g.monster.id === monster.id);
      if (qty === 0) {
        return {
          ...state,
          groups: [
            ...state.groups.slice(0, monsterIndexInGroup),
            ...state.groups.slice(monsterIndexInGroup + 1)
          ]
        };
      }
      return {
        ...state,
        groups: [
          ...state.groups.slice(0, monsterIndexInGroup),
          {
            ...state.groups[monsterIndexInGroup],
            qty
          },
          ...state.groups.slice(monsterIndexInGroup + 1)
        ]
      };
    }
    default:
      return state;
  }
};

export default encounterBuilderReducer;
