import * as _ from 'lodash';
import React from 'react';
import template from './eventsPage.rt';
import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../../redux/actions/eventActions';

import * as Constants from '../../utils/constants';

const getStatusSubtitle = event => {
  const eventStatus = _.find(Constants.EVENTS_STATUS, { value: event.status });
  return eventStatus ? eventStatus.name : '';
};

const mapStateToProps = (state) => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  updateEvent: (eventId, event) => dispatch(updateEvent(eventId, event))
});

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingEventId: null,
      createMode: false
    };
  }

  getVisibleEvents() {
    return _.chain(this.props.events)
      .map((event, eventId) => ({ eventId, event }))
      .value();
  }

  getEventTitle(event) {
    return Constants.EVENTS_TYPES[event.typeId].name;
  }

  getEventSubtitles(event) {
    return [
      `${event.day}/${event.month}/${event.year}`,
      `${event.hour}:${event.minute}`,
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

  render() {
    return template.apply(this);
  }
}

EventsPage.propTypes = {
  events: React.PropTypes.object.isRequired,
  createEvent: React.PropTypes.func.isRequired,
  updateEvent: React.PropTypes.func.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(EventsPage);