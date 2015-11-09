'use strict';

var React = require('react');
var template = require('./loginDialogContent.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var LoginDialogContent = React.createClass({
    displayName: 'LoginDialogContent',
    propTypes: {
        switchToCreateAccount: React.PropTypes.func,
        switchToForgotPassword: React.PropTypes.func,
        loading: React.PropTypes.bool,
        error: React.PropTypes.bool
    },
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            email: '',
            password: '',
            error: false
        }
    },
    componentWillReceiveProps: function (nextProps) {
        if (this.props.error !== nextProps.error) {
            this.setState({error: nextProps.error});
        }
    },
    getLoginButtonLabel: function () {
        if (this.props.loading) {
            return 'מתחבר...';
        }
        return 'התחבר';
    },
    login: function () {
        actionsCreator.createAction(actionsConstants.LOGIN, {
            email: this.state.email,
            password: this.state.password.toString()
        });
    },
    render: template
});

module.exports = LoginDialogContent;
