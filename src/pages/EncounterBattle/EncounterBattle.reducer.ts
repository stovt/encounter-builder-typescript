import v4 from 'uuid/v4';
import { EncounterBattle } from 'shared/types/encounterBattle';
import { Monster, BattleMonsterRow, BattleMonsterRows } from 'shared/types/monsters';
import { Action } from 'shared/types';
import { SET_MONSTER_QTY } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import { getInitiative } from './EncounterBattle.helpers';
import {
  ADD_MONSTER_TO_BATTLE_TABLE,
  SET_MONSTER_HP,
  SET_MONSTER_STATE,
  NEXT_TURN
} from './EncounterBattle.actions';

const modifyMonsterData = (monster: Monster): BattleMonsterRow => ({
  rowID: v4(),
  monster: {
    ...monster,
    initiative: getInitiative(monster.dexterity),
    state: []
  }
});

const initialState: EncounterBattle = {
  monsters: [],
  turn: 0,
  battleStarted: false
};

const encounterBattleReducer = (
  state: EncounterBattle = initialState,
  action: Action
): EncounterBattle => {
  switch (action.type) {
    case ADD_MONSTER_TO_BATTLE_TABLE: {
      const newMonstersState: BattleMonsterRows = [
        ...state.monsters,
        modifyMonsterData(action.monster)
      ].sort((a, b) => b.monster.initiative - a.monster.initiative);

      if (!state.monsters.length || !state.battleStarted) {
        return {
          ...state,
          monsters: newMonstersState
        };
      }

      const newTurn = newMonstersState.findIndex(d => d.rowID === state.monsters[state.turn].rowID);
      return {
        ...state,
        monsters: newMonstersState,
        turn: newTurn
      };
    }
    case SET_MONSTER_QTY: {
      if (!state.monsters.length) return state;

      const { monster, qty } = action;

      const monsters: BattleMonsterRows = state.monsters.filter(
        data => data.monster.id === monster.id
      );
      if (!monsters.length) return state;

      let newMonstersState: BattleMonsterRows;
      if (qty > monsters.length) {
        newMonstersState = [...state.monsters, modifyMonsterData(monster)].sort(
          (a, b) => b.monster.initiative - a.monster.initiative
        );
      } else {
        newMonstersState = [
          ...state.monsters.slice(
            0,
            state.monsters.findIndex(data => data.monster.id === monster.id)
          ),
          ...state.monsters.slice(
            state.monsters.findIndex(data => data.monster.id === monster.id) + 1
          )
        ].sort((a, b) => b.monster.initiative - a.monster.initiative);
      }

      if (!state.battleStarted) {
        return {
          ...state,
          monsters: newMonstersState
        };
      }

      const newTurn = newMonstersState.findIndex(d => d.rowID === state.monsters[state.turn].rowID);
      return {
        ...state,
        monsters: newMonstersState,
        turn: newTurn !== -1 ? newTurn : state.turn
      };
    }
    case SET_MONSTER_HP: {
      const { rowID, hp } = action;

      const monsterData = state.monsters.find(data => data.rowID === rowID);

      if (monsterData) {
        return {
          ...state,
          monsters: [
            ...state.monsters.slice(0, state.monsters.findIndex(m => m.rowID === rowID)),
            {
              rowID,
              monster: {
                ...monsterData.monster,
                // eslint-disable-next-line @typescript-eslint/camelcase
                hit_points: hp
              }
            },
            ...state.monsters.slice(state.monsters.findIndex(m => m.rowID === rowID) + 1)
          ]
        };
      }
      return state;
    }
    case SET_MONSTER_STATE: {
      const { rowID, state: monsterState } = action;

      const monsterData = state.monsters.find(data => data.rowID === rowID);

      if (monsterData) {
        return {
          ...state,
          monsters: [
            ...state.monsters.slice(0, state.monsters.findIndex(m => m.rowID === rowID)),
            {
              rowID,
              monster: {
                ...monsterData.monster,
                state: monsterState
              }
            },
            ...state.monsters.slice(state.monsters.findIndex(m => m.rowID === rowID) + 1)
          ]
        };
      }
      return state;
    }
    case NEXT_TURN:
      return {
        ...state,
        turn: state.turn === state.monsters.length - 1 ? 0 : state.turn + 1,
        battleStarted: true
      };
    default:
      return state;
  }
};

export default encounterBattleReducer;
