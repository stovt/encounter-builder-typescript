import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { NODE_ENV, PUBLIC_URL } from 'config';

export const history = createBrowserHistory({
  basename: NODE_ENV === 'production' ? PUBLIC_URL : '/'
});

export default routerMiddleware(history);
