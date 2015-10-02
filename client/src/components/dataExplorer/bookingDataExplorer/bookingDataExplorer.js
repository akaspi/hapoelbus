'use strict';

var React = require('react/addons');

var template = require('./bookingDataExplorer.rt.js');
var muiMixin = require('../../mixins/mui-mixin');
var _ = require('lodash');

var bookingStore = require('../../../stores/bookingStore');
var bookingActions = require('../../../actions/bookingActions');

var gamesConstants = require('../../../constants/gamesConstants');

var dataSchemas = require('../../../../../common/dataSchemas');
var dateUtils = require('../../../../../common/dateUtils');

function filterOpenGames(games) {
    return _.omit(games, function(game) {
        return game.status === gamesConstants.STATUS.CLOSED;
    })
}

var GamesExplorer = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function () {
        var bookingState = bookingStore.getAll();
        return {
            isBookingStorePending: bookingState.pending,
            booking: bookingState.booking,
            gameId: _.first(_.keys(filterOpenGames(this.props.games)))
        };
    },
    componentDidMount: function () {
        bookingStore.registerToChange(this.onBookingStoreDataChanged);
        bookingActions.fetchBooking();
    },
    onBookingStoreDataChanged: function(bookingStoreData) {
        if (bookingStoreData.pending) {
            this.setState({ isBookingStorePending: true });
        } else {
            this.setState({ booking: bookingStoreData.booking, isBookingStorePending: false})
        }
    },
    componentWillUnmount: function() {
        bookingStore.removeChangeListener(this.onBookingStoreDataChanged);
    },
    getTableSchema: function() {
        return _.merge({}, _.pick(dataSchemas.UserData, ['displayName']), dataSchemas.Booking);
    },
    getTableData: function() {
        return _.compact(_.map(this.state.booking, function(val, uid) {
            var bookingForGame = val[this.state.gameId];
            if (bookingForGame) {
                bookingForGame.displayName = this.props.usersData[uid].displayName;
            }
            return bookingForGame;
        }, this));
    },
    getGamesOptions: function() {
        var gameVSIDOptions = dataSchemas.Game.vsid.options;
        return _.reduce(filterOpenGames(this.props.games), function (accum, game, gameId) {
            var VSIDTitle = _.find(gameVSIDOptions, { value: game.vsid }).title;
            accum.push({
                title: VSIDTitle + ' - ' + dateUtils.convertDate(game.date),
                value: gameId
            });
            return accum;
        }, [], this);
    },
    render: template
});

module.exports = GamesExplorer;
