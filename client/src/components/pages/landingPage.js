'use strict';

var React = require('react');
var template = require('./landingPage.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var authDialog = require('../dialogs/authDialog');

var LandingPage = React.createClass({
    login: function() {
        this.refs.authDialog.showDialog();
        //actionsCreator.createAction(actionsConstants.LOGIN, {email: 'user1@gmail.com', password: '1234'});
        //actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {dialogClass: authDialog});
    },
    render: template
});

module.exports = LandingPage;
