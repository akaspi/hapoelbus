'use strict';

var React = require('react/addons');
var template = require('./authBox.rt.js');
var loginStore = require('../../stores/loginStore');

var LoginBox = React.createClass({
    getInitialState: function () {
        return {
            showLoginBox: true,
            showCreateAccountBox: false,
            showForgotPasswordBox: false,
            showResetPasswordBox: false
        };
    },
    componentDidMount: function () {
        loginStore.registerToChange(this.onLoginStoreDataChanged);
    },
    onLoginStoreDataChanged: function (loginStoreData) {
        var newState = _.clone(this.state);
        _.forEach(newState, function (val, key) {
            newState[key] = false;
        });
        switch (loginStoreData.boxToShow) {
            case 'login':
                newState.showLoginBox = true;
                break;
            case 'forgotPassword':
                newState.showForgotPasswordBox = true;
                break;
            case 'createAccount':
                newState.showCreateAccountBox = true;
                break;
            case 'resetPassword':
                newState.showResetPasswordBox = true;
                break;
        }
        this.setState(newState);
    },
    componentWillUnmount: function () {
        loginStore.removeChangeListener(this.onLoginStoreDataChanged);
    },
    render: template
});

module.exports = LoginBox;