'use strict';

var React = require('react');
var template = require('./resetPasswordDialogContent.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var ResetPasswordDialogContent = React.createClass({
    displayName: 'ResetPasswordDialogContent',
    propTypes: {
        switchToLogin: React.PropTypes.func,
        switchToChangePassword: React.PropTypes.func,
        loading: React.PropTypes.bool,
        error: React.PropTypes.bool
    },
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            email: '',
            error: false,
            waitingForResetPasswordEmailToBeSent: false
        }
    },
    componentWillReceiveProps: function (nextProps) {
        if (this.props.error !== nextProps.error) {
            this.setState({error: nextProps.error});
        }
        if (this.state.waitingForResetPasswordEmailToBeSent && this.props.loading && !nextProps.loading) {
            if (nextProps.error) {
                this.setState({waitingForResetPasswordEmailToBeSent: false});
            }
            this.props.switchToChangePassword();
        }
    },
    getResetPasswordButtonLabel: function () {
        if (this.props.loading) {
            return 'מאפס סיסמא...';
        }
        return 'אפס סיסמא';
    },
    resetPassword: function () {
        this.setState({waitingForResetPasswordEmailToBeSent: true}, function () {
            actionsCreator.createAction(actionsConstants.RESET_PASSWORD, {
                email: this.state.email
            });
        }.bind(this))

    },
    render: template
});

module.exports = ResetPasswordDialogContent;
