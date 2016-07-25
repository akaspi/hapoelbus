import React from 'react';
import template from './homePage.rt';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/actionsCreator';

const mapStateToProps = (state) => ({
  errorMsg: state.errorMsg,
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser())
});

const HomePage = React.createClass({
  displayName: 'HomePage',

  propTypes: {
    errorMsg: React.PropTypes.string,
    currentUser: React.PropTypes.object,
    fetchCurrentUser: React.PropTypes.func.isRequired
  },

  componentWillMount() {
    this.props.fetchCurrentUser();
  },

  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomePage);