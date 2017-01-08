const _ = require('lodash');
const React = require('react');
const ReactReudx = require('react-redux');

const distributionActions = require('../redux/actions/distributionActions');
const distributionConstants = require('../utils/distributionConstants');
const teamsData = require('../utils/teamsData');
const gameConstants = require('../utils/gameConstants');
const distributionPageTranslations = require('../utils/translations/distributionPageTranslations');

const PageTitle = require('./pageTitle');

require('../styles/distributionPage.scss');

function mapStateToProps(state) {
    return {
        users: state.users,
        games: state.events,
        bookings: state.bookings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendTemplateEmail: (recipients, templateId, substitutions) => dispatch(distributionActions.sendTemplateEmail(recipients, templateId, substitutions)),
        sendCustomEmail: (recipients, subject, content) => dispatch(distributionActions.sendCustomEmail(recipients, subject, content)),
        sendSMS: (recipients, message) => dispatch(distributionActions.sendSMS(recipients, message)),
    };
}

function getInitialState(games) {
    return {
        distributionMethod: distributionConstants.DISTRIBUTION_METHODS.EMAIL,
        recipientsType: distributionConstants.RECIPIENTS_TYPES.MEMBERS_ONLY,
        distributionType: distributionConstants.DISTRIBUTION_TYPES.TEMPLATE,
        templateId: distributionConstants.TEMPLATES.EVENT_OPEN_FOR_MEMBERS,
        gameId: _.last(_.keys(getOpenGames(games))),
        subject: '',
        content: ''
    };
}

function getMembersUsersOnly(users) {
    return _.pickBy(users, user => user.seasonTickets && user.seasonTickets > 0);
}

function getBookedUsersOnly(users, bookings, gameId) {
    return _.pickBy(users, (user, uid) => _.has(bookings[uid], gameId));
}

function getRecipients(users, recipientsType, bookings, gameId) {
    let recipientsUsers = _.pickBy(users, user => user.subscribeMail);

    switch (recipientsType) {
        case distributionConstants.RECIPIENTS_TYPES.MEMBERS_ONLY:
            recipientsUsers = getMembersUsersOnly(recipientsUsers);
            break;
        case distributionConstants.RECIPIENTS_TYPES.BOOKED_TO_EVENT:
            recipientsUsers = getBookedUsersOnly(recipientsUsers, bookings, gameId);
            break;
    }

    return recipientsUsers;
}

function getUsersEmails(users, recipientsType, bookings, gameId) {
    const recipients = getRecipients(users, recipientsType, bookings, gameId);
    return _.map(recipients, user => user.email);
}

function getEventSubstitutions(game) {
    return {
        '-DEPARTURE-': `${game.hour}:${game.minute}`,
        '-DATE-': `${game.day}/${game.month}/${game.year}`,
        '-NAME-': teamsData[game.typeId].label
    }
}

function prepareCustomMailContentForSend(content) {
    return '<p dir=\'rtl\'>' + content.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '</p>';
}

function getUsersPhoneNumbers(users, recipientsType, bookings, gameId) {
    const recipients = getRecipients(users, recipientsType, bookings, gameId);
    return _.map(recipients, user => user.phonePrefix + user.phoneNumber);
}

function createDistributionMethodInput(distributionMethod, onDistributionMethodChange) {
    return (
        <div className='medium-8 small-12 columns small-centered more-space'>
            <label>{distributionPageTranslations.DISTRIBUTION_METHOD.TITLE}
                <select value={distributionMethod} onChange={onDistributionMethodChange}>
                    <option value={distributionConstants.DISTRIBUTION_METHODS.EMAIL}>{distributionPageTranslations.DISTRIBUTION_METHOD.EMAIL}</option>
                    <option value={distributionConstants.DISTRIBUTION_METHODS.SMS}>{distributionPageTranslations.DISTRIBUTION_METHOD.SMS}</option>
                </select>
            </label>
        </div>
    );
}

