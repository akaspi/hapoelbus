import * as _ from 'lodash';
import React from 'react';
import template from './bookingForm.rt';

const emptyBooking = {
  paidSeats: 1,
  extraSeats: 0
};

const bookingForm = React.createClass({
  displayName: 'BookingForm',

  propTypes: {
    onSubmit: React.PropTypes.func.isRequired,
    booking: React.PropTypes.object,
    onClose: React.PropTypes.func
  },

  getInitialState() {
    return _.defaults(this.props.booking, emptyBooking);
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

  onNumericChange(e) {
    const value = _.toNumber(e.target.value);

    this.setState({ [e.target.name]: value });
  },

  onBooleanChange(e) {
    const value = Boolean(e.target.checked);

    this.setState({ [e.target.name]: value });
  },

  onSubmit() {
    const booking = _.omit(this.state, val => val === '');
    this.props.onSubmit(booking);
  },

  render: template
});

module.exports = bookingForm;