'use strict';

var React = require('react/addons');
var template = require('./createAccountBox.rt.js');
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
    onCreateUser: function() {
        loginAction.createUser(this.state.email, this.state.password);
    },
    render: template
});

module.exports = LoginBox;