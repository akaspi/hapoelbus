'use strict';

var React = require('react/addons');
var template = require('./adminNav.rt.js');
var accountActions = require('../../actions/accountActions');

var AdminDashboard = React.createClass({
    switchToAdminView: function() {
        accountActions.showAdminView();
    },
    switchToUserView: function() {
        accountActions.showUserView();

    },
    render: template
});

module.exports = AdminDashboard;