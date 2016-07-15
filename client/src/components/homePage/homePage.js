import React from 'react';
import template from './homePage.rt';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  usersInfo: state.usersInfo
});

const mapDispatchToProps = (dispatch) => ({
  rename: () => dispatch({ type: 'rename', value: 'chene' })
});

class HomePage extends React.Component {
  render() {
    return template.apply(this);
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomePage);