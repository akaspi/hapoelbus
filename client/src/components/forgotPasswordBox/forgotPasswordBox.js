'use strict';

var React = require('react');
var template = require('./forgotPasswordBox.rt');
var muiMixin = require('../mixins/mui-mixin');
var userActions = require('../../actions/userActions');
var authNavigationActions = require('../../actions/authNavigationActions');

var LoginBox =  React.createClass({
    mixins: [ React.addons.LinkedStateMixin, muiMixin ],
    getInitialState: function() {
        return {
            email: ''
        };
    },
    resetPasswordRequest: function() {
        userActions.resetPasswordRequest(this.state.email);
    },
    navigateToPasswordReset: function() {
        authNavigationActions.showResetPasswordBox();
    },
    render: template
});

module.exports = LoginBox;
