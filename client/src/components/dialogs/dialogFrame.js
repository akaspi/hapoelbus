'use strict';

var React = require('react');
var mui = require('material-ui');
var template = require('./dialogFrame.rt');
var muiMixin = require('../mixins/mui-mixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var DialogFrame = React.createClass({
    mixins: [muiMixin],
    getDefaultProps: function () {
        return {showCancelButton: true};
    },
    componentDidMount: function () {
        this.refs.dialog.show();
    },
    hideDialog: function () {
        this.refs.dialog.dismiss();
        this.closeDialog();
    },
    closeDialog: function() {
        setTimeout(function () {
            actionsCreator.createAction(actionsConstants.CLOSE_DIALOG, {});
        }, 800);
    },
    onSubmit: function () {
        this.props.onSubmit();
        this.refs.dialog.dismiss();
        this.hideDialog();
    },
    render: template
});

module.exports = DialogFrame;
