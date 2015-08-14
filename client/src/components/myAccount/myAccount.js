'use strict';

var React = require('react/addons');

var template = require('./myAccount.rt.js');
var loginAction = require('../../actions/userActions');

var MyAccount = React.createClass({
    logout: function () {
        loginAction.logOut();
    },
    render: template
});

module.exports = MyAccount;