export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg';

export type Breakpoints = Record<'xs' | 'sm' | 'md' | 'lg', boolean>;

export interface BreakpointsState {
  breakpoints: Breakpoints;
}

export interface BreakpointsAction {
  type: 'breakpoints/CHANGE';
  breakpoint: Breakpoint;
  matches: boolean;
}
