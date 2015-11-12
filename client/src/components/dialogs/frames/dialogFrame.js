'use strict';

var React = require('react');
var mui = require('material-ui');
var template = require('./dialogFrame.rt');
var muiMixin = require('../../mixins/mui-mixin');

var actionsCreator = require('../../../actions/actionsCreator');
var actionsConstants = require('../../../actions/actionsConstants');

var DialogFrame = React.createClass({
    propTypes:  {
        title: React.PropTypes.string,
        isModal: React.PropTypes.bool,
        onSubmit: React.PropTypes.func,
        onDismiss: React.PropTypes.func,
        contentClassName: React.PropTypes.string
    },
    mixins: [muiMixin],
    getDefaultProps: function () {
        return {
            title: '',
            isModal: false,
            contentClassName: ''
        };
    },
    componentDidMount: function () {
        this.refs.dialog.show();
    },
    onSubmit: function () {
        if (_.isFunction(this.props.onSubmit)) {
            this.props.onSubmit();
        }
        this.refs.dialog.dismiss();
    },
    onDismiss: function () {
        if (_.isFunction(this.props.onDismiss)) {
            this.props.onDismiss();
        }
        this.refs.dialog.dismiss();
    },
    closeDialog: function() {
        setTimeout(function () {
            actionsCreator.createAction(actionsConstants.CLOSE_DIALOG, {});
        }, 800);
    },
    render: template
});

module.exports = DialogFrame;
