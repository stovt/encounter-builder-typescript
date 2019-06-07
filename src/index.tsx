import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import store from './store/createStore';
import { history } from './store/middleware/routerMiddleware';
import LocaleProvider from './shared/components/Locale';
import BreakpointListener from './shared/components/BreakpointListener';
import { GlobalStyles, theme } from './styles';
import 'react-table/react-table.css';
import './table.css';
import App from './App';

const renderRoot = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider>
        <ThemeProvider theme={theme}>
          <BreakpointListener>
            <>
              <GlobalStyles />
              <App />
            </>
          </BreakpointListener>
        </ThemeProvider>
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  renderRoot
);
