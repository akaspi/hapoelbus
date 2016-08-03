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
      day: '01',
      month: '12',
      year: '2017',
      hour: '22',
      minute: '35',
      status: 'closed'
    };
  },
  componentDidMount() {
    this.checkIfHtml5Supported();
  },

  checkIfHtml5Supported(){
    const supportedInputTypes = ['date', 'time'];
    const testResult = {};
    const testString = 'test!';

    _.each(supportedInputTypes, (inputType)=> {
      const input = document.createElement('input');
      input.type = inputType;
      input.value = testString;
      const isSupported = input.value !== testString;
      testResult[inputType + 'InputSupported'] = isSupported;
    });

    this.setState(testResult);
    console.log(testResult);
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

  getTimeValue(){
    return _.chain(this.state).pick(['hour', 'minute']).map().value().join(":");
  },

  onTimeChange (e){
    const val = e.target.value.split(':');
    this.setState({hour: val[0], minute: val[1]});

  },

  getDateValue(){
    return _.chain(this.state).pick(['year', 'month', 'day']).map().value().join("-");
  },

  onDateChange(e){
    const val = e.target.value.split('-');
    this.setState({year: val[0], month: val[1], day: val[2]});

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