import { useSelector } from 'react-redux';
import { State } from 'shared/types';
import { Breakpoints } from 'shared/types/breakpoints';

export const useBreakpointsSelector = () =>
  useSelector<State, Breakpoints>(state => state.breakpoints);
