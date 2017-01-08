const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');
const classNames = require('classnames');

const Constants = require('../utils/constants');
const Translations = require('../utils/translations');

const teamsData = require('../utils/teamsData');
const routingActions = require('../redux/actions/routingActions');

const PageTitle = require('./pageTitle');
const ListItem = require('./listItem');

require('../styles/gamesPage.scss');

const TABS = {
    ALL: 'all',
    OPEN: 'open',
    CLOSED: 'closed'
};

function mapStateToProps(state) {
    return {
        games: state.events,
        query: {
            filter: state.routing.current.params.filter || TABS.ALL
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        editGame: gameId => dispatch(routingActions.navigateTo(Constants.ROUTING.PAGES.UPDATE_GAME, { gameId })),
        createGame: () => dispatch(routingActions.navigateTo(Constants.ROUTING.PAGES.UPDATE_GAME)),
        changeFilter: filter => dispatch(routingActions.replace(null, { filter }))
    };
}

function getVisibleGames(games, filter) {
    switch (filter) {
        case TABS.OPEN:
            return getOpenGames(games);
        case TABS.CLOSED:
            return getClosedGames(games);
    }
    return games;
}

function getOpenGames(games) {
    return _.omitBy(games, game => game.status === Constants.GAME.STATUS.CLOSED);
}

function getClosedGames(games) {
    return _.pickBy(games, game => game.status === Constants.GAME.STATUS.CLOSED);
}

function getGameSubtitles(game) {
    return [
        'תאריך: ' + `${game.day}/${game.month}/${game.year}`, // eslint-disable-line no-useless-concat
        'שעה: ' +  `${game.hour}:${game.minute}`, // eslint-disable-line no-useless-concat
        Translations.GAME.STATUS[game.status]
    ];
}

function createTabs(games, filter, onFilterChange) {
    function onTabClick(selectedFilter) {
        onFilterChange(selectedFilter);
    }

    return (
        <div className="filtering row expanded collapse">
            <div className='column small-12 large-6'>
                <ul className='menu'>
                    <li className={classNames({ active: filter === TABS.ALL})}>
                        <a onClick={onTabClick.bind(this, TABS.ALL)}>
                            <span>{Translations.GAMES_PAGE.TABS.ALL}</span>
                            <span>({_.size(games)})</span>
                        </a>
                    </li>
                    <li className={classNames({ active: filter === TABS.OPEN})}>
                        <a onClick={onTabClick.bind(this, TABS.OPEN)}>
                            <span>{Translations.GAMES_PAGE.TABS.OPEN}</span>
                            <span>({_.size(getOpenGames(games))})</span>
                        </a>
                    </li>
                    <li className={classNames({ active: filter === TABS.CLOSED})}>
                        <a onClick={onTabClick.bind(this, TABS.CLOSED)}>
                            <span>{Translations.GAMES_PAGE.TABS.CLOSED}</span>
                            <span>({_.size(getClosedGames(games))})</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function createNoGamesMessage() {
    return (
        <label className='filter-status'>
            <i className='fa fa-frown-o' aria-hidden="true" />
            <span>{Translations.GAMES_PAGE.NO_GAMES_LABEL}</span>
        </label>
    );
}

function createPlusButton(onCreateGame) {
    return (
        <div>
            <button className='float-left add-btn big hide-for-small-only' onClick={onCreateGame}>+</button>
            <button className='float-left add-btn small show-for-small-only' onClick={onCreateGame}>+</button>
        </div>
    );
}

class GamesPage extends React.Component {
    onFilterChanged = filter => {
        this.props.changeFilter(filter);
    };

    render() {
        const visibleGames = getVisibleGames(this.props.games, this.props.query.filter);

        return (
            <div className='small-centered dashboard-page games-page'>

                <PageTitle title={Translations.GAMES_PAGE.TITLE} />

                { createTabs(this.props.games, this.props.query.filter, this.onFilterChanged) }

                {
                    _.map(visibleGames, (game, gameId) => (
                        <ListItem key={'game-' + gameId}
                                  title={teamsData[game.typeId].label}
                                  subtitles={getGameSubtitles(game)}
                                  imageSrc={teamsData[game.typeId].logo || 'http://image.flaticon.com/icons/svg/138/138776.svg'}
                                  onClick={this.props.editGame.bind(this, gameId)}
                        />
                    ))
                }

                { visibleGames.length == 0 ? createNoGamesMessage() : null }

                { createPlusButton(this.props.createGame) }

            </div>
        );
    }
}

GamesPage.propTypes = {
    games: React.PropTypes.object.isRequired,
    createGame: React.PropTypes.func.isRequired,
    editGame: React.PropTypes.func.isRequired,
    changeFilter: React.PropTypes.func.isRequired
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(GamesPage);