'use strict';

var React = require('react/addons');
var template = require('./createAccountBox.rt.js');
var muiMixin = require('../mixins/mui-mixin');
var authActions = require('../../actions/authActions');
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
        authActions.createUser(this.state.email, this.state.password);
    },
    handleHasAccount: function (){
        authNavigationActions.showLoginBox();
    },
    render: template
});

module.exports = LoginBox;