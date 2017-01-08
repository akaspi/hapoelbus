const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');

const Constants = require('../utils/constants');
const Translations = require('../utils/translations');

const eventActions = require('../redux/actions/eventActions');
const routingActions = require('../redux/actions/routingActions');

const DEFAULT_GAME_LOGO = 'http://image.flaticon.com/icons/svg/124/124150.svg';

const FormFrame = require('./formFrame');

require('../styles/updateGamePage.scss');

const emptyEvent = {
    typeId: '',
    day: '01',
    month: '01',
    year: '2017',
    hour: '17',
    minute: '00',
    status: Constants.GAME.STATUS.CLOSED
};

function mapStateToProps(state) {
    const routingParams = state.routing.current.params;
    const gameId = routingParams.gameId;
    const game = _.get(state, ['events', gameId], {});

    return {
        game,
        gameId
    };
}

function parseDateValue(year, month, day) {
    return [year, month, day].join('-');
}

function parseTimeValue(hour, minute) {
    return hour + ':' + minute;
}

function mapDispatchToProps(dispatch) {
    return {
        createGame: game => dispatch(eventActions.createEvent(game)),
        updateGame: (gameId, game) => dispatch(eventActions.updateEvent(gameId, game)),
        removeGame: gameId => dispatch(eventActions.removeEvent(gameId)),
        navigateBack: () => dispatch(routingActions.navigateBack())
    };
}

function createGameImage(typeId) {
    return (
        <img className='game-img' src={_.get(Constants.TEAMS, [typeId, 'logo'], DEFAULT_GAME_LOGO)} />
    );
}

function createGameTitleSection(typeId, onTypeIdChange) {
    return (
        <div className='row'>
            <div className='small-9 large-10 large-collapse columns'>
                <label>{Translations.UPDATE_GAME_PAGE.GAME_LABEL}
                    <select name='typeId' value={typeId} onChange={onTypeIdChange}>
                        <option value='' style={{display: 'none'}}>{Translations.UPDATE_GAME_PAGE.GAME_PLACEHOLDER}</option>
                        { _.map(Constants.TEAMS, (teamData, id) => <option key={'update-game-' + id} value={id}>{teamData.label}</option>) }
                    </select>
                </label>
            </div>
            <div className='float-left'>
                { createGameImage(typeId) }
            </div>
        </div>
    );
}

function createInfoWithoutSupportedInputs(year, month, hour, minute, onNonSupportedInputChange) {
    return (
        <div key='unsupported-inputs' className='row small-expanded small-centered'>
            <div className='small-4 medium-2 columns'>
                <label>{Translations.UPDATE_GAME_PAGE.DATE_LABEL}</label>
                <select value={year} onChange={onNonSupportedInputChange} name='year'>
                    { _.map(Constants.DATE_AND_TIME.years, year => <option key={'yy-' + year} value={'20' + year}>{year}</option>) }
                </select>
            </div>
            <div className='small-4 medium-2 columns more-space'>
                <select value={month} onChange={onNonSupportedInputChange} name='month'>
                    { _.map(Constants.DATE_AND_TIME.months, month => <option key={'mm-' + month} value={month}>{month}</option>) }
                </select>
            </div>
            <div className='small-4 medium-2 columns more-space'>
                <select value={day} onChange={onNonSupportedInputChange} name='day'>
                    { _.map(Constants.DATE_AND_TIME.days, day => <option key={'dd-' + day} value={day}>{day}</option>) }
                </select>
            </div>
            <div className='small-3 columns'>
                <label>{Translations.UPDATE_GAME_PAGE.TIME}</label>
                <select value={minute} onChange={onNonSupportedInputChange} name='minute'>
                    { _.map(Constants.DATE_AND_TIME.minutes, day => <option key={'min-' + minute} value={minute}>{minute}</option>) }
                </select>
            </div>
            <div className='small-3 columns more-space end'>
                <select value={hour} onChange={onNonSupportedInputChange} name='minute'>
                    { _.map(Constants.DATE_AND_TIME.hours, hour => <option key={'hh-' + hour} value={hour}>{hour}</option>) }
                </select>
            </div>
        </div>
    );
}

