import { Action } from 'shared/types';
import { Breakpoint, Breakpoints } from 'shared/types/breakpoints';
import { BREAKPOINT_CHANGE } from './BreakpointListener.actions';
import { MOBILE_BREAKPOINT_NAME } from './BreakpointListener.constants';
import { fromBreakpoints, getMediaQueryList } from './BreakpointListener.helpers';

const computeMobileBreakpointMatch = (state: Breakpoints): Breakpoints => ({
  ...state,
  [MOBILE_BREAKPOINT_NAME]: (Object.keys(state) as Breakpoint[])
    .filter(breakpoint => breakpoint !== MOBILE_BREAKPOINT_NAME)
    .every(breakpoint => !state[breakpoint])
});

const initialState: Breakpoints = computeMobileBreakpointMatch(
  fromBreakpoints((breakpoint: Breakpoint) => getMediaQueryList(breakpoint).matches)
);

const breakpointsReducer = (state: Breakpoints = initialState, action: Action): Breakpoints => {
  switch (action.type) {
    case BREAKPOINT_CHANGE:
      return computeMobileBreakpointMatch({
        ...state,
        [action.breakpoint]: action.matches
      });
    default:
      return state;
  }
};

export default breakpointsReducer;
