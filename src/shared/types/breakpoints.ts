export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg';

export interface Breakpoints {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
}

export interface BreakpointsState {
  breakpoints: Breakpoints;
}

export interface BreakpointsAction {
  type: 'breakpoints/CHANGE';
  breakpoint: Breakpoint;
  matches: boolean;
}
