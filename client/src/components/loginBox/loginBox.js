'use strict';

var React = require('react/addons');
var template = require('./loginBox.rt.js');
var muiMixin = require('../mixins/mui-mixin');
var loginAction = require('../../actions/loginAction');
var authNavigationActions = require('../../actions/authNavigationActions');

var LoginBox =  React.createClass({
    mixins: [ React.addons.LinkedStateMixin, muiMixin ],
    getInitialState: function() {
        return {
            email: '',
            password: ''
        };
    },
    onLogin: function() {
        loginAction.login(this.state.email, this.state.password);
    },
    onSocialLogin: function(provider) {
        loginAction.socialLogin(provider);
    },
    handleCreateAccountNav: function (){
        authNavigationActions.showCreateAccountBox();
    },
    handleForgotPassword: function (){
        authNavigationActions.showForgotPasswordBox();
    },
    render: template
});

module.exports = LoginBox;