function createInfoWithSupportedInputs(date, time, onDateChange, onTimeChange) {
    return (
        <div key='supported-inputs' className='row'>
            <div className='small-6 columns'>
                <label>{Translations.UPDATE_GAME_PAGE.DATE_LABEL}
                    <input type='date' value={date} onChange={onDateChange} min='2016-01-01' max='2017-12-31' name='date' />
                </label>
            </div>
            <div className='small-6 columns'>
                <label>{Translations.UPDATE_GAME_PAGE.TIME}
                    <input type='time' value={time} step={300} onChange={onTimeChange} name='time' />
                </label>
            </div>
        </div>
    );
}

function createGameStatusSection(status, onGameStatusChange) {
    return (
        <div className='small-12 columns'>
            <label>{Translations.UPDATE_GAME_PAGE.GAME_STATUS}
                <select value={status} onChange={onGameStatusChange}>
                    { _.map(gameConstants.STATUS, val => <option value={val}>{gameConstants.TRANSLATIONS[val]}</option>) }
                </select>
            </label>
        </div>
    );
}

class UpdateGamePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = _.defaults(this.props.game, emptyEvent, { dateInputSupported: true, timeInputSupported: true });
    }

    componentDidMount() {
        this.checkIfHtml5Supported();
    }

    checkIfHtml5Supported() {
        const supportedInputTypes = ['date', 'time'];
        const testResult = {};
        const testString = 'test!';

        _.each(supportedInputTypes, (inputType) => {
            const input = document.createElement('input');
            input.type = inputType;
            input.value = testString;
            const isSupported = input.value !== testString;
            testResult[inputType + 'InputSupported'] = isSupported;
        });

        this.setState(testResult);
    }

    onTypeIdChange = e => {
        this.setState({
            typeId: e.target.value
        });
    };

    onNonSupportedInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onDateChange = e => {
        const val = e.target.value.split('-');
        this.setState({ year: val[0], month: val[1], day: val[2] });
    };

    onTimeChange = e => {
        const val = e.target.value.split(':');
        this.setState({ hour: val[0], minute: val[1] });
    };

    onGameStatusChange = e => {
        this.setState({
            status: e.target.value
        });
    };

    isFormValid = () => {
        return this.state.typeId !== '';
    };

    onSubmit = () => {
        const game = _.omit(this.state, ['timeInputSupported', 'dateInputSupported']);
        if (this.props.gameId) {
            this.props.updateGame(this.props.gameId, game);
        } else {
            this.props.createGame(game);
        }
        this.props.navigateBack();
    };

    onRemove  = () => {
        this.props.removeGame(this.props.gameId);
        this.props.navigateBack();
    };

    render() {
        return (
            <FormFrame
                title={Translations.UPDATE_GAME_PAGE.TITLE} onSubmit={this.onSubmit} onRemove={this.onRemove} onClose={this.props.navigateBack} disabled={!this.isFormValid()}>

                <div className='update-game-page large-11 large-centered'>

                    { createGameTitleSection(this.state.typeId, this.onTypeIdChange) }

                    {
                        this.state.dateInputSupported && this.state.timeInputSupported ?
                            createInfoWithSupportedInputs(parseDateValue(this.state.year, this.state.month, this.state.day), parseTimeValue(this.state.hour, this.state.minute), this.onDateChange, this.onTimeChange) :
                            createInfoWithoutSupportedInputs(this.state.year, this.state.month, this.state.hour, this.state.minute, this.onNonSupportedInputChange)
                    }

                    { createGameStatusSection(this.state.status, this.onGameStatusChange) }

                </div>
            </FormFrame>
        );
    }
}

UpdateGamePage.propTypes = {
    game: React.PropTypes.object,
    gameId: React.PropTypes.string,
    createGame: React.PropTypes.func.isRequired,
    updateGame: React.PropTypes.func.isRequired,
    navigateBack: React.PropTypes.func.isRequired
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(UpdateGamePage);