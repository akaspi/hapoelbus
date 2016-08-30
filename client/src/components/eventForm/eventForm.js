import React from 'react';
import * as _ from 'lodash';
import template from './eventForm.rt';
import * as Constants from '../../utils/constants';

const emptyEvent = {
  typeId: '',
  day: '01',
  month: '01',
  year: '2017',
  hour: '17',
  minute: '00',
  status: Constants.EVENTS_STATUS.CLOSED.value
};

const eventForm = React.createClass({
  displayName: 'eventForm',

  propTypes: {
    onSubmit: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func,
    eventId: React.PropTypes.string,
    event: React.PropTypes.object
  },

  getInitialState() {
    return _.defaults(this.props.event, emptyEvent, { dateInputSupported: true, timeInputSupported: true });
  },

  componentDidMount() {
    this.checkIfHtml5Supported();
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
    return _.get(Constants.EVENTS_TYPES, [this.state.eventId, 'src']);
  },

  getTimeValue() {
    return _.chain(this.state)
      .pick(['hour', 'minute'])
      .map()
      .value()
      .join(':');
  },

  onTimeChange(e) { // eslint-disable-line react/sort-comp
    const val = e.target.value.split(':');
    this.setState({ hour: val[0], minute: val[1] });
  },

  getDateValue() {
    return _.chain(this.state)
      .pick(['year', 'month', 'day'])
      .map()
      .value()
      .join('-');
  },

  onNumericChange(e) {
    const value = _.toNumber(e.target.value);

    this.setState({ [e.target.name]: value });
  },

  checkIfHtml5Supported() {
    const supportedInputTypes = ['date', 'time'];
    const testResult = {};
    const testString = 'test!';

    _.each(supportedInputTypes, (inputType) => {
      const input = document.createElement('input');
      input.type = inputType;
      input.value = testString;
      const isSupported = input.value !== testString;
      testResult[inputType + 'InputSupported'] = isSupported;
    });

    this.setState(testResult);
  },

  onDateChange(e) {
    const val = e.target.value.split('-');
    this.setState({ year: val[0], month: val[1], day: val[2] });
  },

  onBooleanChange(e) {
    const value = Boolean(e.target.checked);

    this.setState({ [e.target.name]: value });
  },

  isFormValid() {
    return !!(this.state.typeId);
  },

  onSubmit() {
    const event = _.omit(this.state, ['timeInputSupported', 'dateInputSupported']);
    this.props.onSubmit(event);
  },

  render: template
});

module.exports = eventForm;