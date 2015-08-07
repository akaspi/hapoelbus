'use strict';

var React = require('react/addons');

var template = require('./myAccount.rt.js');
var accountAction = require('../../actions/accountAction');
var loginAction = require('../../actions/loginAction');
var accountStore = require('../../stores/accountStore');

var MyAccount = React.createClass({
    getInitialState: function () {
        return {
            isFetchingData: true,
            accountData: null
        }
    },
    componentDidMount: function () {
        accountStore.registerToChange(this.handleAccountStoreChange);
        accountAction.fetchAccountData();
    },
    handleAccountStoreChange: function(accountStoreData) {
        var newState = _.pick(accountStoreData, _.keys(this.state));
        this.setState(newState);
    },
    hasAccount: function () {
        return !!this.state.accountData;
    },
    logout: function () {
        loginAction.logOut();
    },
    componentWillUnmount: function() {
        accountStore.removeChangeListener(this.handleAccountStoreChange);
    },
    render: template
});

module.exports = MyAccount;