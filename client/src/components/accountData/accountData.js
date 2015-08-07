'use strict';

var React = require('react/addons');

var template = require('./accountData.rt.js');
var accountAction = require('../../actions/accountAction');

var AccountData = React.createClass({
    mixins: [ React.addons.LinkedStateMixin ],
    getInitialState: function () {
        return {
            email: '',
            displayName: '',
            phone: '',
            maxSeats: ''
        }
    },
    handleCreateAccount: function () {
        var accountData = this.state;
        accountAction.createAccount(accountData);
    },
    render: template
});

module.exports = AccountData;