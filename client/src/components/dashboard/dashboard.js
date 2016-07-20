import * as _ from 'lodash';
import React from 'react';
import template from './dashboard.rt';
import { connect } from 'react-redux';
import { fetchUserInfo, updateUserInfo, signOut } from '../../redux/actions/actionsCreator';

const mapStateToProps = (state) => ({
  loading: state.loading,
  currentUser: state.currentUser,
  usersInfo: state.usersInfo
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: (uid) => dispatch(fetchUserInfo(uid)),
  updateUserInfo: (uid, userInfo) => dispatch(updateUserInfo(uid, userInfo)),
  signOut: () => dispatch(signOut())
});

const Dashboard = React.createClass({
  displayName: 'Dashboard',

  propTypes: {
    loading: React.PropTypes.bool.isRequired,
    currentUser: React.PropTypes.object,
    usersInfo: React.PropTypes.object.isRequired,
    fetchUserInfo: React.PropTypes.func.isRequired,
    signOut: React.PropTypes.func.isRequired,
    updateUserInfo: React.PropTypes.func.isRequired
  },

  componentWillMount() {
    this.props.fetchUserInfo(this.props.currentUser.uid);
  },

  hasUserInfo() {
    return !!this.props.usersInfo[this.props.currentUser.uid];
  },

  hasEverRequestedForMembership() {
    return _.has(this.props.usersInfo[this.props.currentUser.uid], 'requestForMembership');
  },

  updateMembershipRequest(value) {
    this.props.updateUserInfo(this.props.currentUser.uid, { requestForMembership: value });
  },

  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Dashboard);