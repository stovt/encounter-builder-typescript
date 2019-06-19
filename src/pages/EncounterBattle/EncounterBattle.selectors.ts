import { useSelector } from 'react-redux';
import { State } from 'shared/types';
import { BattleMonsterRows } from 'shared/types/monsters';

export const useMonstersSelector = () =>
  useSelector<State, BattleMonsterRows>(state =>
    state.encounterBattle ? state.encounterBattle.monsters : []
  );
export const useTurnSelector = () =>
  useSelector<State, number>(state => state.encounterBattle.turn);
