import * as _ from 'lodash';
import React from 'react';
import template from './bookingsPage.rt';
import { connect } from 'react-redux';
import * as Constants from '../../utils/constants';
import { updateBooking } from '../../redux/actions/bookingActions';

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
      eventId: _.last(_.keys(this.props.events))
    };
  }

  getVisibleBookings() {
    return _.chain(this.props.bookings)
      .mapValues(userBookings => userBookings[this.state.eventId])
      .omitBy(_.isUndefined)
      .map((booking, uid) => ({ uid, booking }))
      .value();
  }

  onEventIdChange(eventId) {
    this.setState({ eventId });
  }

  onBookingClick(uid) {
    this.setState({ editingUserId: uid });
  }

  getBookingTitle(uid) {
    const user = this.props.users[uid];
    return user.firstName + ' ' + user.lastName;
  }

  getBookingSubtitles(booking) {
    const subtitles = [];
    if (booking.paidSeats > 0) {
      subtitles.push('מנויים: ' + booking.paidSeats);
    }
    if (booking.extraSeats > 0) {
      subtitles.push('חד פעמי: ' + booking.extraSeats);
    }
    if (booking.pickUp) {
      subtitles.push('תחנת עליה: ' + Constants.STATIONS[booking.pickUp]);
    }
    if (booking.dropOff) {
      subtitles.push('תחנת ירידה: ' + Constants.STATIONS[booking.dropOff]);
    }
    return subtitles;
  }

  getBookingImage() {
    return 'http://image.flaticon.com/icons/svg/171/171867.svg';
  }

  stopEditing() {
    this.setState({ editingUserId: null, filter: '' });
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