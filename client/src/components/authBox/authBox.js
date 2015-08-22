'use strict';

var React = require('react/addons');
var template = require('./authBox.rt.js');
var authNavigationStore = require('../../stores/authNavigationStore');
var userStore = require('../../stores/userStore');

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
        userStore.registerToChange(this.onUserStoreDataChanged);
    },
    onAuthNavigationStoreDataChanged: function (authNavigationStoreData) {
        var newState = _.pick(authNavigationStoreData, _.keys(this.state));
        newState.errorMsg = '';
        this.setState(newState);
    },
    onUserStoreDataChanged: function (userStoreData) {
        var newState = _.pick(userStoreData, ['errorMsg']);
        this.setState(newState);
    },
    componentWillUnmount: function () {
        authNavigationStore.removeChangeListener(this.onAuthNavigationStoreDataChanged);
        userStore.removeChangeListener(this.onUserStoreDataChanged);
    },
    render: template
});

module.exports = LoginBox;