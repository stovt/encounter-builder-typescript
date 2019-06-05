import { combineReducers, createStore, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import { history } from './middleware/routerMiddleware';
import reducerRegistry, { NameReducerMap } from './reducerRegistry';
import enhancers from './createEnhancers';

reducerRegistry.register('router', connectRouter(history) as Reducer);
reducerRegistry.register('form', formReducer);

const initialState = {};

const combine = (reducers: NameReducerMap) => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state; // eslint-disable-line no-param-reassign
    }
  });
  return combineReducers(reducers);
};

const reducer = combine(reducerRegistry.getReducers());
const store = createStore(reducer, initialState, enhancers);

reducerRegistry.setChangeListener(reducers => {
  store.replaceReducer(combine(reducers));
});

export default store;
