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
    onSubmit: function () {
        if (_.isFunction(this.props.onSubmit)) {
            this.props.onSubmit();
        }
        this.refs.dialog.dismiss();
        this.hideDialog();
    },
    render: template
});

module.exports = DialogFrame;
