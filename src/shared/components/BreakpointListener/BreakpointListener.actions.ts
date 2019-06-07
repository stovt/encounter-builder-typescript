import { BreakpointsAction, Breakpoint } from 'shared/types/breakpoints';

export const BREAKPOINT_CHANGE = 'breakpoints/CHANGE';

export const breakpointChange = (breakpoint: Breakpoint, matches: boolean): BreakpointsAction => ({
  type: BREAKPOINT_CHANGE,
  breakpoint,
  matches
});
