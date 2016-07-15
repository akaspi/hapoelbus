import React from 'react';
import template from './root.rt';

import { makeStore } from '../../redux/makeStore';

class Root extends React.Component {
  createStore() {
    return makeStore();
  }
  render() {
    return template.apply(this);
  }
}

module.exports = Root;