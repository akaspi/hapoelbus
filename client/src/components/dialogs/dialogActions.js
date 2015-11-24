'use strict';

var React = require('react');
var template = require('./dialogActions.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var DialogActions = React.createClass({
    displayName: 'DialogActions',
    render: template
});

module.exports = DialogActions;
