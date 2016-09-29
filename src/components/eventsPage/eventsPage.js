import * as _ from 'lodash';
import React from 'react';
import template from './eventsPage.rt';
import { connect } from 'react-redux';
import { createEvent, updateEvent, removeEvent } from '../../redux/actions/eventActions';

import * as Constants from '../../utils/constants';

const pickEvents = {
  ALL: () => true,
  ['OPEN']: event => event.status === Constants.EVENTS_STATUS.OPEN_FOR_ALL.value || event.status === Constants.EVENTS_STATUS.OPEN_FOR_MEMBERS.value,
  ['CLOSED']: event => event.status === Constants.EVENTS_STATUS.CLOSED.value,
};

const getStatusSubtitle = event => {
  const eventStatus = _.find(Constants.EVENTS_STATUS, { value: event.status });
  return eventStatus ? eventStatus.name : '';
};

const mapStateToProps = (state) => ({
  events: state.events,
  authData: state.authData
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  updateEvent: (eventId, event) => dispatch(updateEvent(eventId, event)),
  removeEvent: (eventId) => dispatch(removeEvent(eventId))
});

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingEventId: null,
      createMode: false,
      filter: 'OPEN'
    };
  }

  getVisibleEvents() {
    return _.chain(this.props.events)
      .pickBy(pickEvents[this.state.filter])
      .map((event, eventId) => ({ eventId, event }))
      .value();
  }

  getOpenEvents() {
    return _.pickBy(this.props.events, pickEvents['OPEN']);
  }

  getClosedEvents() {
    return _.pickBy(this.props.events, pickEvents['CLOSED']);
  }

  handleFilterChange(filter) {
    this.setState({ filter });
  }

  getEventTitle(event) {
    return Constants.EVENTS_TYPES[event.typeId].name;
  }

  getEventSubtitles(event) {
    return [
      'תאריך: ' + `${event.day}/${event.month}/${event.year}`, // eslint-disable-line no-useless-concat
      'שעה: ' +  `${event.hour}:${event.minute}`, // eslint-disable-line no-useless-concat
      getStatusSubtitle(event)
    ];
  }

  getEventImage(event) {
    const eventType = Constants.EVENTS_TYPES[event.typeId];
    return eventType.src || 'http://image.flaticon.com/icons/svg/138/138776.svg';
  }

  onEventClick(eventId) {
    this.setState({ editingEventId: eventId });
  }

  onCreateEventClick() {
    this.setState({ createMode: true });
  }

  stopEditing() {
    this.setState({ editingEventId: null, createMode: false });
  }

  updateEvent(event) {
    if (this.state.createMode) {
      this.props.createEvent(event);
    } else {
      this.props.updateEvent(this.state.editingEventId, event);
    }
    this.stopEditing();
  }

  removeEvent() {
    this.props.removeEvent(this.state.editingEventId);
    this.stopEditing();
  }

  render() {
    return template.apply(this);
  }
}

EventsPage.propTypes = {
  authData: React.PropTypes.object.isRequired,
  events: React.PropTypes.object.isRequired,
  createEvent: React.PropTypes.func.isRequired,
  updateEvent: React.PropTypes.func.isRequired,
  removeEvent: React.PropTypes.func.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(EventsPage);