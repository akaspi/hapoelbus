'use strict';

var React = require('react/addons');
var template = require('./authBox.rt.js');

var LoginBox =  React.createClass({
    getInitialState: function() {
        return {
            showLogin: true,
            showCreateAccount: false,
            showForgotPasswordBox: false
        };
    },
    render: template
});

module.exports = LoginBox;