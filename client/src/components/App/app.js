import React from 'react';
import template from './app.rt';

import { connect } from 'react-redux';

import { fetchAuthData } from '../../redux/actions/authActions';

const mapStateToProps = state => ({
  currentPage: state.currentPage
});

const mapDispatchToProps = (dispatch) => ({
  fetchAuthData: () => dispatch(fetchAuthData())
});

class App extends React.Component {
  componentWillMount() {
    this.props.fetchAuthData();
  }

  render() {
    return template.apply(this);
  }
}

App.propTypes = {
  fetchAuthData: React.PropTypes.func.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);