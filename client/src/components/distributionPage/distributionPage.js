import * as _ from 'lodash';
import React from 'react';
import template from './distributionPage.rt';
import { connect } from 'react-redux';

import { sendTemplateEmail, sendCustomEmail, sendSMS } from '../../redux/actions/distributionActions';

import * as Constants from '../../utils/constants';

const getUsersEmails = (users, membersOnly) => _.chain(users)
  .omitBy(user => !user.subscribeMail)
  .omitBy(user => membersOnly && (!user.seasonTickets || user.seasonTickets === 0))
  .map(user => user.email)
  .compact()
  .value();

const getUsersPhoneNumbers = (users, membersOnly) => _.chain(users)
  .omitBy(user => !user.subscribeSMS)
  .omitBy(user => membersOnly && (!user.seasonTickets || user.seasonTickets === 0))
  .map(user => user.phonePrefix + user.phoneNumber)
  .compact()
  .value();

const getEventSubstitutions = event => ({
  '-DEPARTURE-': `${event.hour}:${event.minute}`,
  '-DATE-': `${event.day}/${event.month}/${event.year}`,
  '-NAME-': Constants.EVENTS_TYPES[event.typeId].name
});

const getInitialState = events => ({
  distributionMethod: 'email',
  recipientsType: Constants.DISTRIBUTION.RECIPIENTS.ALL.value,
  distributionType: 'template',
  eventId: _.last(_.keys(events)),
  templateId: Constants.DISTRIBUTION.TEMPLATES.EVENT_OPEN_FOR_MEMBERS.id,
  subject: '',
  content: ''
});

const mapStateToProps = state => ({
  events: state.events,
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
    const sendToMembersOnly = (this.state.recipientsType === Constants.DISTRIBUTION.RECIPIENTS.MEMBERS_ONLY.value);
    if (this.state.distributionMethod === Constants.DISTRIBUTION.METHODS.EMAIL) {
      const recipients = getUsersEmails(this.props.users, sendToMembersOnly);
      if (this.state.distributionType === Constants.DISTRIBUTION.TYPES.TEMPLATE) {
        const substitutions = getEventSubstitutions(this.props.events[this.state.eventId]);
        this.props.sendTemplateEmail(recipients, this.state.templateId, substitutions);
      } else {
        this.props.sendCustomEmail(recipients, this.state.subject, this.state.content);
      }
    } else {
      const recipients = getUsersPhoneNumbers(this.props.users, sendToMembersOnly);
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