'use strict';

var React = require('react');
var template = require('./editUserDataDialog.rt');
var muiMixin = require('../mixins/mui-mixin');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var TestDialog = React.createClass({
    mixins: [muiMixin, deepLinkStateMixin],
    getInitialState: function () {
        return _.clone(this.props.data.userData);
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

    updateUserData: function () {
        console.log(this.state);
    },

    render: template
});

module.exports = TestDialog;
