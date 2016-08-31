import * as _ from 'lodash';
import React from 'react';
import template from './distributionPage.rt';
import { connect } from 'react-redux';

import { sendTemplateEmail } from '../../redux/actions/distributionActions';

import * as Constants from '../../utils/constants';

const getInitialState = events => ({
  distributionMethod: 'email',
  distributionType: 'template',
  eventId: _.last(_.keys(events)),
  subject: '',
  content: ''
});

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  sendTemplateEmail: (recipients, templateId, substitutions) => dispatch(sendTemplateEmail(recipients, templateId, substitutions))
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

  onDistributionTypeChange(e) {
    this.setState({ distributionType: e.target.value });
  }

  onEventChange(e) {
    this.setState({ eventId: e.target.value });
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
    console.log('SEND!');
    this.setState(getInitialState(this.getOpenEvents()));
  }

  render() {
    return template.apply(this);
  }

}

DistributionPage.propTypes = {
  events: React.PropTypes.object.isRequired,
  sendTemplateEmail: React.PropTypes.func.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(DistributionPage);