'use strict';

var React = require('react/addons');
var template = require('./loginBox.rt');
var muiMixin = require('../mixins/mui-mixin');
var authActions = require('../../actions/authActions');
var authNavigationActions = require('../../actions/authNavigationActions');

var LoginBox =  React.createClass({
    mixins: [ React.addons.LinkedStateMixin, muiMixin ],
    getInitialState: function() {
        return {
            isWaitingForLogin: false,
            email: '',
            password: ''
        };
    },
    componentWillReceiveProps: function(nextProps) {
        if (nextProps.errorMsg) {
            this.setState({isWaitingForLogin: false});
        }
    },
    onLogin: function() {
        this.setState({isWaitingForLogin: true});
        authActions.login(this.state.email, this.state.password);
    },
    onSocialLogin: function(provider) {
        authActions.socialLogin(provider);
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
