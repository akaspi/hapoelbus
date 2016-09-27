import React from 'react';
import template from './root.rt';
import * as clientDB from '../../utils/clientDB';

import { makeStore } from '../../redux/makeStore';

class Root extends React.Component {
  createStore() {
    return makeStore(clientDB);
  }
  render() {
    return template.apply(this);
  }
}

module.exports = Root;