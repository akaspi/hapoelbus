import React from 'react';
import * as _ from 'lodash';
import template from './eventForm.rt';
import {connect} from 'react-redux';
import * as constants from '../../utils/constants';

const eventForm = React.createClass({
  displayName: 'eventForm',

  propTypes: {},

  getInitialState() {
    return {
      eventId: 'hapoel-tlv',
      day: '',
      month: '',
      year: '',
      hour: '',
      minute: '',
      status: 'closed'
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

  getEventPicture() {
    return _.get(constants.EVENTS_TYPES, [this.state.eventId, 'src'])
  },
  onNumericChange(e){
    const value = _.toNumber(e.target.value);

    this.setState({
      [e.target.name]: value
    });
  },

  onBooleanChange(e){
    const value = Boolean(e.target.checked);

    this.setState({
      [e.target.name]: value
    });
  },
  render: template
});

module.exports = connect()(eventForm);