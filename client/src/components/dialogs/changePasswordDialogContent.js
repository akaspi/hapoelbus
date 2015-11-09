'use strict';

var React = require('react');
var template = require('./changePasswordDialogContent.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var ChangePasswordDialogContent = React.createClass({
    displayName: 'ChangePasswordDialogContent',
    propTypes: {
        switchToLogin: React.PropTypes.func,
        loading: React.PropTypes.bool,
        error: React.PropTypes.bool
    },
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            email: '',
            oldPassword: '',
            newPassword: '',
            error: false
        };
    },
    componentWillReceiveProps: function (nextProps) {
        if (this.props.error !== nextProps.error) {
            this.setState({error: nextProps.error});
        }
    },
    getChangePasswordButtonLabel: function () {
        if (this.props.loading) {
            return 'משנה סיסמא...';
        }
        return 'שנה סיסמא והתחבר';
    },
    changePassword: function () {
        actionsCreator.createAction(actionsConstants.CHANGE_PASSWORD, {
            email: this.state.email,
            oldPassword: this.state.oldPassword.toString(),
            newPassword: this.state.newPassword.toString()
        });
    },
    render: template
});

module.exports = ChangePasswordDialogContent;
