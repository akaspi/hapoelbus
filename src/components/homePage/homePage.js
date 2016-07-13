import React from 'react';
import template from './homePage.rt';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    usersInfo: state.usersInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    rename: (name) => dispatch({type: 'rename', value: 'chene'})
  }
};

const HomePage = connect(mapStateToProps, mapDispatchToProps)(React.createClass({
  displayName: 'HomePage',
  render: template
}));

module.exports = HomePage;