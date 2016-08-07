import React from 'react';
import template from './homePage.rt';
import { connect } from 'react-redux';
import { initializeApp } from '../../redux/actions/actionsCreator';

const mapStateToProps = (state) => ({
  errorMsg: state.errorMsg,
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  initializeApp: () => dispatch(initializeApp())
});

const HomePage = React.createClass({
  displayName: 'HomePage',

  propTypes: {
    errorMsg: React.PropTypes.string,
    currentUser: React.PropTypes.object,
    initializeApp: React.PropTypes.func.isRequired
  },

  componentWillMount() {
    this.props.initializeApp();
  },

  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomePage);