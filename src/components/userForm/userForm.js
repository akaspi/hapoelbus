import React from 'react';
import * as _ from 'lodash';
import template from './userForm.rt';

const emptyUser = {
  firstName: '',
  lastName: '',
  phonePrefix: '050',
  phoneNumber: '',
  station: 'tlv',
  subscribeSMS: true,
  subscribeMail: true,
  seasonTickets: 0
};

const userForm = React.createClass({
  displayName: 'userForm',

  propTypes: {
    uid: React.PropTypes.string.isRequired,
    user: React.PropTypes.object,
    email: React.PropTypes.string,
    onUpdateUser: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func
  },

  getInitialState() {
    return _.defaults(this.props.user, emptyUser, {email: this.props.email});
  },

  onInfoChange(e, validationType) {
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

    this.setState({[e.target.name]: value});
  },

  onBooleanInfoChange(e) {
    const value = Boolean(e.target.checked);

    this.setState({[e.target.name]: value});
  },

  onRequestForMembershipChange(e) {
    this.setState({
      requestForMembership: e.target.value === 'yes'
    });
  },

  onSeasonTicketChange(e) {
    const value = _.toNumber(e.target.value);

    this.setState({
      [e.target.name]: value
    });
  },

  getRequestForMembership() {
    if (_.has(this.state, 'requestForMembership')) {
      return this.state.requestForMembership ? 'yes' : 'no';
    }
    return '';
  },

  updateUser() {

    const propsEmail = _.get(this.props.user, 'email') || this.props.email;

    const user = {
      email: propsEmail || this.state.email,
      firstName: _.trim(this.state.firstName),
      lastName: _.trim(this.state.lastName),
      phonePrefix: this.state.phonePrefix,
      phoneNumber: this.state.phoneNumber,
      station: this.state.station,
      subscribeSMS: this.state.subscribeSMS,
      subscribeMail: this.state.subscribeMail,
      seasonTickets: this.state.seasonTickets,
      requestForMembership: this.state.requestForMembership
    };
    this.props.onUpdateUser(this.props.uid, user);
  },

  removeUser(){
    if (this.props.uid) {
      this.props.removeUser(this.props.uid);
    }
  },

  isFormValid() {
    const requiredInfo = _.pick(this.state, ['firstName', 'lastName', 'phonePrefix', 'phoneNumber']);
    const isUserInfoValid = !_.some(requiredInfo, _.isEmpty);
    return isUserInfoValid && !this.isPhoneInvalid() && _.has(this.state, 'requestForMembership');
  },

  isPhoneInvalid() {
    return this.state.phoneNumber.length < 7;
  },

  handleKeyDown(e) {
    if (e.keyCode === 13 && this.isFormValid()) {
      this.updateUser();
      this.props.onClose();
    }
  },

  render: template
});

module.exports = userForm;