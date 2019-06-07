import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'shared/types';
import { getBreakpoints } from 'shared/components/BreakpointListener/BreakpointListener.selectors';

const mapStateToProps = (state: State) => ({
  breakpoints: getBreakpoints(state)
});

export default (WrappedComponent: React.FC) => {
  const wrappedComponent: React.FC = props => <WrappedComponent {...props} />;
  return connect(mapStateToProps)(wrappedComponent);
};
