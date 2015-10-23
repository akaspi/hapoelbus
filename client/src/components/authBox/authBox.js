'use strict';

var React = require('react');
var template = require('./authBox.rt');
var authNavigationStore = require('../../stores/authNavigationStore');
var authStore = require('../../stores/authStore');

var LoginBox = React.createClass({
    getInitialState: function () {
        return {
            showLoginBox: true,
            showCreateAccountBox: false,
            showForgotPasswordBox: false,
            showResetPasswordBox: false,
            errorMsg: ''
        };
    },
    componentDidMount: function () {
        authNavigationStore.registerToChange(this.onAuthNavigationStoreDataChanged);
        authStore.registerToChange(this.onAuthStoreDataChanged);
    },
    onAuthNavigationStoreDataChanged: function (authNavigationStoreData) {
        var newState = _.pick(authNavigationStoreData, _.keys(this.state));
        newState.errorMsg = '';
        this.setState(newState);
    },
    onAuthStoreDataChanged: function (userStoreData) {
        var newState = _.pick(userStoreData, ['errorMsg']);
        this.setState(newState);
    },
    componentWillUnmount: function () {
        authNavigationStore.removeChangeListener(this.onAuthNavigationStoreDataChanged);
        authStore.removeChangeListener(this.onAuthStoreDataChanged);
    },
    render: template
});

module.exports = LoginBox;