function createRecipientsTypeInput(recipientsType, onRecipientsTypeChange) {
    return (
        <div className='medium-8 small-12 columns small-centered'>
            <label>{distributionPageTranslations.RECIPIENTS_TYPES.TITLE}
                <select value={recipientsType} onChange={onRecipientsTypeChange}>
                    <option value={distributionConstants.RECIPIENTS_TYPES.ALL}>
                        {distributionPageTranslations.RECIPIENTS_TYPES.ALL}
                    </option>
                    <option value={distributionConstants.RECIPIENTS_TYPES.MEMBERS_ONLY}>
                        {distributionPageTranslations.RECIPIENTS_TYPES.MEMBERS_ONLY}
                    </option>
                    <option value={distributionConstants.RECIPIENTS_TYPES.BOOKED_TO_EVENT}>
                        {distributionPageTranslations.RECIPIENTS_TYPES.BOOKED_TO_EVENT}
                    </option>
                </select>
            </label>
        </div>
    );
}

function createDistributionTypeInput(distributionType, onDistributionTypeChange) {
    return (
        <div className='medium-8 small-12 columns small-centered' key="distribution-distributionType-input">
            <label>{distributionPageTranslations.DISTRIBUTION_TYPES.TITLE}
                <select value={distributionType} onChange={onDistributionTypeChange}>
                    <option value={distributionConstants.DISTRIBUTION_TYPES.TEMPLATE}>{distributionPageTranslations.DISTRIBUTION_TYPES.TEMPLATE}</option>
                    <option value={distributionConstants.DISTRIBUTION_TYPES.CUSTOM}>{distributionPageTranslations.DISTRIBUTION_TYPES.CUSTOM}</option>
                </select>
            </label>
        </div>
    );
}

function createTemplateSelection(templateId, onTemplateIdChange) {
    return (
        <div className='medium-8 small-12 columns small-centered' key='distribution-template-selection'>
            <label>{distributionPageTranslations.TEMPLATES.TITLE}
                <select value={templateId} onChange={onTemplateIdChange}>
                    <option value={distributionConstants.TEMPLATES.EVENT_OPEN_FOR_MEMBERS}>{distributionPageTranslations.TEMPLATES.EVENT_OPEN_FOR_MEMBERS}</option>
                    <option value={distributionConstants.TEMPLATES.EVENT_OPEN_FOR_ALL}>{distributionPageTranslations.TEMPLATES.EVENT_OPEN_FOR_ALL}</option>
                    <option value={distributionConstants.TEMPLATES.CHANGE_EVENT_DETAILS}>{distributionPageTranslations.TEMPLATES.CHANGE_EVENT_DETAILS}</option>
                </select>
            </label>
        </div>
    );
}

function createGamesSelection(games, gameId, onGameChange) {
    const options = _.map(games, (game, gameId) => <option key={'game-' + gameId} value={gameId}>{teamsData[game.typeId].label}</option>);

    return (
        <div className='medium-8 small-12 columns small-centered' key="distribution-game-selection">
            <label>{distributionPageTranslations.GAMES.TITLE}
                <select value={gameId} onChange={onGameChange}>
                    { options }
                </select>
            </label>
        </div>
    );
}

function getOpenGames(games) {
    return _.pickBy(games, game => {
        return game.status === gameConstants.STATUS.OPEN_FOR_MEMBERS || game.status === gameConstants.STATUS.OPEN_FOR_ALL;
    });
}

function createCustomTitle(subject, onSubjectChanged) {
    return (
        <div className='small-centered medium-8 small-12 columns' key='distribution-customTitle'>
            <label>{distributionPageTranslations.CUSTOM.TITLE.TITLE}</label>
            <input type='text' value={subject} onChange={onSubjectChanged}/>
        </div>
    );
}

function createCustomContent(content, onContentChanged) {
    return (
        <div className='small-centered medium-8 small-12 columns' key='distribution-customContent'>
            <label>{distributionPageTranslations.CUSTOM.CONTENT.TITLE}</label>
            <textarea rows="10" value={content} onChange={onContentChanged} />
        </div>
    );
}

function createSubmitButton(onSubmit) {
    return (
        <div className='button-group stacked small-centered large-6 small-8 more-space'>
            <a onClick={onSubmit} className='button success'>
                <span>שלח</span>
                <i className='fa fa-paper-plane' aria-hidden="true" />
            </a>
        </div>
    );
}

function shouldShowDistributionTypeInput(distributionMethod) {
    return distributionMethod === distributionConstants.DISTRIBUTION_METHODS.EMAIL;
}

