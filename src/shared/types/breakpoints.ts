import { BREAKPOINT_CHANGE } from 'shared/components/BreakpointListener/BreakpointListener.actions';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg';

export type Breakpoints = Record<'xs' | 'sm' | 'md' | 'lg', boolean>;

export interface BreakpointsState {
  breakpoints: Breakpoints;
}

export interface BreakpointsAction {
  type: typeof BREAKPOINT_CHANGE;
  breakpoint: Breakpoint;
  matches: boolean;
}
