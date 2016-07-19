import React from 'react';
import template from './homePage.rt';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/actionsCreator';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser())
});

const HomePage = React.createClass({
  displayName: 'HomePage',

  propTypes: {
    currentUser: React.PropTypes.object,
    fetchCurrentUser: React.PropTypes.func.isRequired
  },

  componentWillMount() {
    this.props.fetchCurrentUser();
  },
  isUserLoggedIn() {
    return this.props.currentUser && !!this.props.currentUser.getIn(['uid']);
  },
  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomePage);