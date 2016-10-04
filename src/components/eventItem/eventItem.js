import React from 'react';
import template from './eventItem.rt';

class EventItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBookingClick() {
    if (this.props.isBookingEnabled) {
      this.props.onBookingClick();
    }
  }

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
  isBookingEnabled: React.PropTypes.bool,
  onBookingClick: React.PropTypes.func
};

module.exports = EventItem;