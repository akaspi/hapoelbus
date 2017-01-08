const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');
const classNames = require('classnames');

const Constants = require('../utils/constants');
const Translations = require('../utils/translations');

const teamsData = require('../utils/teamsData');
const routingActions = require('../redux/actions/routingActions');

const PageTitle = require('./pageTitle');
const ListItem = require('./listItem');

const TABS = {
    PICKUP: 'pickUp',
    DROPOFF: 'dropOff'
};

require('../styles/bookingsPage.scss');

function mapStateToProps(state) {
    return {
        bookings: state.bookings,
        games: state.events,
        users: state.users,
        query: {
            gameId: state.routing.current.params.gameId || _.findKey(state.events, {status: Constants.GAME.STATUS.OPEN_FOR_MEMBERS}) || _.findKey(state.events, {status: Constants.GAME.STATUS.OPEN_FOR_ALL}) ||  _.findKey(state.events, {status: Constants.GAME.STATUS.CLOSED}),
            filter: state.routing.current.params.filter || TABS.PICKUP
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        editBooking: (gameId, uid) => dispatch(routingActions.navigateTo(Constants.ROUTING.PAGES.UPDATE_BOOKING, { gameId, uid })),
        changeFilter: filter => dispatch(routingActions.replace(null, { filter })),
        changeGameId: gameId => dispatch(routingActions.replace(null, { gameId }))
    };
}

function getBookingTitle(user) {
    return user.firstName + ' ' + user.lastName;
}

function getBookingPhone(user) {
    return user.phonePrefix + '-' + user.phoneNumber;
}

function getBookingSubtitles(booking, user) {
    const subtitles = [];

    if (booking.paidSeats > 0) {
        subtitles.push('מנויים: ' + booking.paidSeats);
    }
    if (booking.extraSeats > 0) {
        subtitles.push('חד פעמי: ' + booking.extraSeats);
    }
    if (booking.pickUp) {
        subtitles.push('הלוך: ' + Translations.STATIONS[booking.pickUp]);
    }
    if (booking.dropOff) {
        subtitles.push('חזור: ' + Translations.STATIONS[booking.dropOff]);
    }

    if (user) {
        subtitles.push('טל׳: ' + getBookingPhone(user));
    }

    return subtitles;
}

function getBookingImage(user) {
    return user.photoURL || 'http://image.flaticon.com/icons/svg/189/189991.svg';
}

function getPickUpMap(bookings) {
    return _.chain(bookings)
        .omitBy(booking => !(booking.pickUp))
        .transform((acc, booking, uid) => {
            acc[booking.pickUp][uid] = booking; // eslint-disable-line no-param-reassign
        }, { tlv: {}, modiin: {} })
        .value();
}

function getDropOffMap(bookings) {
    return _.chain(bookings)
        .omitBy(booking => !(booking.dropOff))
        .transform((acc, booking, uid) => {
            acc[booking.dropOff][uid] = booking; // eslint-disable-line no-param-reassign
        }, { tlv: {}, modiin: {} })
        .value();
}

function getVisibleBookings(bookings, gameId) {
    const bookingForEventMap = _.chain(bookings)
        .mapValues(userBookings => userBookings[gameId])
        .omitBy(_.isUndefined)
        .value();

    return {
        pickUp: getPickUpMap(bookingForEventMap),
        dropOff: getDropOffMap(bookingForEventMap)
    };
}

function countPickups(visibleBookings) {
    const tlvPickUpsPaid = _.chain(visibleBookings.pickUp.tlv)
        .values()
        .sumBy('paidSeats')
        .value();

    const tlvPickUpsExtra = _.chain(visibleBookings.pickUp.tlv)
        .values()
        .sumBy('extraSeats')
        .value();

    const modiinPickUpsPaid = _.chain(visibleBookings.pickUp.modiin)
        .values()
        .sumBy('paidSeats')
        .value();

    const modiinPickUpsExtra = _.chain(visibleBookings.pickUp.modiin)
        .values()
        .sumBy('extraSeats')
        .value();

    return tlvPickUpsPaid + tlvPickUpsExtra + modiinPickUpsPaid + modiinPickUpsExtra;
}

function countDropOffs(visibleBookings) {
    const tlvDropOffsPaid = _.chain(visibleBookings.dropOff.tlv)
        .values()
        .sumBy('paidSeats')
        .value();

    const tlvDropOffsExtra = _.chain(visibleBookings.dropOff.tlv)
        .values()
        .sumBy('extraSeats')
        .value();

    const modiinDropOffsPaid = _.chain(visibleBookings.dropOff.modiin)
        .values()
        .sumBy('paidSeats')
        .value();

    const modiinDropOffsExtra = _.chain(visibleBookings.dropOff.modiin)
        .values()
        .sumBy('extraSeats')
        .value();

    return tlvDropOffsPaid + tlvDropOffsExtra + modiinDropOffsPaid + modiinDropOffsExtra;
}

function createPageTitle() {
    return (
        <div className='hide-for-print'>
            <PageTitle title={Translations.BOOKINGS_PAGE.TITLE} />
        </div>
    );
}

function createFilterSection(filter, gameId, onFilterChange, onGameIdChange, visibleBookings, games) {

    function onTabClick(tab) {
        onFilterChange(tab);
    }

    function onSelectChange(e) {
        onGameIdChange(e.target.value);
    }

    return (
        <div className='filtering row expanded collapse hide-for-print'>
            <div className='column small-12 large-6'>
                <ul className='menu'>
                    <li className={classNames({active: filter === TABS.PICKUP})}>
                        <a onClick={onTabClick.bind(this, TABS.PICKUP)}>
                            <span>{Translations.BOOKINGS_PAGE.TABS.PICKUP}</span>
                            <span>({countPickups(visibleBookings)})</span>
                        </a>
                    </li>
                    <li className={classNames({active: filter === TABS.DROPOFF})}>
                        <a onClick={onTabClick.bind(this, TABS.DROPOFF)}>
                            <span>{Translations.BOOKINGS_PAGE.TABS.DROPOFF}</span>
                            <span>({countDropOffs(visibleBookings)})</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='column small-12 large-6'>
                <div className='search'>
                    <select value={gameId} onChange={onSelectChange}>
                        {
                            _.map(games, (game, gameId) =>
                                <option key={'game-' + gameId} value={gameId}>
                                    {game.day}/{game.month}/{game.year} - {teamsData[game.typeId].label}
                                </option>)
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}

function createBookingTableForPrint(user, visibleBookings, tlvBookings, modiinBookings, isPickUp) {
    function createTitleRow() {
        return (
            <tr key='title-label'>
                <td colspan='6'>
                    <span>{isPickUp ? 'הלוך' : 'חזור'}</span>
                    <span> ({isPickUp ? countPickups(visibleBookings) : countDropOffs(visibleBookings)})</span>
                </td>
            </tr>
        );
    }

    function createTLVBookingsTitle() {
        return (
            <tr key='tlvPickUp'>
                <td colspan="6" className="table-sub">
                    <span>תל אביב</span>
                </td>
            </tr>
        );
    }

    function createTLVBookingsRows() {
        return (
            _.map(tlvBookings, (booking, uid) => (
                <tr key={'tlv-booking-row-' + uid}>
                    <td>{getBookingTitle(user)}</td>
                    <td>{getBookingPhone(user)}</td>
                    <td>{booking.paidSeats}</td>
                    <td>{booking.extraSeats}</td>
                    <td>{Translations.STATIONS[booking.pickUp]}</td>
                    <td>{Translations.STATIONS[booking.dropOff]}</td>
                </tr>
            ))
        );
    }

    function createModiinBookingsTitle() {
        return (
            <tr key='modiinPickUp'>
                <td colspan="6" className='table-sub'>
                    <span>מודיעין</span>
                </td>
            </tr>
        );
    }

    function createModiinBookingsRows() {
        return (
            _.map(modiinBookings, (booking, uid) => (
                <tr key={'modiin-booking-row-' + uid}>
                    <td>{getBookingTitle(user)}</td>
                    <td>{getBookingPhone(user)}</td>
                    <td>{booking.paidSeats}</td>
                    <td>{booking.extraSeats}</td>
                    <td>{Translations.STATIONS[booking.pickUp]}</td>
                    <td>{Translations.STATIONS[booking.dropOff]}</td>
                </tr>
            ))
        );
    }

    return (
        <table>
            <thead>
                { _.size(modiinBookings) !== 0 || _.size(tlvBookings) !== 0 ? createTitleRow() : null }
                <tr>
                    <th>שם</th>
                    <th>טלפון</th>
                    <th>מנויים</th>
                    <th>בתשלום</th>
                    <th>תחנת עליה</th>
                    <th>תחנת ירידה</th>
                </tr>
            </thead>
            <tbody>
                { _.size(tlvBookings) > 0 ? createTLVBookingsTitle() : null }
                { _.size(tlvBookings) > 0 ? createTLVBookingsRows() : null }
                { _.size(modiinBookings) > 0 ? createModiinBookingsTitle() : null }
                { _.size(modiinBookings) > 0 ? createModiinBookingsRows() : null }
            </tbody>
        </table>
    );
}

function createPickUpsList(visibleBookings, onBookingClick, users) {
    const tlvPickUp = visibleBookings.pickUp.tlv;
    const modiinPickUp = visibleBookings.pickUp.modiin;

    function onItemClick(uid) {
        onBookingClick(uid);
    }

    const tlvPickUpsItems = _.map(tlvPickUp, (booking, uid) => (
        <ListItem
            key={'pickup-tlv-' + uid}
            title={getBookingTitle(users[uid])}
            subtitles={getBookingSubtitles(booking, users[uid])}
            imageSrc={getBookingImage(users[uid])}
            onClick={onItemClick.bind(this, uid)}
        />
    ));

    const midiinPickUpsItems = _.map(modiinPickUp, (booking, uid) => (
        <ListItem
            key={'pickup-midiin-' + uid}
            title={getBookingTitle(users[uid])}
            subtitles={getBookingSubtitles(booking, users[uid])}
            imageSrc={getBookingImage(users[uid])}
            onClick={onItemClick.bind(this, uid)}
        />
    ));

    function createTlvPickupsList() {
        return (
            <div>
                <h6>תל אביב</h6>
                { tlvPickUpsItems }
            </div>
        )
    }

    function createModiinPickupsList() {
        return (
            <div>
                <h6>מודיעין</h6>
                { midiinPickUpsItems }
            </div>
        )
    }

    return (
        <div>
            <div className='pick-up-container row hide-for-print' key='pick-up-container'>
                { _.size(tlvPickUp) !== 0 || _.size(modiinPickUp) !== 0 ? <h5>הלוך</h5> : null }
                { _.size(tlvPickUp) > 0 ? createTlvPickupsList() : null }
                { _.size(modiinPickUp) > 0 ? createModiinPickupsList() : null }
            </div>

            <div className='pickUp-table show-for-print' key='pickUp-table'>
                { createBookingTableForPrint(users, visibleBookings, tlvPickUp, modiinPickUp, true) }
            </div>
        </div>
    );
}

function createDropOffList(visibleBookings, onBookingClick, users) {
    const tlvDropOff = visibleBookings.dropOff.tlv;
    const modiinDropOff = visibleBookings.dropOff.modiin;

    function onItemClick(uid) {
        onBookingClick(uid);
    }

    const tlvDropOffItems = _.map(tlvDropOff, (booking, uid) => (
        <ListItem
            key={'pickup-tlv-' + uid}
            title={getBookingTitle(users[uid])}
            subtitles={getBookingSubtitles(booking, users[uid])}
            imageSrc={getBookingImage(users[uid])}
            onClick={onItemClick.bind(this, uid)}
        />
    ));

    const midiinDropOffItems = _.map(modiinDropOff, (booking, uid) => (
        <ListItem
            key={'pickup-midiin-' + uid}
            title={getBookingTitle(users[uid])}
            subtitles={getBookingSubtitles(booking, users[uid])}
            imageSrc={getBookingImage(users[uid])}
            onClick={onItemClick.bind(this, uid)}
        />
    ));

    function createTlvDropOffList() {
        return (
            <div>
                <h6>תל אביב</h6>
                { tlvDropOffItems }
            </div>
        )
    }

    function createModiinDropOffList() {
        return (
            <div>
                <h6>מודיעין</h6>
                { midiinDropOffItems }
            </div>
        )
    }

    return (
        <div>
            <div className='drop-off-container row hide-for-print' key='drop-off-container'>
                { _.size(tlvDropOff) !== 0 || _.size(modiinDropOff) !== 0 ? <h5>חזור</h5> : null }
                { _.size(tlvDropOff) > 0 ? createTlvDropOffList() : null }
                { _.size(modiinDropOff) > 0 ? createModiinDropOffList() : null }
            </div>
            <div className='dropOff-table show-for-print' key='dropOff-table'>
                { createBookingTableForPrint(users, visibleBookings, tlvDropOff, modiinDropOff, false) }
            </div>
        </div>
    );
}

class BookingsPage extends React.Component {
    onFilterChange = filter => {
        this.props.changeFilter(filter);
    };

    onGameIdChange = gameId => {
        this.props.changeGameId(gameId);
    };

    onBookingClick = uid => {
        this.props.editBooking(this.props.query.gameId, uid);
    };

    render() {
        const visibleBookings = getVisibleBookings(this.props.bookings, this.props.query.gameId);
        return (
            <div className='ֿsmall-centered dashboard-page bookings-page'>
                { createPageTitle() }
                { createFilterSection(this.props.query.filter, this.props.query.gameId, this.onFilterChange, this.onGameIdChange, visibleBookings, this.props.games) }
                { this.props.query.filter === TABS.PICKUP ? createPickUpsList(visibleBookings, this.onBookingClick, this.props.users) : createDropOffList(visibleBookings, this.onBookingClick, this.props.users) }
            </div>
        );
    }
}

BookingsPage.propTypes = {
    bookings: React.PropTypes.object.isRequired,
    games: React.PropTypes.object.isRequired,
    users: React.PropTypes.object.isRequired,
    query: React.PropTypes.object.isRequired,
    editBooking: React.PropTypes.func.isRequried,
    changeFilter: React.PropTypes.func.isRequried,
    changeGameId: React.PropTypes.func.isRequried
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(BookingsPage);