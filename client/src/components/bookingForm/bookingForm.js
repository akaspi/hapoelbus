import React from 'react';
import * as _ from 'lodash';
import template from './bookingForm.rt';
import { connect } from 'react-redux';

const bookingForm = React.createClass({
  displayName: 'bookingForm',

  propTypes: {},

  getInitialState() {
    return {
      userId: '',
      eventId: 'hapoel_tlv'
    };
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
  render: template
});

module.exports = connect()(bookingForm);