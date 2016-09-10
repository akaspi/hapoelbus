import * as _ from 'lodash';
import React from 'react';
import template from './homePage.rt';
import {connect} from 'react-redux';
import * as Constants from '../../utils/constants';
import {updateBooking} from '../../redux/actions/bookingActions';

const mapStateToProps = (state) => ({
  authData: state.authData,
  events: state.events,
  users: state.users,
  bookings: state.bookings
});

const mapDispatchToProps = dispatch => ({
  updateBooking: (uid, eventId, booking) => dispatch(updateBooking(uid, eventId, booking))
});

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      eventId: null
    }
  }

  getOpenEvents() {
    return _.omitBy(this.props.events, event => event.status === Constants.EVENTS_STATUS.CLOSED.value);
  }

  getClosedEvents() {
    return _.omitBy(this.props.events, event => event.status !== Constants.EVENTS_STATUS.CLOSED.value);
  }

  bookEvent(eventId) {
    this.setState({eventId});
  }

  isBookingEnabled(event) {
    switch (event.status) {
      case Constants.EVENTS_STATUS.OPEN_FOR_ALL.value:
        return true;
      case Constants.EVENTS_STATUS.OPEN_FOR_MEMBERS.value: {
        const user = this.props.users[this.props.authData.uid];
        return user.seasonTickets > 0
      }
      default:
        return false
    }
  }

  getEventName(event) {
    if (event.typeId) {
      return Constants.EVENTS_TYPES[event.typeId].name;
    }
  }

  getEventHapoelImage() {
    return 'http://hapoel.co.il/sites/default/files/logo120x120.png';
  }

  isRegisteredToEvent(event) {
    return false;
  }

  getEventImage(event) {
    if (event.typeId) {
      return Constants.EVENTS_TYPES[event.typeId].src;
    }
  }

  getEventDate(event) {
    if (event) {
      return event.day + '/' + event.month + '/' + event.year;
    }
  }

  getEventTime(event) {
    if (event) {
      return event.hour + ':' + event.minute;
    }
  }

  stopEditing() {
    this.setState({eventId: null});
  }

  updateBooking(booking) {
    this.props.updateBooking(this.props.authData.uid, this.state.eventId, booking);
    this.stopEditing();
  }


  render() {
    return template.apply(this);
  }
}

HomePage.propTypes = {
  authData: React.PropTypes.object
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomePage);