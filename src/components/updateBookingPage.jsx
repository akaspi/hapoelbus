const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');

const routingActions  = require('../redux/actions/routingActions');
const bookingActions  = require('../redux/actions/bookingActions');
const bookingFormTranslations  = require('../utils/translations/bookingFormTranslations');
const bookingsTranslations  = require('../utils/translations/bookingsTranslations');
const bookingsConstants  = require('../utils/bookingsConstants');

const FormFrame = require('./formFrame');

const emptyBooking = {
    paidSeats: 0,
    extraSeats: 0,
    pickUp: 'tlv',
    dropOff: 'tlv'
};

function mapStateToProps(state) {
    const routingParams = state.routing.current.params;
    const uid = routingParams.uid;
    const gameId = routingParams.gameId;
    const booking = _.get(state, ['bookings', uid, gameId], {});

    return {
        isAdmin: state.authData.isAdmin,
        uid,
        gameId,
        booking,
        userInfo: state.users[uid]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateBooking: (uid, gameId, booking) => dispatch(bookingActions.updateBooking(uid, gameId, booking)),
        cancelBooking: (uid, gameId) => dispatch(bookingActions.cancelBooking(uid, gameId)),
        navigateBack: () => dispatch(routingActions.navigateBack())
    };
}

function createPassengersSection(seasonTickets, paidSeats, extraSeats, onPaidSeatChange, onExtraSeatChange) {

    function createPaidSeatsInput() {
        const items = _.times(seasonTickets + 1, i => <option key={'paid-seat-' + i} value={i}>{i}</option>);

        return (
            <div className='small-6 columns'>
                <label>{bookingFormTranslations.PAID_SEATS}
                    <select value={paidSeats} onChange={onPaidSeatChange} name='paidSeats'>
                        { items }
                    </select>
                </label>
            </div>
        );
    }

    function createExtraSeatsInput() {
        const items = _.times(8, i => <option key={'extra-seat-' + i} value={i}>{i}</option>);

        return (
            <div className='small-6 columns end'>
                <label>{bookingFormTranslations.EXTRA_SEATS}
                    <select value={extraSeats} onChange={onExtraSeatChange} name='extraSeats'>
                        { items }
                    </select>
                </label>
            </div>
        );
    }

    return (
        <div className='row' key={'booking-form-passengers-section'}>
            { seasonTickets ? createPaidSeatsInput() : null }
            { createExtraSeatsInput() }
        </div>
    );
}

function createPickupSection(pickUpEnabled, pickUpStation, togglePickUp, onPickupStationChange) {
    return (
        <div className='row'>
            <div className='small-3 large-2 columns'>
                <label htmlFor='pickUpToggle'>{bookingFormTranslations.PICKUP_TOGGLE}</label>
                <div className='switch'>
                    <input type='checkbox' className='switch-input' id='pickUpToggle' checked={pickUpEnabled} onChange={togglePickUp} />
                    <label className='switch-paddle' htmlFor='pickUpToggle' />
                </div>
            </div>
            <div className='small-9 large-10 columns end more-space'>
                <select value={pickUpStation} onChange={onPickupStationChange} name='pickUp' disabled={!pickUpEnabled}>
                    <option value='' style={{display: 'none'}}>{bookingFormTranslations.PICKUP_STATION_DROPDOWN_DEFAULT}</option>
                    <option value={bookingsConstants.STATIONS.TEL_AVIV}>{bookingsTranslations.STATIONS.TEL_AVIV}</option>
                    <option value={bookingsConstants.STATIONS.MODIIN}>{bookingsTranslations.STATIONS.MODDIN}</option>
                </select>
            </div>
        </div>
    );
}

