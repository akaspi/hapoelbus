import React from 'react';
import template from './authForm.rt';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { loginWithGoogle, loginWithFacebook, signUpWithUserAndPassword } from '../../redux/actions/actionsCreator';

const mapDispatchToProps = (dispatch) => ({
  loginWithGoogle: () => dispatch(loginWithGoogle()),
  loginWithFacebook: () => dispatch(loginWithFacebook()),
  signUpWithUserAndPassword: (email, password) => dispatch(signUpWithUserAndPassword(email, password))
});

const AuthForm = React.createClass({
  displayName: 'AuthForm',

  propTypes: {
    loginWithGoogle: React.PropTypes.func.isRequired,
    loginWithFacebook: React.PropTypes.func.isRequired,
    signUpWithUserAndPassword: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {
      email: '',
      password: ''
    };
  },

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  },

  signUpWithUserAndPassword() {
    this.props.signUpWithUserAndPassword(this.state.email, this.state.password);
  },

  isSubmitDisabled(){
    return _.some(this.state, _.isEmpty);
  },

  render: template
});

module.exports = connect(null, mapDispatchToProps)(AuthForm);