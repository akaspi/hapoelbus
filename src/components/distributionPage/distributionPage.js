import * as _ from 'lodash';
import React from 'react';
import template from './distributionPage.rt';
import { connect } from 'react-redux';

import { sendTemplateEmail, sendCustomEmail, sendSMS } from '../../redux/actions/distributionActions';

import * as Constants from '../../utils/constants';

function getMembersUsersOnly(users) {
  return _.pickBy(users, user => user.seasonTickets && user.seasonTickets > 0);
}

function getBookedUsersOnly(users, bookings, eventId) {
  return _.pickBy(users, (user, uid) => _.has(bookings[uid], eventId));
}

function getRecipients(users, recipientsType, bookings, eventId) {
  let recipientsUsers = _.pickBy(users, user => user.subscribeMail);

  switch (recipientsType) {
    case Constants.DISTRIBUTION.RECIPIENTS.MEMBERS_ONLY.value:
      recipientsUsers = getMembersUsersOnly(recipientsUsers);
      break;
    case Constants.DISTRIBUTION.RECIPIENTS.BOOKED_TO_EVENT.value:
      recipientsUsers = getBookedUsersOnly(recipientsUsers, bookings, eventId);
      break;
  }

  return recipientsUsers;
}

function getUsersEmails(users, recipientsType, bookings, eventId) {
  const recipients = getRecipients(users, recipientsType, bookings, eventId);
  return _.map(recipients, user => user.email);
}

function getUsersPhoneNumbers(users, recipientsType, bookings, eventId) {
  const recipients = getRecipients(users, recipientsType, bookings, eventId);
  return _.map(recipients, user => user.phonePrefix + user.phoneNumber);
}

const getEventSubstitutions = event => ({
  '-DEPARTURE-': `${event.hour}:${event.minute}`,
  '-DATE-': `${event.day}/${event.month}/${event.year}`,
  '-NAME-': Constants.EVENTS_TYPES[event.typeId].name
});

const prepareCustomMailContentForSend = content => '<p dir=\'rtl\'>' + content.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '</p>';

const getInitialState = events => ({
  distributionMethod: 'email',
  recipientsType: Constants.DISTRIBUTION.RECIPIENTS.MEMBERS_ONLY.value,
  distributionType: 'template',
  eventId: _.last(_.keys(events)),
  templateId: Constants.DISTRIBUTION.TEMPLATES.EVENT_OPEN_FOR_MEMBERS.id,
  subject: '',
  content: ''
});

const mapStateToProps = state => ({
  events: state.events,
  bookings: state.bookings,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  sendTemplateEmail: (recipients, templateId, substitutions) => dispatch(sendTemplateEmail(recipients, templateId, substitutions)),
  sendCustomEmail: (recipients, subject, content) => dispatch(sendCustomEmail(recipients, subject, content)),
  sendSMS: (recipients, message) => dispatch(sendSMS(recipients, message)),
});

class DistributionPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = getInitialState(this.getOpenEvents());
  }

  getOpenEvents() {
    return _.omitBy(this.props.events,
      event => event.status !== Constants.EVENTS_STATUS.OPEN_FOR_MEMBERS.value && event.status !== Constants.EVENTS_STATUS.OPEN_FOR_ALL.value
    );
  }

  onDistributionMethodChange(e) {
    this.setState({ distributionMethod: e.target.value });
  }

  onRecipientsTypeChange(e) {
    this.setState({ recipientsType: e.target.value });
  }

  onDistributionTypeChange(e) {
    this.setState({ distributionType: e.target.value });
  }

  onTemplateIdChange(e) {
    this.setState({ templateId: e.target.value });
  }

  onEventChange(e) {
    this.setState({ eventId: e.target.value });
  }

  onSubjectChange(e) {
    this.setState({ subject: e.target.value });
  }

  onContentChange(e) {
    this.setState({ content: e.target.value });
  }

  isDistributionTypeVisible() {
    return this.state.distributionMethod === Constants.DISTRIBUTION.METHODS.EMAIL;
  }

  isEventsVisible() {
    return this.isDistributionTypeVisible() && this.state.distributionType === Constants.DISTRIBUTION.TYPES.TEMPLATE;
  }

  isCustomTitleVisible() {
    return this.state.distributionMethod === Constants.DISTRIBUTION.METHODS.EMAIL &&
      this.state.distributionType === Constants.DISTRIBUTION.TYPES.CUSTOM;
  }

  isCustomContentVisible() {
    return (
      this.state.distributionMethod === Constants.DISTRIBUTION.METHODS.EMAIL &&
      this.state.distributionType === Constants.DISTRIBUTION.TYPES.CUSTOM
      ) || this.state.distributionMethod === Constants.DISTRIBUTION.METHODS.SMS;
  }

  send() {
    if (this.state.distributionMethod === Constants.DISTRIBUTION.METHODS.EMAIL) {
      const recipients = getUsersEmails(this.props.users, this.state.recipientsType, this.props.bookings, this.state.eventId);
      if (_.isEmpty(recipients)) {
        return;
      }
      if (this.state.distributionType === Constants.DISTRIBUTION.TYPES.TEMPLATE) {
        const substitutions = getEventSubstitutions(this.props.events[this.state.eventId]);
        this.props.sendTemplateEmail(recipients, this.state.templateId, substitutions);
      } else {
        this.props.sendCustomEmail(recipients, this.state.subject, prepareCustomMailContentForSend(this.state.content));
      }
    } else {
      const recipients = getUsersPhoneNumbers(this.props.users, this.state.recipientsType, this.props.bookings, this.state.eventId);
      if (_.isEmpty(recipients)) {
        return;
      }
      this.props.sendSMS(recipients, this.state.content);
    }

    this.setState(getInitialState(this.getOpenEvents()));
  }

  render() {
    return template.apply(this);
  }

}

DistributionPage.propTypes = {
  events: React.PropTypes.object.isRequired,
  users: React.PropTypes.object.isRequired,
  sendTemplateEmail: React.PropTypes.func.isRequired,
  sendCustomEmail: React.PropTypes.func.isRequired,
  sendSMS: React.PropTypes.func.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(DistributionPage);