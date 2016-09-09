import React from 'react';
import template from './eventItem.rt';

class EventItem extends React.Component {
  render() {
    return template.apply(this);
  }
}

EventItem.propTypes = {
  name: React.PropTypes.string,
  time: React.PropTypes.string,
  imageSrc: React.PropTypes.string,
  date: React.PropTypes.string,
  closed: React.PropTypes.bool,
  booked: React.PropTypes.bool,
  isBookingEnabled: React.PropTypes.bool
};

module.exports = EventItem;