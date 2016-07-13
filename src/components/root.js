import React from 'react';
import template from './root.rt';

import { makeStore } from '../redux/makeStore';

require('./root.scss');

const Root = React.createClass({
  displayName: 'Root',
  createStore() {
    return makeStore();
  },
  render: template
});

module.exports = Root;