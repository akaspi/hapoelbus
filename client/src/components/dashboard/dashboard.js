import * as _ from 'lodash';
import React from 'react';
import template from './dashboard.rt';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../redux/actions/userActions';
import { signOut } from '../../redux/actions/authActions';

const mapStateToProps = (state) => ({
  loading: state.loading,
  authData: state.authData,
  usersInfo: state.usersInfo
});

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: (uid, userInfo) => dispatch(updateUserInfo(uid, userInfo)),
  signOut: () => dispatch(signOut())
});

const Dashboard = React.createClass({
  displayName: 'Dashboard',

  propTypes: {
    loading: React.PropTypes.bool.isRequired,
    authData: React.PropTypes.object,
    usersInfo: React.PropTypes.object.isRequired,
    signOut: React.PropTypes.func.isRequired,
    updateUserInfo: React.PropTypes.func.isRequired
  },

  hasUserInfo() {
    return !!this.props.usersInfo[this.props.authData.uid];
  },

  hasEverRequestedForMembership() {
    return _.has(this.props.usersInfo[this.props.authData.uid], 'requestForMembership');
  },

  updateMembershipRequest(value) {
    this.props.updateUserInfo(this.props.authData.uid, { requestForMembership: value });
  },

  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Dashboard);