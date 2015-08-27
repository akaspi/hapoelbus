'use strict';

var React = require('react/addons');

var template = require('./myAccount.rt.js');
var userActions = require('../../actions/userActions');
var muiMixin = require('../mixins/mui-mixin');

var MyAccount = React.createClass({
    mixins: [ muiMixin ],
    logout: function () {
        userActions.logOut();
    },
    render: template
});

module.exports = MyAccount;
