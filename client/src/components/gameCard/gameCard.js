'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');
var template = require('./gameCard.rt.js');
var gamesConstants = require('../../constants/gamesConstants');
var userDataConstants = require('../../constants/userDataConstants');

var GameCard = React.createClass({
    mixins: [muiMixin, React.addons.LinkedStateMixin],
    getInitialState: function () {
        return {
            bookingMode: true
        }
    },
    shouldEnableBooking: function () {
        var userIsAMember = this.props.userType === userDataConstants.USER_TYPES.MEMBER;
        var gameIsOpenForMembers = this.props.status === gamesConstants.STATUS.OPEN_FOR_MEMBERS;
        var gameIsOpenForAll = this.props.status === gamesConstants.STATUS.OPEN_FOR_ALL;
        return (gameIsOpenForMembers && userIsAMember) || gameIsOpenForAll;
    },
    goToBookingMode: function () {
        this.setState({bookingMode: true});
    },
    updateBooking: function() {
        this.setState({bookingMode: false});
    },
    getUsersDataFilterItems: function() {
        return [
            { payload: 1, text: 'תל אביב' },
            { payload: 2, text: 'מודיעין' }
        ];
    },
    render: template
});

module.exports = GameCard;
