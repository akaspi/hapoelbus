'use strict';

var React = require('react');
var template = require('./areYouSureDialog.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var AreYouSureDialog = React.createClass({
    displayName: 'AreYouSureDialog',
    propTypes: {
        text: React.PropTypes.string.isRequired,
        onConfirm: React.PropTypes.func.isRequired
    },
    componentDidMount: function () {
        this.refs.dialog.show();
    },
    onConfirm: function () {
        if (_.isFunction(this.props.onConfirm)) {
            this.props.onConfirm();
        }
        this.refs.dialog.dismiss();
    },
    onCancel: function () {
        this.refs.dialog.dismiss();
    },
    closeDialog: function () {
        setTimeout(function () {
            actionsCreator.createAction(actionsConstants.CLOSE_DIALOG, {});
        }, 800);
    },
    render: template
});

module.exports = AreYouSureDialog;
