import React from 'react';
import * as _ from 'lodash';
import template from './userInfoForm.rt';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../redux/actions/userActions';

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
      phonePrefix: '050',
      phoneNumber: '',
      station: 'tlv'
    };
  },

  onChange(e, validationType) {
    const value = e.target.value;

    if (validationType === 'numeric') {
      if (!/^[0-9]*$/.test(value)) {
        return;
      }
    }

    if (validationType === 'hebrew') {
      if (!/^[א-ת\s]*$/.test(value)) {
        return;
      }
    }

    this.setState({
      [e.target.name]: value
    });
  },

  updateUserInfo() {
    const userInfo = {
      email: this.props.currentUser.email,
      firstName: _.trim(this.state.firstName),
      lastName: _.trim(this.state.lastName),
      phonePrefix: this.state.phonePrefix,
      phoneNumber: this.state.phoneNumber,
      station: this.state.station
    };
    this.props.updateUserInfo(this.props.currentUser.uid, userInfo);
  },

  isSubmitDisabled() {
    return _.some(this.state, _.isEmpty) || this.isPhoneInvalid();
  },
  isPhoneInvalid() {
    return this.state.phoneNumber.length < 7;
  },
  handleKeyDown(e) {
    if (e.keyCode === 13 && !this.isSubmitDisabled()) {
      this.updateUserInfo();
    }
  },
  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);