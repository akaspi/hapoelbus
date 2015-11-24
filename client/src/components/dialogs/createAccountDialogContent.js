'use strict';

var React = require('react');
var template = require('./createAccountDialogContent.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var CreateAccountDialogContent = React.createClass({
    displayName: 'CreateAccountDialogContent',
    propTypes: {
        switchToLogin: React.PropTypes.func,
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
    getCreateAccountButtonLabel: function () {
        if (this.props.loading) {
            return 'יוצר חשבון...';
        }
        return 'צור חשבון';
    },
    createUser: function () {
        actionsCreator.createAction(actionsConstants.CREATE_USER, {
            email: this.state.email,
            password: this.state.password.toString()
        });
    },
    render: template
});

module.exports = CreateAccountDialogContent;
