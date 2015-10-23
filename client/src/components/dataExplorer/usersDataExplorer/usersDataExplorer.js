'use strict';

var React = require('react');

var template = require('./usersDataExplorer.rt');
var muiMixin = require('../../mixins/mui-mixin');
var _ = require('lodash');

var paymentsStore = require('../../../stores/paymentsStore');

var usersDataActions = require('../../../actions/userActions');
var paymentsActions = require('../../../actions/paymentsActions');

var dataSchemas = require('../../../../../common/dataSchemas');

var FILTERS = {
    ALL_USERS: 'ALL_USERS',
    MEMBERS_ONLY: 'MEMBERS_ONLY',
    FREE_ONLY: 'FREE_ONLY',
    ASKED_FOR_MEMBERSHIP: 'ASKED_FOR_MEMBERSHIP'
};

function filterUsersData(filter, usersData) {
    switch (filter) {
        case FILTERS.ALL_USERS:
            return usersData;
        case FILTERS.MEMBERS_ONLY:
            return _.omit(usersData, function(userData) { return userData.maxSeats === 0 });
        case FILTERS.FREE_ONLY:
            return _.omit(usersData, function(userData) { return userData.maxSeats > 0 });
        case FILTERS.ASKED_FOR_MEMBERSHIP:
            return _.omit(usersData, function(userData) { return !userData.isPremium });
    }
}

var GamesExplorer = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function () {
        var paymentsState = paymentsStore.getAll();
        return {
            isPaymentsStorePending: paymentsState.pending,
            payments: paymentsState.payments,
            filter: FILTERS.ALL_USERS
        };
    },
    componentDidMount: function () {
        paymentsStore.registerToChange(this.onBookingStoreDataChanged);
        paymentsActions.fetchPayments();
    },
    onBookingStoreDataChanged: function(paymentsStoreData) {
        if (paymentsStoreData.pending) {
            this.setState({ isPaymentsStorePending: true });
        } else {
            this.setState({ payments: paymentsStoreData.payments, isPaymentsStorePending: false})
        }
    },
    componentWillUnmount: function() {
        paymentsStore.removeChangeListener(this.onBookingStoreDataChanged);
    },
    getTableSchema: function() {
        return _.merge({}, dataSchemas.UserData, dataSchemas.Payments);
    },
    getTableData: function() {
        var clonesUsersData = _.cloneDeep(this.props.usersData);
        var mappedUsers = _.mapValues(clonesUsersData, function(userData, uid) {
            userData.maxSeats = this.state.payments[uid] ? this.state.payments[uid].maxSeats : 0;
            return userData;
        }, this);
        return filterUsersData(this.state.filter, mappedUsers);
    },
    getFilterOptions: function() {
        return [
            { payload: FILTERS.ALL_USERS, text: 'כל המשתמשים' },
            { payload: FILTERS.MEMBERS_ONLY, text: 'מנויים בלבד' },
            { payload: FILTERS.FREE_ONLY, text: 'חד פעמיים בלבד' },
            { payload: FILTERS.ASKED_FOR_MEMBERSHIP, text: 'מבקשים לרכוש מנוי' }
        ];
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
