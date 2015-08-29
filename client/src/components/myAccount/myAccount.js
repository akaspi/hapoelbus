'use strict';

var React = require('react/addons');

var template = require('./myAccount.rt.js');
var accountStore = require('../../stores/accountStore');
var muiMixin = require('../mixins/mui-mixin');

var MyAccount = React.createClass({
    mixins: [ muiMixin ],
    getInitialState: function () {
        return accountStore.getAll();
    },
    componentDidMount: function () {
        accountStore.registerToChange(this.onAccountStoreDataChanged);
    },
    onAccountStoreDataChanged: function(accountStoreData) {
        var newState = _.pick(accountStoreData, _.keys(this.state));
        this.setState(newState);
    },
    componentWillUnmount: function() {
        accountStore.removeChangeListener(this.onAccountStoreDataChanged);
    },
    render: template
});

module.exports = MyAccount;
