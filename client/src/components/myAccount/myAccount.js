'use strict';

var React = require('react/addons');

var template = require('./myAccount.rt.js');
var userActions = require('../../actions/userActions');

var MyAccount = React.createClass({
    logout: function () {
        userActions.logOut();
    },
    render: template
});

module.exports = MyAccount;