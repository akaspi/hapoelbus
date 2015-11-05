'use strict';

var React = require('react');
var template = require('./landingPage.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var LandingPage = React.createClass({
    login: function() {
        actionsCreator.createAction(actionsConstants.LOGIN, {email: 'user1@gmail.com', password: '1234'});
    },
    render: template
});

module.exports = LandingPage;
