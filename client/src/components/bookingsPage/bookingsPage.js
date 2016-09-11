import * as _ from 'lodash';
import React from 'react';
import template from './bookingsPage.rt';
import {connect} from 'react-redux';
import * as Constants from '../../utils/constants';
import {updateBooking} from '../../redux/actions/bookingActions';

const getDropOffMap = bookings => _.chain(bookings)
  .omitBy(booking => !(booking.dropOff))
  .transform((acc, booking, uid) => {
    acc[booking.dropOff][uid] = booking
  }, {tlv: {}, modiin: {}})
  .value();

const getPickUpMap = bookings => _.chain(bookings)
  .omitBy(booking => !(booking.pickUp))
  .transform((acc, booking, uid) => {
    acc[booking.pickUp][uid] = booking
  }, {tlv: {}, modiin: {}})
  .value();



const mapStateToProps = (state) => ({
  bookings: state.bookings,
  events: state.events,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  updateBooking: (uid, eventId, booking) => dispatch(updateBooking(uid, eventId, booking))
});

class BookingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingUserId: null,
      eventId: _.last(_.keys(this.props.events)),
      filter: 'PICKUP'
    };
  }

  getVisibleBookings() {
    const bookingForEventMap = _.chain(this.props.bookings)
      .mapValues(userBookings => userBookings[this.state.eventId])
      .omitBy(_.isUndefined)
      .value();

    return {
      pickUp: getPickUpMap(bookingForEventMap),
      dropOff: getDropOffMap(bookingForEventMap)
    }
  }

  handleFilterChange(filter) {
    this.setState({ filter });
  }

  onEventIdChange(eventId) {
    this.setState({eventId});
  }

  onBookingClick(uid) {
    this.setState({editingUserId: uid});
  }

  getEventPrintTitle() {
    if (this.state.eventId) {
      const currentEvt = this.props.events[this.state.eventId];
      return Constants.EVENTS_TYPES[currentEvt.typeId].name + ' - ' + currentEvt.day + '/' + currentEvt.month + '/' + currentEvt.year;
    }
  }

  getBookingTitle(uid) {
    const user = this.props.users[uid];
    return user.firstName + ' ' + user.lastName;
  }

  getBookingPhone(uid) {
    const user = this.props.users[uid];
    return user.phonePrefix + '-' + user.phoneNumber;
  }

  getBookingSubtitles(booking, uid) {
    const subtitles = [];

    if (booking.paidSeats > 0) {
      subtitles.push('מנויים: ' + booking.paidSeats);
    }
    if (booking.extraSeats > 0) {
      subtitles.push('חד פעמי: ' + booking.extraSeats);
    }
    if (booking.pickUp) {
      subtitles.push('הלוך: ' + Constants.STATIONS[booking.pickUp]);
    }
    if (booking.dropOff) {
      subtitles.push('חזור: ' + Constants.STATIONS[booking.dropOff]);
    }

    if (uid) {
      subtitles.push('טל׳: ' + this.getBookingPhone(uid));
    }

    return subtitles;
  }

  getBookingImage() {
    return 'http://image.flaticon.com/icons/svg/147/147125.svg';
  }

  stopEditing() {
    this.setState({editingUserId: null, filter: ''});
  }

  updateBooking(booking) {
    this.props.updateBooking(this.state.editingUserId, this.state.eventId, booking);
    this.stopEditing();
  }

  render() {
    return template.apply(this);
  }

}

BookingsPage.propTypes = {
  bookings: React.PropTypes.object.isRequired,
  events: React.PropTypes.object.isRequired,
  users: React.PropTypes.object.isRequired,
  updateBooking: React.PropTypes.func.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(BookingsPage);