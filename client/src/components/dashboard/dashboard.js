import React from 'react';
import template from './dashboard.rt';
import { connect } from 'react-redux';
import { fetchUserInfo, signOut } from '../../redux/actions/actionsCreator';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  usersInfo: state.usersInfo
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: (uid) => dispatch(fetchUserInfo(uid)),
  signOut: () => dispatch(signOut())
});

const Dashboard = React.createClass({
  displayName: 'Dashboard',

  propTypes: {
    currentUser: React.PropTypes.object,
    usersInfo: React.PropTypes.object.isRequired,
    fetchUserInfo: React.PropTypes.func.isRequired,
    signOut: React.PropTypes.func.isRequired
  },

  componentWillMount() {
    this.props.fetchUserInfo(this.props.currentUser.uid);
  },

  hasUserInfo() {
    return this.props.usersInfo[this.props.currentUser.uid];
  },

  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Dashboard);