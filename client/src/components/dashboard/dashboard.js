import React from 'react';
import template from './dashboard.rt';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/actions/userActions';
import { navigateTo } from '../../redux/actions/navigationActions';
import { signOut } from '../../redux/actions/authActions';

const mapStateToProps = (state) => ({
  loading: state.loading,
  authData: state.authData,
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (uid, userInfo) => dispatch(updateUser(uid, userInfo)),
  navigateTo: page => dispatch(navigateTo(page)),
  signOut: () => dispatch(signOut())
});

const Dashboard = React.createClass({
  displayName: 'Dashboard',

  propTypes: {
    loading: React.PropTypes.bool.isRequired,
    authData: React.PropTypes.object,
    users: React.PropTypes.object.isRequired,
    signOut: React.PropTypes.func.isRequired,
    updateUser: React.PropTypes.func.isRequired
  },

  hasUserInfo() {
    return !!this.props.users[this.props.authData.uid];
  },

  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Dashboard);