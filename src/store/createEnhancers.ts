import { applyMiddleware, compose } from 'redux';
import routerMiddleware from './middleware/routerMiddleware';
import sagaMiddleware from './middleware/sagaMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(applyMiddleware(routerMiddleware, sagaMiddleware));
