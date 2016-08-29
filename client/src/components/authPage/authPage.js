import React from 'react';
import template from './authPage.rt';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import * as constants from '../../utils/constants';
import {
  loginWithGoogle,
  loginWithFacebook,
  loginWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '../../redux/actions/authActions';

import { reportError } from '../../redux/actions/errorActions';

const mapDispatchToProps = (dispatch) => ({
  loginWithGoogle: () => dispatch(loginWithGoogle()),
  loginWithFacebook: () => dispatch(loginWithFacebook()),
  loginWithEmail: (email, password) => dispatch(loginWithEmailAndPassword(email, password)),
  signUpWithUserAndPassword: (email, password) => dispatch(createUserWithEmailAndPassword(email, password)),
  reportError: (msg) => dispatch(reportError(msg))
});

const AuthForm = React.createClass({
  displayName: 'AuthForm',

  propTypes: {
    loginWithGoogle: React.PropTypes.func.isRequired,
    loginWithFacebook: React.PropTypes.func.isRequired,
    loginWithEmail: React.PropTypes.func.isRequired,
    reportError: React.PropTypes.func.isRequired,
    signUpWithUserAndPassword: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      email: '',
      password: '',
      passwordAgain: '',
      isLoginMode: false
    };
  },

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  },

  getLinkLabel() {
    return (this.state.isLoginMode) ? 'אין לך משתמש?' : 'כבר נרשמת?';
  },

  getButtonLabel() {
    return (this.state.isLoginMode) ? 'התחבר' : 'הירשם';
  },

  handleKeyDown(e) {
    if (e.keyCode === 13 && !this.isSubmitDisabled()) {
      this.handleSubmitClick();
    }
  },

  signUpWithUserAndPassword() {
    this.props.signUpWithUserAndPassword(this.state.email, this.state.password);
  },

  isSubmitDisabled() {
    return _.isEmpty(this.state.email) || _.isEmpty(this.state.password) || (!this.state.isLoginMode && _.isEmpty(this.state.passwordAgain));
  },

  toggleLoginMode() {
    this.setState({ isLoginMode: !this.state.isLoginMode });
  },

  handleSubmitClick() {
    if (this.state.isLoginMode) {
      this.props.loginWithEmail(this.state.email, this.state.password);
    } else if (_.isEqual(this.state.password, this.state.passwordAgain)) {
      this.props.signUpWithUserAndPassword(this.state.email, this.state.password);
    } else {
      this.props.reportError(constants.ERRORS.NOT_SAME_PASSWORD);
    }
  },

  render: template
});

module.exports = connect(null, mapDispatchToProps)(AuthForm);