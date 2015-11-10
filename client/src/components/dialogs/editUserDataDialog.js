'use strict';

var React = require('react');
var template = require('./editUserDataDialog.rt');
var muiMixin = require('../mixins/mui-mixin');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var defaultUser = {
    info: {},
    seasonTicket: {},
    contactRequest: false,
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
    mixins: [muiMixin, deepLinkStateMixin],
    getInitialState: function () {
        return _.defaultsDeep(_.cloneDeep(this.props.user), defaultUser);
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState(_.defaultsDeep(_.cloneDeep(nextProps.user), defaultUser))
    },
    onSmsListChange: function (e, value) {
        var newState = _.merge({}, this.state, {
            distribution: {
                sms: value
            }
        });
        this.setState(newState);
    },

    onEmailListChange: function (e, value) {
        var newState = _.merge({}, this.state, {
            distribution: {
                mail: value
            }
        });
        this.setState(newState);
    },

    onContactRequestChange: function (e, val) {
        var newState = _.merge({}, this.state, {
            contactRequest: val
        });
        this.setState(newState);
    },

    updateUser: function () {
        actionsCreator.createAction(actionsConstants.UPDATE_USER, {
            uid: this.props.uid,
            user: this.state
        });
        this.hideDialog();
    },

    getActionButtons: function() {
        return {
            okButton: {
                label: 'שמור',
                onClick: this.updateUser
            },
            cancelButton: {
                label: 'בטל',
                onClick: this.hideDialog
            }
        }
    },

    showDialog: function() {
        this.refs.dialog.show();
    },

    hideDialog: function () {
        this.refs.dialog.dismiss();
    },

    render: template
});

module.exports = EditUserDataDialog;
