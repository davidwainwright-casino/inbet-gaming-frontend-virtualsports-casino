import React from 'react';
// import { hot } from 'react-hot-loader/root';
// import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { Router } from 'react-router';
import App from './app';
import { createStores } from './app/stores';
import './app/utils/postMessage';

// configure({
//   enforceActions: 'strict',
// });

const { rootStore, history } = createStores();

export const Root = () => (
  <Provider {...rootStore}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);
