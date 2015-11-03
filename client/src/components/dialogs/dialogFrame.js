'use strict';

var React = require('react');
var mui = require('material-ui');
var template = require('./dialogFrame.rt');
var muiMixin = require('../mixins/mui-mixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var DialogFrame = React.createClass({
    mixins: [muiMixin],
    componentDidMount: function () {
        this.refs.dialog.show();
    },
    hideDialog: function () {
        setTimeout(function () {
            actionsCreator.createAction(actionsConstants.CLOSE_DIALOG, {});
        }, 500);
    },
    render: template
});

module.exports = DialogFrame;