function shouldShowTemplateSelection(distributionMethod, distributionType) {
    return shouldShowDistributionTypeInput(distributionMethod) && distributionType === distributionConstants.DISTRIBUTION_TYPES.TEMPLATE;
}

function shouldCreateCustomTitle(distributionMethod, distributionType) {
    return distributionMethod === distributionConstants.DISTRIBUTION_METHODS.EMAIL &&
        distributionType === distributionConstants.DISTRIBUTION_TYPES.CUSTOM;
}

function shouldShowCustomContent(distributionMethod, distributionType) {
    return (
            distributionMethod === distributionConstants.DISTRIBUTION_METHODS.EMAIL &&
            distributionType === distributionConstants.DISTRIBUTION_TYPES.CUSTOM
        ) || distributionMethod === distributionConstants.DISTRIBUTION_METHODS.SMS;
}

class DistributionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = getInitialState(this.props.games);
    }

    onDistributionMethodChange = e => {
        this.setState({
            distributionMethod: e.target.value
        });
    };

    onRecipientsTypeChange = e => {
        this.setState({
            recipientsType: e.target.value
        });
    };

    onDistributionTypeChange = e => {
        this.setState({
            distributionType: e.target.value
        });
    };

    onTemplateIdChange = e => {
        this.setState({
            templateId: e.target.value
        });
    };

    onGameIdChange = e => {
        this.setState({
            gameId: e.target.value
        });
    };

    onSubjectChanged = e => {
        this.setState({
            subject: e.target.value
        });
    };

    onContentChanged = e => {
        this.setState({
            content: e.target.value
        });
    };

    onSubmit = () => {
        if (this.state.distributionMethod === distributionConstants.DISTRIBUTION_METHODS.EMAIL) {
            const recipients = getUsersEmails(this.props.users, this.state.recipientsType, this.props.bookings, this.state.gameId);
            if (_.isEmpty(recipients)) {
                return;
            }
            if (this.state.distributionType === distributionConstants.DISTRIBUTION_TYPES.TEMPLATE) {
                const substitutions = getEventSubstitutions(this.props.games[this.state.gameId]);
                this.props.sendTemplateEmail(recipients, this.state.templateId, substitutions);
            } else {
                this.props.sendCustomEmail(recipients, this.state.subject, prepareCustomMailContentForSend(this.state.content));
            }
        } else {
            const recipients = getUsersPhoneNumbers(this.props.users, this.state.recipientsType, this.props.bookings, this.state.gameId);
            if (_.isEmpty(recipients)) {
                return;
            }
            this.props.sendSMS(recipients, this.state.content);
        }

        this.setState(getInitialState(this.props.games));
    };

    render() {
        return (
            <div className='dashboard-page distribution-page'>
                <PageTitle title={distributionPageTranslations.TITLE} />
                <div className='small-11 small-centered'>
                    { createDistributionMethodInput(this.state.distributionMethod, this.onDistributionMethodChange) }
                    { createRecipientsTypeInput(this.state.recipientsType, this.onRecipientsTypeChange) }
                    { shouldShowDistributionTypeInput(this.state.distributionMethod) ? createDistributionTypeInput(this.state.distributionType, this.onDistributionTypeChange) : null }
                    { shouldShowTemplateSelection(this.state.distributionMethod, this.state.distributionType) ? createTemplateSelection(this.state.templateId, this.onTemplateIdChange) : null }
                    { shouldShowTemplateSelection(this.state.distributionMethod, this.state.distributionType) ? createGamesSelection(getOpenGames(this.props.games), this.state.gameId, this.onGameIdChange) : null }
                    { shouldCreateCustomTitle(this.state.distributionMethod, this.state.distributionType) ? createCustomTitle(this.state.subject, this.onSubjectChanged) : null }
                    { shouldShowCustomContent(this.state.distributionMethod, this.state.distributionType) ? createCustomContent(this.state.content, this.onContentChanged) : null }
                    { createSubmitButton(this.onSubmit) }
                </div>
            </div>
        );
    }
}

DistributionPage.propTypes = {
    users: React.PropTypes.object,
    games: React.PropTypes.object,
    bookings: React.PropTypes.object
};

module.exports = ReactReudx.connect(mapStateToProps, mapDispatchToProps)(DistributionPage);
