'use strict';

var React = require('react');
var template = require('./dialogActions.rt');
var muiMixin = require('../mixins/mui-mixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var DialogActions = React.createClass({
    displayName: 'DialogActions',
    mixins: [muiMixin],
    render: template
});

module.exports = DialogActions;
