'use strict';

var React = require('react/addons');

var template = require('./usersDataExplorer.rt.js');
var muiMixin = require('../../mixins/mui-mixin');
var _ = require('lodash');

var paymentsStore = require('../../../stores/paymentsStore');

var usersDataActions = require('../../../actions/userActions');
var paymentsActions = require('../../../actions/paymentsActions');

var dataConverterUtil = require('../../../utils/dataConverterUtil');
var dataSchemas = require('../../../utils/dataSchemas');

var GamesExplorer = React.createClass({
    getInitialState: function () {
        var paymentsState = paymentsStore.getAll();
        return {
            isPaymentsStorePending: paymentsState.pending,
            payments: paymentsState.payments
        };
    },
    componentDidMount: function () {
        paymentsStore.registerToChange(this.onEmailsStoreDataChanged);
        paymentsActions.fetchPayments();
    },
    onEmailsStoreDataChanged: function(paymentsStoreData) {
        if (paymentsStoreData.pending) {
            this.setState({ isPaymentsStorePending: true });
        } else {
            this.setState({ payments: paymentsStoreData.payments, isPaymentsStorePending: false})
        }
    },
    componentWillUnmount: function() {
        paymentsStore.removeChangeListener(this.onEmailsStoreDataChanged);
    },
    getTableSchema: function() {
        return _.merge({}, dataSchemas.UserData, dataSchemas.Payments);
    },
    getTableData: function() {
        var clonesUsersData = _.cloneDeep(this.props.usersData);
        return _.mapValues(clonesUsersData, function(userData, uid) {
            userData.maxSeats = this.state.payments[uid] ? this.state.payments[uid].maxSeats : 0;
            return userData;
        }, this);
    },
    onUpdateGame: function(uid, data) {
        var userData = _.pick(data, _.keys(dataSchemas.UserData));
        var paymentsData = _.pick(data, _.keys(dataSchemas.Payments));
        paymentsActions.updatePayment(uid, paymentsData);
        usersDataActions.updateUserData(uid, userData);
    },
    render: template
});

module.exports = GamesExplorer;
