import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import config from 'config';

const { NODE_ENV, PUBLIC_URL } = config;

export const history = createBrowserHistory({
  basename: NODE_ENV === 'production' ? PUBLIC_URL : '/'
});

export default routerMiddleware(history);
