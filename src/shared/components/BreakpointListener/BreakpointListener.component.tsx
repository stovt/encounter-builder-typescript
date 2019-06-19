import * as React from 'react';
import { Breakpoint } from 'shared/types/breakpoints';
import { fromBreakpoints, getMediaQueryList } from './BreakpointListener.helpers';
import { useBreakpointChangeDispatch } from './BreakpointListener.actions';

interface Props {
  children: React.ReactElement;
}

interface Listener {
  listener: ({ matches }: { matches: boolean }) => void;
  mql: MediaQueryList;
}

const BreakpointListener: React.FC<Props> = ({ children }) => {
  const listeners = React.useRef<Record<Breakpoint, Listener> | null>(null);

  const breakpointChange = useBreakpointChangeDispatch();

  React.useEffect(() => {
    listeners.current = fromBreakpoints(breakpoint => {
      const mql = getMediaQueryList(breakpoint);
      breakpointChange(breakpoint, mql.matches);
      const listener = ({ matches }: { matches: boolean }) => {
        breakpointChange(breakpoint, matches);
      };
      mql.addListener(listener);
      return {
        mql,
        listener
      };
    });
    return () => {
      if (listeners.current) {
        (Object.keys(listeners.current) as Breakpoint[]).forEach((breakpoint: Breakpoint) => {
          if (listeners.current) {
            const { mql, listener } = listeners.current[breakpoint];
            mql.removeListener(listener);
          }
        });
      }
    };
  }, [breakpointChange]);

  return children;
};

export default BreakpointListener;
