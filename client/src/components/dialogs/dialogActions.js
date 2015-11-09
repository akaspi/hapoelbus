'use strict';

var React = require('react');
var template = require('./dialogActions.rt');
var muiMixin = require('../mixins/mui-mixin');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');
var stationsMap = require('json!../../utils/stationsMap.json');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var DialogActions = React.createClass({
    displayName: 'DialogActions',
    mixins: [muiMixin, deepLinkStateMixin],
    render: template
});

module.exports = DialogActions;
