'use strict';

var React = require('react');
var template = require('./landingPage.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var authDialog = require('../dialogs/authDialog');

var LandingPage = React.createClass({
    displayName: 'LandingPage',
    login: function() {
        this.refs.authDialog.showDialog();
    },
    render: template
});

module.exports = LandingPage;
