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
  sendPasswordResetEmail
} from '../../redux/actions/authActions';

import { reportError } from '../../redux/actions/errorActions';

const mapStateToProps = (state) => ({
  errorMsg: state.errorMsg
});

const mapDispatchToProps = (dispatch) => ({
  loginWithGoogle: () => dispatch(loginWithGoogle()),
  loginWithFacebook: () => dispatch(loginWithFacebook()),
  loginWithEmail: (email, password) => dispatch(loginWithEmailAndPassword(email, password)),
  signUpWithUserAndPassword: (email, password) => dispatch(createUserWithEmailAndPassword(email, password)),
  sendPasswordResetEmail: email => dispatch(sendPasswordResetEmail(email)),
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
      authMode: 'login',
      isLoginMode: false
    };
  },

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  },

  getButtonLabel() {
    switch (this.state.authMode) {
      case 'login':
        return 'התחבר';
      case 'register':
        return 'הירשם';
      case 'forgotPassword':
        return 'שלח לינק לאיפוס סיסמא';
    }
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
    switch (this.state.authMode) {
      case 'login':
        return _.isEmpty(this.state.email) || _.isEmpty(this.state.password);
      case 'register':
        return _.isEmpty(this.state.email) || _.isEmpty(this.state.password) || _.isEmpty(this.state.passwordAgain);
      case 'forgotPassword':
        return _.isEmpty(this.state.email);
    }
  },

  goToLogin() {
    this.setState({ authMode: 'login' });
  },

  goToRegister() {
    this.setState({ authMode: 'register' });
  },

  goToForgotPassword() {
    this.setState({ authMode: 'forgotPassword' });
  },

  handleLogin() {
    this.props.loginWithEmail(this.state.email, this.state.password);
  },

  handleRegister() {
    if (_.isEqual(this.state.password, this.state.passwordAgain)) {
      this.props.signUpWithUserAndPassword(this.state.email, this.state.password);
    } else {
      this.props.reportError(constants.ERRORS.NOT_SAME_PASSWORD);
    }
  },

  handleForgotPassword() {
    this.props.sendPasswordResetEmail(this.state.email);
    this.goToLogin();
  },

  handleSubmitClick() {
    switch (this.state.authMode) {
      case 'login':
        return this.handleLogin();
      case 'register':
        return this.handleRegister();
      case 'forgotPassword':
        return this.handleForgotPassword();
    }
  },

  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(AuthForm);