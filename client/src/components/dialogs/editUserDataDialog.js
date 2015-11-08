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

var TestDialog = React.createClass({
    mixins: [muiMixin, deepLinkStateMixin],
    getInitialState: function () {
        return _.defaults(_.cloneDeep(this.props.data.user), defaultUser);
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

    getDialogTitle: function() {
        if (this.props.data.createMode) {
            return 'אאא';
        }
        return 'עריכת פרטי משתמע';
    },

    updateUser: function () {
        actionsCreator.createAction(actionsConstants.UPDATE_USER, {
            uid: this.props.data.uid,
            user: this.state
        });
    },

    render: template
});

module.exports = TestDialog;
