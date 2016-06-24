import React from 'react';
import template from './root.rt';

require('./root.scss');

export default class Root extends React.Component {
  render() {
    return template.apply(this);
  }
}