import * as _ from 'lodash';
import React from 'react';
import template from './bookingForm.rt';

const emptyBooking = {
  paidSeats: 0,
  extraSeats: 0,
  pickUp: 'tlv',
  dropOff: 'tlv'
};

const bookingForm = React.createClass({
  displayName: 'BookingForm',

  propTypes: {
    onSubmit: React.PropTypes.func.isRequired,
    onBookingCancel: React.PropTypes.func,
    booking: React.PropTypes.object,
    onClose: React.PropTypes.func
  },

  getInitialState() {
    const booking = _.defaults(this.props.booking, { paidSeats: this.props.seasonTickets }, emptyBooking);
    return _.merge({}, booking, {
      pickUpEnabled: !!booking.pickUp,
      dropOffEnabled: !!booking.dropOff
    });
  },

  onChange(e, validationType) {
    const value = e.target.value;

    if (validationType === 'numeric') {
      if (!/^[0-9]*$/.test(value)) {
        return;
      }
    }

    if (validationType === 'hebrew') {
      if (!/^[א-ת\s]*$/.test(value)) {
        return;
      }
    }

    this.setState({
      [e.target.name]: value
    });
  },

  togglePickUp(e) {
    const pickUpEnabled = e.target.checked;
    this.setState({ pickUpEnabled });
    if (!pickUpEnabled) {
      this.setState({ pickUp: '' });
    }
  },

  toggleDropOff(e) {
    const dropOffEnabled = e.target.checked;
    this.setState({ dropOffEnabled });
    if (!dropOffEnabled) {
      this.setState({ dropOff: '' });
    }
  },

  onNumericChange(e) {
    const value = _.toNumber(e.target.value);

    this.setState({ [e.target.name]: value });
  },

  isFormValid() {
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
  },

  onSubmit() {
    const bookingToSubmit = _.pick(this.state, _.keys(emptyBooking));
    this.props.onSubmit(bookingToSubmit);
  },

  render: template
});

module.exports = bookingForm;