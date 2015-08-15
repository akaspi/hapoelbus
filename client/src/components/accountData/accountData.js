'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');

var template = require('./accountData.rt.js');
var userActions = require('../../actions/userActions');
var auth = require('../../api/auth');

var AccountData = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {

        var authData = auth.getAuthData();

        return {
            email: authData.email,
            displayName: authData.displayName,
            phone: '',
            maxSeats: '',
            isPremium: false
        }
    },
    handleCreateAccount: function () {
        var userData = this.state;
        userActions.createUserData(userData);
    },
    handlePremiumChange: function (e, value) {
        this.setState({isPremium: value});
    },
    render: template
});

module.exports = AccountData;