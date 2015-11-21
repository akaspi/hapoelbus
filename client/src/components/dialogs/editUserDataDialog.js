'use strict';

var React = require('react');
var template = require('./editUserDataDialog.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var defaultUser = {
    info: {},
    seasonTicket: {},
    contactRequest: true,
    distribution: {
        mail: true,
        sms: true
    }
};

var EditUserDataDialog = React.createClass({
    displayName: 'EditUserDataDialog',
    propTypes: {
        user: React.PropTypes.object.isRequired,
        uid: React.PropTypes.string.isRequired,
        title: React.PropTypes.string,
        isModal: React.PropTypes.bool
    },
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            user: _.defaultsDeep(_.cloneDeep(this.props.user), defaultUser)
        };
    },
    onSmsListChange: function (e, value) {
        var newUserState = _.merge(this.state.user, {
            distribution: {
                sms: value
            }
        });
        this.setState(newUserState);
    },

    onEmailListChange: function (e, value) {
        var newUserState = _.merge(this.state.user, {
            distribution: {
                email: value
            }
        });
        this.setState(newUserState);
    },

    onContactRequestChange: function (e, value) {
        var newUserState = _.merge(this.state.user, {
            contactRequest: value
        });
        this.setState(newUserState);
    },

    updateUser: function () {
        actionsCreator.createAction(actionsConstants.UPDATE_USER, {
            uid: this.props.uid,
            user: this.state.user
        });
    },

    render: template
});

module.exports = EditUserDataDialog;
