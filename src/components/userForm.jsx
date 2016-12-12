const _ = require('lodash');
const React = require('react');
const ReactRedux= require('react-redux');

const FormFrame = require('./formFrame');

const userInfoConstants = require('../utils/userInfoConstants');
const userFormTranslations = require('../utils/translations/userFormTranslations');
const userActions = require('../redux/actions/userActions');

const emptyUser = {
    firstName: '',
    lastName: '',
    phonePrefix: '050',
    phoneNumber: '',
    station: 'tlv',
    subscribeSMS: true,
    subscribeMail: true,
    seasonTickets: 0
};

function getEmptyUserInfo(email) {
  return _.assign(emptyUser, { email });
}

function mapStateToProps(state, ownProps) {
    const user = state.users[ownProps.uid];
    const authData = state.authData;

    return {
        userInfo: user || getEmptyUserInfo(authData.email),
        isAdminMode: authData.isAdmin,
        allowUserRemove: authData.isAdmin && authData.uid !== ownProps.uid
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateUser: user => dispatch(userActions.updateUser(ownProps.uid, user)),
        removeUser: () => dispatch(userActions.removeUser(ownProps.uid))
    };
}

function onRemove() {
    console.log('onRemove');
}

function createAdminSection(seasonTickets, onNumberChange) {
  return (
      <div className="row" key="seasonTickets">
        <div className="small-12 columns">
          <label>כמות מנויים
            <select name="seasonTickets" value={seasonTickets} onChange={onNumberChange}>
                { _.times(userInfoConstants.MAX_SEASON_TICKETS, i => <option key={'amount-' + i} value={i}>{i}</option>) }
            </select>
          </label>
        </div>
      </div>
  );
}

function createUserNameInputs(firstName, lastName, onTextChange) {
    return (
        <div className="row">
            <div className="large-6 columns">
                <label>{ userFormTranslations.FIRST_NAME }
                    <input type="text" name="firstName" value={firstName} onChange={onTextChange} maxLength="20" />
                </label>
            </div>
            <div className="large-6 columns">
                <label>{ userFormTranslations.LAST_NAME }
                    <input type="text" name="lastName" value={lastName} onChange={onTextChange} maxLength="20" />
                </label>
            </div>
        </div>
    );
}

function createEmailInput(email, onTextChange) {
    return (
        <div className="row" key="user-info-email-input">
            <div className="large-12 columns">
                <label>{ userFormTranslations.EMAIL }
                    <input type="email" name="email" value={email} onChange={onTextChange} />
                </label>
            </div>
        </div>
    );
}

function createPhoneNumberInputs(phonePrefix, phoneNumber, onTextChange) {
    return (
        <div className="row">
            <div className="small-8 columns">
                <label>{ userFormTranslations.PHONE_NUMBER }
                    <input type="tel" name="phoneNumber" value={phoneNumber} onChange={onTextChange} maxLength="7" />
                </label>
            </div>
            <div className="small-4 columns end">
                <label>{ userFormTranslations.PHONE_PREFIX }
                    <select name="phonePrefix" value={phonePrefix} onChange={onTextChange}>
                        { _.map(userInfoConstants.PHONE_PREFIXES, prefix => <option key={'phone-prefix-' + prefix} value={prefix}>{prefix}</option>)}
                    </select>
                </label>
            </div>
        </div>
    );
}

function createPickupStationRow(station, requestForMembership, onTextChange, onBooleanChange) {

    function createPickUpStationInput() {
        return (
            <div className="medium-8 small-12 columns">
                <label>{ userFormTranslations.FAVORITE_PICKUP_STATION }
                    <select name="station" value={station} onChange={onTextChange}>
                        { _.map(userInfoConstants.STATIONS, station => <option key={'station-' + station} value={station}>{ userFormTranslations.STATIONS[station] }</option>)}
                    </select>
                </label>
            </div>
        );
    }

    function createRequestForMembershipInput() {
        return (
            <div className="medium-4 small-12 columns">
                <label>{ userFormTranslations.REQUEST_FOR_MEMBERSHIP }
                    <select name="requestForMembership" value={requestForMembership} onChange={onBooleanChange}>
                        <option value={undefined} style={{display: 'none'}}>בחר</option>
                        <option value={true}>כן</option>
                        <option value={false}>לא</option>
                    </select>
                </label>
            </div>
        );
    }

    return (
        <div className="row">
            { createPickUpStationInput() }
            { createRequestForMembershipInput() }
        </div>
    );
}

