import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'shared/types';
import { Breakpoint } from 'shared/types/breakpoints';
import { breakpointChange } from './BreakpointListener.actions';
import BreakpointListener from './BreakpointListener.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  breakpointChange: (breakpoint: Breakpoint, matches: boolean) =>
    dispatch(breakpointChange(breakpoint, matches))
});

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(BreakpointListener) as React.ComponentType<any>;
