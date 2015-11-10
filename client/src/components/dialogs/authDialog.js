'use strict';

var React = require('react');
var template = require('./authDialog.rt');
var muiMixin = require('../mixins/mui-mixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var MODES = {
    LOGIN: 'LOGIN',
    CREATE_USER: 'CREATE_USER',
    RESET_PASSWORD: 'RESET_PASSWORD',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD'
};

var AuthDialog = React.createClass({
    displayName: 'AuthDialog',
    mixins: [muiMixin],
    getInitialState: function() {
      return {
          mode: MODES.LOGIN,
          email: '',
          password: '',
          newPassword: ''
      }
    },
    getDialogModes: function() {
      return MODES;
    },
    loginWithFacebook: function() {
        actionsCreator.createAction(actionsConstants.SOCIAL_LOGIN, {provider: 'facebook'});
    },
    loginWithGoogle: function() {
        actionsCreator.createAction(actionsConstants.SOCIAL_LOGIN, {provider: 'google'});
    },
    createUser: function() {
        actionsCreator.createAction(actionsConstants.CREATE_USER, {email: this.state.email, password: this.state.password.toString()});
    },
    login: function() {
        actionsCreator.createAction(actionsConstants.LOGIN, {email: this.state.email, password: this.state.password.toString()});
    },
    resetPassword: function() {
        actionsCreator.createAction(actionsConstants.RESET_PASSWORD, {email: this.state.email});
    },
    changePassword: function() {
        actionsCreator.createAction(actionsConstants.CHANGE_PASSWORD, {email: this.state.email, oldPassword: this.state.password.toString(), newPassword: this.state.newPassword.toString()});
    },

    switchToCreateAccount: function() {
        this.setState({mode: MODES.CREATE_USER});
    },

    switchToForgotPassword: function() {
        this.setState({mode: MODES.RESET_PASSWORD});
    },

    switchToLogin: function() {
        this.setState({mode: MODES.LOGIN});
    },

    switchToChangePassword: function() {
        this.setState({mode: MODES.CHANGE_PASSWORD});
    },

    showDialog: function() {
        this.refs.dialog.show();
    },
    onDismiss: function() {
      this.setState({mode: MODES.LOGIN});
    },
    render: template
});

module.exports = AuthDialog;
