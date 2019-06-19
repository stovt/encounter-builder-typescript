import reducerRegistry from 'store/reducerRegistry';
import reducer from './BreakpointListener.reducer';

reducerRegistry.register('breakpoints', reducer);

export { default } from './BreakpointListener.component';
