'use strict';

var React = require('react/addons');
var template = require('./loginBox.rt.js');
var muiMixin = require('../mixins/mui-mixin');
var loginAction = require('../../actions/loginAction');

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
    onCreateUser: function() {
        loginAction.createUser(this.state.email, this.state.password);
    },
    onSocialLogin: function(provider) {
        loginAction.socialLogin(provider);
    },
    render: template
});

module.exports = LoginBox;