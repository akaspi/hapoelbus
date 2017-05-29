import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './components/root';

import * as config from 'config';
import * as clientDB from './utils/clientDB';

clientDB.initialize(config.firebase);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/root', () => {
    render(Root)
  });
}