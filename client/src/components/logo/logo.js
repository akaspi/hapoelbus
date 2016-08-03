import React from 'react';
import template from './logo.rt';

class Logo extends React.Component {
  render() {
    return template.apply(this);
  }
}

module.exports = Logo;