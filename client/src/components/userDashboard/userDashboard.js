'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');

var template = require('./userDashboard.rt.js');

var navigationLabels = ['המשחקים הבאים', 'היסטוריית הרשמות', 'פרטים אישיים'];

var gamesStore = require('../../stores/gamesStore');
var bookingStore = require('../../stores/bookingStore');
var paymentsStore = require('../../stores/paymentsStore');
var occupiedStore = require('../../stores/occupiedStore');

var gamesActions = require('../../actions/gamesActions');
var paymentsActions = require('../../actions/paymentsActions');
var bookingActions = require('../../actions/bookingActions');
var occupiedActions = require('../../actions/occupiedActions');

var gamesConstants = require('../../constants/gamesConstants');

var UserDashboard = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {
        var gamesState = gamesStore.getAll();
        var bookingState = bookingStore.getAll();
        var paymentsState = paymentsStore.getAll();
        var occupiedState = occupiedStore.getAll();

        return {
            isGamesStorePending: gamesState.pending,
            isPaymentsStorePending: paymentsState.pending,
            isBookingStorePending: bookingState.pending,
            isOccupiedStorePending: occupiedState.pending,
            openGames: {},
            payments: {},
            booking: {},
            occupied: {}
        }
    },
    componentDidMount: function() {
        gamesStore.registerToChange(this.onGamesStoreDataChanged);
        paymentsStore.registerToChange(this.onPaymentsStoreDataChanged);
        bookingStore.registerToChange(this.onBookingStoreDataChanged);
        occupiedStore.registerToChange(this.onOccupiedStoreDataChanged);

        gamesActions.fetchGames();
        paymentsActions.fetchPayments(this.props.uid);
        bookingActions.fetchBooking(this.props.uid);
        occupiedActions.fetchOccupied();
    },
    componentWillUnmount: function() {
        gamesStore.removeChangeListener(this.onGamesStoreDataChanged);
        paymentsStore.removeChangeListener(this.onPaymentsStoreDataChanged);
        bookingStore.removeChangeListener(this.onBookingStoreDataChanged);
        occupiedStore.removeChangeListener(this.onOccupiedStoreDataChanged);
    },
    onGamesStoreDataChanged: function(gamesStoreData) {
        if (gamesStoreData.pending) {
            this.setState({ isGamesStorePending: true });
        } else {
            this.setState({
                openGames: _.omit(gamesStoreData.games, function(game) {
                    return game.status === gamesConstants.STATUS.CLOSED;
                }),
                isGamesStorePending: false
            });
        }
    },
    onPaymentsStoreDataChanged: function(paymentsStoreData) {
        if (paymentsStoreData.pending) {
            this.setState({ isPaymentsStorePending: true });
        } else {
            this.setState({
                payments: _.clone(paymentsStoreData.payments),
                isPaymentsStorePending: false
            });
        }
    },
    onBookingStoreDataChanged: function(bookingStoreData) {
        if (bookingStoreData.pending) {
            this.setState({ isBookingStorePending: true });
        } else {
            if (!_.isEqual(this.state.booking, bookingStoreData.booking)) {
                occupiedActions.fetchOccupied();
            }
            this.setState({
                booking: _.clone(bookingStoreData.booking),
                isBookingStorePending: false
            });
        }
    },
    onOccupiedStoreDataChanged: function(occupiedStoreData) {
        if (occupiedStoreData.pending) {
            this.setState({ isPaymentsStorePending: true });
        } else {
            this.setState({
                occupied: _.clone(occupiedStoreData.occupied),
                isPaymentsStorePending: false
            });
        }
    },
    getNavigationItems: function () {
        return navigationLabels;
    },
    onNavigation: function (navIndex) {
        this.setState({selectedTabIndex: navIndex});
    },
    render: template
});

module.exports = UserDashboard;