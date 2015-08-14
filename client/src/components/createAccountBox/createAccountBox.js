'use strict';

var React = require('react/addons');
var template = require('./createAccountBox.rt.js');
var muiMixin = require('../mixins/mui-mixin');
var userActions = require('../../actions/userActions');
var authNavigationActions = require('../../actions/authNavigationActions');

var LoginBox =  React.createClass({
    mixins: [ React.addons.LinkedStateMixin, muiMixin ],
    getInitialState: function() {
        return {
            email: '',
            password: ''
        };
    },
    onCreateUser: function() {
        userActions.createUser(this.state.email, this.state.password);
    },
    handleHasAccount: function (){
        authNavigationActions.showLoginBox();
    },
    render: template
});

module.exports = LoginBox;