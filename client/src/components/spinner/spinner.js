import React from 'react';
import template from './spinner.rt';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loading: state.loading
});

class Spinner extends React.Component {
  render() {
    return template.apply(this);
  }
}

module.exports = connect(mapStateToProps)(Spinner);