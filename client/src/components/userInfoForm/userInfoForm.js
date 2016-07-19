import React from 'react';
import template from './userInfoForm.rt';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../redux/actions/actionsCreator';

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: (uid, userInfo) => dispatch(updateUserInfo(uid, userInfo)),
});

const UserInfoForm = React.createClass({
  displayName: 'UserInfoForm',

  propTypes: {
    uid: React.PropTypes.string.isRequired,
    updateUserInfo: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      phonePrefix: '',
      phoneNumber: ''
    };
  },

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  },

  updateUserInfo() {
    this.props.updateUserInfo(this.props.uid, this.state);
  },

  render: template
});

module.exports = connect(null, mapDispatchToProps)(UserInfoForm);