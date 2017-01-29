const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');

const Translations = require('../utils/translations');
const Constants = require('../utils/constants');

require('../styles/eventItem.scss');

function isBookingEnabled(event, user) {
    switch (event.status) {
        case Constants.GAME.STATUS.OPEN_FOR_ALL:
            return true;
        case Constants.GAME.STATUS.OPEN_FOR_MEMBERS: {
            return user.seasonTickets > 0
        }
        default:
            return false
    }
}

function mapStateToProps(state, ownProps) {
    const authData = state.authData;
    const users = state.users;
    const event = state.events[ownProps.eventId];
    const bookings = state.bookings;

    return {
        homeTeam: Constants.TEAMS.HAPOEL_JERUSALEM,
        awayTeam: Constants.TEAMS[event.typeId],
        status: event.status,
        date: event.day + '/' + event.month + '/' + event.year,
        time: event.hour + ':' + event.minute,
        isBookingAllowed: isBookingEnabled(event, users[authData.uid]),
        isBooked: _.hasIn(bookings, [authData.uid, ownProps.eventId])
    }
}

function createTeamLogos(home, away) {
    return (
        <div>
            <div className="groups-images medium-4 small-12 text-center medium-text-right column">
                <img className="event-image small hide-for-small-only" src={home.logo}/>
                <span className="group-text hide-for-small-only">{home.label}</span>

                <span className="hide-for-small-only separator"> - </span>

                <img className="event-image small hide-for-small-only" src={away.logo}/>
                <span className="group-text hide-for-small-only">{away.label}</span>
            </div>

            <div className="groups-names show-for-small-only text-center row">
                <div className="columns small-6">
                    <img className="event-image big" src={home.logo}/>
                    <span className="group-text small">{home.label}</span>
                </div>
                <div className="columns small-6">
                    <img className="event-image big" src={away.logo}/>
                    <span className="group-text small">{away.label}</span>
                </div>
            </div>
        </div>
    );
}

function createEventTimeAndDate(date, time, isOpenForBooking) {
    return (
        <div>
            <div className="event-info column medium-2 small-12 hide-for-small-only">
                { isOpenForBooking ? <span className="event-time">{time}</span> : null }
                <span className="event-date">{date}</span>
            </div>

            <div className="event-info column medium-2 small-12 show-for-small-only colored">
                { isOpenForBooking ? <span className="event-time">{time}</span> : null }
                <span className="event-date">{date}</span>
            </div>
        </div>
    );
}

function createFullyBookedLabel() {
    return (
        <div>
            <div className="event-info column medium-2 small-12 hide-for-small-only">
                <span className="event-status">{Translations.GAME.STATUS[Constants.GAME.STATUS.FULLY_BOOKED]}</span>
            </div>

            <div className="event-info column medium-2 small-12 show-for-small-only colored">
                <span className="event-status">{Translations.GAME.STATUS[Constants.GAME.STATUS.FULLY_BOOKED]}</span>
            </div>
        </div>
    );
}

function createBookingButton(isBookingAllowed, isBooked, onBooking) {
    const bookButton = (
        <span key="book-btn">
            <span>{Translations.GAME_ITEM.BOOK}</span>
            <i className="fa fa-bus" aria-hidden="true"/>
        </span>
    );

    const editBookingButton = (
        <span key="edit-btn">
            <span>{Translations.GAME_ITEM.EDIT_BOOKING}</span>
            <i className="fa fa-bus" aria-hidden="true"/>
        </span>
    );

    return (
        <a className="button success small" key="register-btn" onClick={isBookingAllowed ? onBooking : _.noop} disabled={!isBookingAllowed}>
            { isBooked ? editBookingButton : bookButton }
        </a>
    );
}

function createBookingCancellationButton(onCancelBooking) {
    return (
        <a className="button small alert" key="remove-btn" onClick={onCancelBooking}>
            <span>{Translations.GAME_ITEM.CANCEL_BOOKING}</span>
            <i className="fa fa-times" aria-hidden="true"/>
        </a>
    );
}

function createActionsButtons(isOpenForBooking, isBookingAllowed, isBooked, onBooking, onCancelBooking) {
    return (
        <div className="action-buttons medium-4 small-12 text-center medium-text-left column">
            { isOpenForBooking ? createBookingButton(isBookingAllowed, isBooked, onBooking) : null }
            { isOpenForBooking && isBooked ? createBookingCancellationButton(onCancelBooking) : null }
        </div>
    );
}

class EventItem extends React.Component {
    render() {
        const isOpenForBooking = this.props.status !== Constants.GAME.STATUS.CLOSED;
        const isFullyBooked = this.props.status === Constants.GAME.STATUS.FULLY_BOOKED;
        return (
            <div className="event-item row collapse">
                { createTeamLogos(this.props.homeTeam, this.props.awayTeam) }
                { createEventTimeAndDate(this.props.date, this.props.time, isOpenForBooking )}
                { isFullyBooked ? createFullyBookedLabel() : null }
                { createActionsButtons(isOpenForBooking, this.props.isBookingAllowed, this.props.isBooked, this.props.onBooking, this.props.onCancelBooking) }
            </div>
        );
    }
}

EventItem.propTypes = {
    homeTeam: React.PropTypes.shape({
        label: React.PropTypes.string,
        logo: React.PropTypes.string
    }).isRequired,
    awayTeam: React.PropTypes.shape({
        label: React.PropTypes.string,
        logo: React.PropTypes.string
    }).isRequired,
    date: React.PropTypes.string,
    time: React.PropTypes.string,
    status: React.PropTypes.string,
    isBookingAllowed: React.PropTypes.bool,
    isBooked: React.PropTypes.bool,
    onBooking: React.PropTypes.func,
    onCancelBooking: React.PropTypes.func
};

module.exports = ReactRedux.connect(mapStateToProps)(EventItem);