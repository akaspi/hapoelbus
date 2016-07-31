import React from 'react';
import * as _ from 'lodash';
import template from './userInfoForm.rt';
import {connect} from 'react-redux';
import {updateUserInfo} from '../../redux/actions/actionsCreator';

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
      station: 'tlv',
      requestForMembership: '',
      paid: 0,
      subscribeSMS: true,
      subscribeMail: true
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

  onNumericChange(e){
    const value = _.toNumber(e.target.value);

    this.setState({
      [e.target.name]: value
    });
  },

  onBooleanChange(e){
    const value = Boolean(e.target.checked);

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
      requestForMembership: this.state.requestForMembership,
      station: this.state.station,
      subscribeMail: this.state.subscribeMail
    };
    this.props.updateUserInfo(this.props.currentUser.uid, userInfo);
  },

  isSubmitDisabled() {
    const stringValues = _.pick(this.state, ['email', 'firstName', 'lastName', 'phonePrefix', 'phoneNumber', 'station', 'requestForMembership']);
    return _.some(stringValues, _.isEmpty) || this.isPhoneInvalid();
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