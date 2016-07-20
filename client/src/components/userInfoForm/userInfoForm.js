import React from 'react';
import template from './userInfoForm.rt';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../redux/actions/actionsCreator';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUserInfo: (uid, userInfo) => dispatch(updateUserInfo(uid, userInfo)),
});

const UserInfoForm = React.createClass({
  displayName: 'UserInfoForm',

  propTypes: {
    currentUser: React.PropTypes.object.isRequired,
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
    this.props.updateUserInfo(this.props.currentUser.uid, this.state);
  },

  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);