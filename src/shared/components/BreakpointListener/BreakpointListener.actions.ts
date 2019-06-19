import { useDispatch } from 'react-redux';
import { BreakpointsAction, Breakpoint } from 'shared/types/breakpoints';

export const BREAKPOINT_CHANGE = 'breakpoints/CHANGE';

export const breakpointChange = (breakpoint: Breakpoint, matches: boolean): BreakpointsAction => ({
  type: BREAKPOINT_CHANGE,
  breakpoint,
  matches
});

export const useBreakpointChangeDispatch = () => {
  const dispatch = useDispatch();
  return (breakpoint: Breakpoint, matches: boolean) =>
    dispatch(breakpointChange(breakpoint, matches));
};