function createDistributionInputs(subscribeMail, subscribeSMS, onBooleanChange) {
    return (
        <div className="row">
            <div className="small-3 column">
                <label>{ userFormTranslations.DISTRIBUTION.EMAIL }</label>
                <div className="switch">
                    <input type="checkbox" className="switch-input" name="subscribeMail" id="subscribeMail" onChange={onBooleanChange} checked={subscribeMail} />
                    <label className="switch-paddle" htmlFor="subscribeMail">
                        <span className="switch-active" aria-hidden="true">{ userFormTranslations.TOGGLE.YES }</span>
                        <span className="switch-inactive" aria-hidden="true">{ userFormTranslations.TOGGLE.NO }</span>
                    </label>
                </div>
            </div>
            <div className="small-3 column end">
                <label>{ userFormTranslations.DISTRIBUTION.SMS }</label>
                <div className="switch">
                    <input type="checkbox" className="switch-input" name="subscribeSMS" id="subscribeSMS" onChange={onBooleanChange} checked={subscribeSMS} />
                    <label className="switch-paddle" htmlFor="subscribeSMS">
                        <span className="switch-active" aria-hidden="true">{ userFormTranslations.TOGGLE.YES }</span>
                        <span className="switch-inactive" aria-hidden="true">{ userFormTranslations.TOGGLE.NO }</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = _.clone(this.props.userInfo);
  }

  isFormValid = () => {
      const hasAllRequiredInfo = () => {
          const requiredInfo = _.pick(this.state, ['firstName', 'lastName', 'phonePrefix', 'phoneNumber']);
          return !_.some(requiredInfo, _.isEmpty);
      };

      const hasValidPhoneNumber = () => {
          return this.state.phoneNumber.length === 7;
      };

      const hasRequestForMembershipProperty = () => {
          return _.has(this.state, 'requestForMembership');
      };

      return hasAllRequiredInfo() && hasValidPhoneNumber() && hasRequestForMembershipProperty();
  };

  onKeyPress = e => {
    if (e.key === 'Enter' && isFormValid(this.state)) {
      this.props.updateUser(this.state);
    }
  };

  onChange = (type, e) => {
      let value = e.target.value;
      if (type === 'boolean') {
          if (e.target.type === 'checkbox') {
              value = e.target.checked;
          } else if (e.target.type === 'select-one') {
              value = (value !== 'false');
          } else {
              value = Boolean(value);
          }
      } else if (type === 'number') {
          value = parseInt(value);
      }

      this.setState({ [e.target.name]: value });
  };

  onSubmit = () => {
      this.props.updateUser(this.state);
      if (_.isFunction(this.props.onClose)) {
          this.props.onClose();
      }
  };

  render() {
      const onTextChange = this.onChange.bind(this, 'text');
      const onNumberChange = this.onChange.bind(this, 'number');
      const onBooleanChange = this.onChange.bind(this, 'boolean');


    return (
        <FormFrame title={userFormTranslations.TITLE}
                   onSubmit={this.onSubmit}
                   onRemove={this.props.allowUserRemove ? this.props.removeUser : null}
                   onClose={this.props.onClose}
                   disabled={!this.isFormValid()}>

          <div className="small-centered user-container" onKeyPress={this.onKeyPress}>

              { createUserNameInputs(this.state.firstName, this.state.lastName, onTextChange) }
              { this.props.userInfo.email ? null : createEmailInput(this.state.email, onTextChange) }
              { createPhoneNumberInputs(this.state.phonePrefix, this.state.phoneNumber, onTextChange, onNumberChange) }
              { createPickupStationRow(this.state.station, this.state.requestForMembership, onTextChange, onBooleanChange) }

              { this.props.isAdminMode ? createAdminSection(this.state.seasonTickets, onNumberChange) : null }

              { createDistributionInputs(this.state.subscribeMail, this.state.subscribeSMS, onBooleanChange) }

          </div>

        </FormFrame>
    );
  }
}

UserForm.PropTypes = {
    uid: React.PropTypes.string.isRequired,
    updateUser: React.PropTypes.func.isRequired,
    removeUser: React.PropTypes.func.isRequired,
    isAdminMode: React.PropTypes.bool,
    allowUserRemove: React.PropTypes.bool,
    userInfo: React.PropTypes.shape({}),
    onClose: React.PropTypes.func
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(UserForm);