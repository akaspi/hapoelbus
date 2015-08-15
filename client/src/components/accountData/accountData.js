'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');

var template = require('./accountData.rt.js');
var userActions = require('../../actions/userActions');

var AccountData = React.createClass({
    mixins: [ React.addons.LinkedStateMixin, muiMixin ],
    getInitialState: function () {
        return {
            email: '',
            displayName: '',
            phone: '',
            maxSeats: ''
        }
    },
    handleCreateAccount: function () {
        var userData = this.state;
        userActions.createUserData(userData);
    },
    render: template
});

module.exports = AccountData;