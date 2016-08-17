import React from 'react';
import * as _ from 'lodash';
import template from './userForm.rt';
import {connect} from 'react-redux';
import { updateUser } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  authData: state.authData
});

const mapDispatchToProps = dispatch => ({
  updateUser: (uid, userInfo) => dispatch(updateUser(uid, userInfo)),
});

const userForm = React.createClass({
  displayName: 'userForm',

  propTypes: {
    authData: React.PropTypes.object.isRequired,
    updateUser: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      info: {
        firstName: '',
        lastName: '',
        phonePrefix: '050',
        phoneNumber: '',
        station: 'tlv',
        subscribeSMS: true,
        subscribeMail: true
      },
      seasonTickets: 0
    };
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

    const newInfoState = _.merge({}, this.state.info, {[e.target.name]: value});

    this.setState({
      info: newInfoState
    });
  },

  onBooleanInfoChange(e){
    const value = Boolean(e.target.checked);

    const newInfoState = _.merge({}, this.state.info, {[e.target.name]: value});

    this.setState({
      info: newInfoState
    });
  },

  onRequestSeasonChange(e){
    this.setState({
      requestForSeasonTickets: e.target.value === 'yes'
    });
  },

  getRequestForSeasonTicketsValue () {
    if (_.has(this.state, 'requestForSeasonTickets')) {
      return this.state.requestForSeasonTickets ? 'yes' : 'no';
    }
    return '';
  },

  onSeasonTicketChange(e){
    const value = _.toNumber(e.target.value);

    this.setState({
      [e.target.name]: value
    });
  },

  updateUser() {
    const userInfo = {
      email: this.props.authData.email,
      firstName: _.trim(this.state.firstName),
      lastName: _.trim(this.state.lastName),
      phonePrefix: this.state.phonePrefix,
      phoneNumber: this.state.phoneNumber,
      station: this.state.station
    };
    this.props.updateUser(this.props.authData.uid, userInfo);
  },

  isFormValid() {
    const requiredInfo = _.pick(this.state.info, ['firstName', 'lastName', 'phonePrefix', 'phoneNumber']);
    const isUserInfoValid = !_.some(requiredInfo, _.isEmpty);
    const isEmailValid = !_.isEmpty(this.props.authData.email) || !_.isEmpty(this.state.info.email);
    return isUserInfoValid && isEmailValid && !this.isPhoneInvalid() && _.has(this.state, 'requestForSeasonTickets');
  },

  isPhoneInvalid() {
    return this.state.info.phoneNumber.length < 7;
  },
  handleKeyDown(e) {
    if (e.keyCode === 13 && !this.isSubmitDisabled()) {
      this.updateUserInfo();
    }
  },
  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(userForm);