function createDropoffSection(dropOffEnabled, dropOffStation, toggleDropOff, onDropOffStationChange) {
    return (
        <div className='row'>
            <div className='small-3 large-2 columns'>
                <label htmlFor="dropOffToggle">{bookingFormTranslations.DROPOFF_TOGGLE}</label>
                <div className='switch'>
                    <input type='checkbox' className='switch-input' id='dropOffToggle' checked={dropOffEnabled} onChange={toggleDropOff} />
                    <label className="switch-paddle" htmlFor="dropOffToggle" />
                </div>
            </div>
            <div className='small-9 large-10 columns end more-space'>
                <select value={dropOffStation} onChange={onDropOffStationChange} name='dropOff' disabled={!dropOffEnabled}>
                    <option value='' style={{display: 'none'}}>{bookingFormTranslations.PICKUP_STATION_DROPDOWN_DEFAULT}</option>
                    <option value={bookingsConstants.STATIONS.TEL_AVIV}>{bookingsTranslations.STATIONS.TEL_AVIV}</option>
                    <option value={bookingsConstants.STATIONS.MODIIN}>{bookingsTranslations.STATIONS.MODDIN}</option>
                </select>
            </div>
        </div>
    );
}

class UpdateBookingPage extends React.Component {
    constructor(props) {
        super(props);

        const bookingInitialState = _.defaults(this.props.booking, { paidSeats: this.props.seasonTickets }, emptyBooking);

        this.state = _.merge(bookingInitialState, {
            pickUpEnabled: !!bookingInitialState.pickUp,
            dropOffEnabled: !!bookingInitialState.dropOff
        });
    }

    onPaidSeatChange = e => {
        this.setState({
            paidSeats: parseInt(e.target.value)
        });
    };

    onExtraSeatChange = e => {
        this.setState({
            extraSeats: parseInt(e.target.value)
        });
    };

    togglePickUp = e => {
        const pickUpEnabled = e.target.checked;
        this.setState({ pickUpEnabled });
        if (!pickUpEnabled) {
            this.setState({ pickUp: '' });
        }
    };

    onPickUpStationChange = e => {
        this.setState({
            pickUp: e.target.value
        });
    };

    toggleDropOff = e => {
        const dropOffEnabled = e.target.checked;
        this.setState({ dropOffEnabled });
        if (!dropOffEnabled) {
            this.setState({ dropOff: '' });
        }
    };

    onDropOffStationChange = e => {
        this.setState({
            dropOff: e.target.value
        });
    };

    isFormValid = () => {
        if (this.state.paidSeats === 0 && this.state.extraSeats === 0) {
            return false;
        }

        if (!this.state.pickUpEnabled && !this.state.dropOffEnabled) {
            return false;
        }

        if (this.state.pickUpEnabled && this.state.pickUp === '') {
            return false;
        }

        if (this.state.dropOffEnabled && this.state.dropOff === '') {
            return false;
        }

        return true;
    };

    onSubmit = () => {
        const bookingToUpdate = _.pick(this.state, _.keys(emptyBooking));
        this.props.updateBooking(this.props.uid, this.props.gameId, bookingToUpdate);
        this.props.navigateBack();
    };

    onRemove = () => {
        this.props.cancelBooking(this.props.uid, this.props.gameId);
        this.props.navigateBack();
    };

    render() {
        return(
            <FormFrame title={bookingFormTranslations.TITLE} onSubmit={this.onSubmit} onClose={this.props.navigateBack} onRemove={this.props.isAdmin ? this.onRemove: null} disabled={!this.isFormValid()}>
                <div className='booking-form small-11 small-centered'>
                    { createPassengersSection(this.props.userInfo.seasonTickets, this.state.paidSeats, this.state.extraSeats, this.onPaidSeatChange, this.onExtraSeatChange) }
                    { createPickupSection(this.state.pickUpEnabled, this.state.pickUp, this.togglePickUp, this.onPickUpStationChange) }
                    { createDropoffSection(this.state.dropOffEnabled, this.state.dropOff, this.toggleDropOff, this.onDropOffStationChange) }
                </div>
            </FormFrame>
        );
    }
}

UpdateBookingPage.propTypes = {
    uid: React.PropTypes.string.isRequired,
    isAdmin: React.PropTypes.bool.isRequired,
    gameId: React.PropTypes.string.isRequired,
    booking: React.PropTypes.object,
    userInfo: React.PropTypes.object.isRequired,
    updateBooking: React.PropTypes.func.isRequired,
    cancelBooking: React.PropTypes.func.isRequired,
    navigateBack: React.PropTypes.func.isRequired
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(UpdateBookingPage);