'use strict';

var React = require('react');
var template = require('./authDialog.rt');
var muiMixin = require('../mixins/mui-mixin');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');
var stationsMap = require('json!../../utils/stationsMap.json');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var MODES = {
    LOGIN: 'LOGIN',
    CREATE_USER: 'CREATE_USER',
    RESET_PASSWORD: 'RESET_PASSWORD'
};

var AuthDialog = React.createClass({
    displayName: 'AuthDialog',
    mixins: [muiMixin, deepLinkStateMixin],
    getInitialState: function() {
      return {
          mode: MODES.LOGIN,
          email: '',
          password: ''
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
    showDialog: function() {
        this.refs.dialog.show();
    },
    onDismiss: function() {
      this.setState({mode: MODES.LOGIN});
    },
    render: template
});

module.exports = AuthDialog;
