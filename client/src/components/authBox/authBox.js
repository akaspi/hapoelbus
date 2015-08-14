'use strict';

var React = require('react/addons');
var template = require('./authBox.rt.js');
var authNavigationStore = require('../../stores/authNavigationStore');

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
        authNavigationStore.registerToChange(this.onAuthNavigationStoreDataChanged);
    },
    onAuthNavigationStoreDataChanged: function (authNavigationStoreData) {
        var newState = _.pick(authNavigationStoreData, _.keys(this.state));
        this.setState(newState);
    },
    componentWillUnmount: function () {
        authNavigationStore.removeChangeListener(this.onAuthNavigationStoreDataChanged);
    },
    render: template
});

module.exports = LoginBox;