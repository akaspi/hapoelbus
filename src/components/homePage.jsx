const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');

const Constants = require('../utils/constants');
const Translations = require('../utils/translations');

const bookingActions = require('../redux/actions/bookingActions');
const routingActions = require('../redux/actions/routingActions');
const EventItem = require('./eventItem');

require('../styles/homePage.scss');

function mapStateToProps(state) {
  return {
    uid: state.authData.uid,
    games: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navigateToUpdateBooking: (uid, gameId) => dispatch(routingActions.navigateTo(Constants.ROUTING.PAGES.UPDATE_BOOKING, { uid, gameId })),
    cancelBooking: (uid, gameId) => dispatch(bookingActions.bookingsCanceled(uid, gameId)),
  };
}

function parseEventDate(game) {
  return new Date(parseInt(game.year, 10), parseInt(game.month, 10) - 1, parseInt(game.day), 10);
}

function isFutureEvent(game) {
  const eventDate = parseEventDate(game);
  return eventDate > Date.now();
}

function getClosedGamesArr(games) {
  return _.chain(games)
    .omitBy(game => {
      return game.status !== Constants.GAME.STATUS.CLOSED || !isFutureEvent(game);
    })
    .map((game, gameId) => ({
      game,
      gameId
    }))
    .sortBy(gameData => parseEventDate(gameData.game))
    .value();
}

function getOpenGames(games) {
  return _.omitBy(games, game => game.status === Constants.GAME.STATUS.CLOSED);
}

function createMobileNoGamesMessageSection() {
  return (
    <div className='show-for-small-only no-bookings more-space'>
      <span>{Translations.HOME_PAGE.NO_OPEN_GAMES}</span>
      <i className='fa fa-bus' aria-hidden='true' />
    </div>
  );
}

function createGamesLists(openGames, closedGamesArr, onBooking, onCancelBooking) {

  function bindOnGameItemClick(fn, gameId) {
    return function() {
        fn(gameId);
    }
  }

  function createOpenGamesList() {
    return (
        <div className='events-list open-events'>
          <h6 className='hide-for-small-only'>{Translations.HOME_PAGE.OPEN_GAMES}</h6>
            { _.map(openGames, (game, gameId) => <EventItem key={'open-game-' + gameId} eventId={gameId} onBooking={bindOnGameItemClick(onBooking, gameId)} onCancelBooking={bindOnGameItemClick(onCancelBooking, gameId)} />) }
        </div>
    );
  }

  function createClosedGamesList() {
    return (
        <div className='events-list closed-events hide-for-small-only'>
          <h6>{Translations.HOME_PAGE.CLOSED_GAMES}</h6>
            { _.map(closedGamesArr, gameData => <EventItem key={'closed-game-' + gameData.gameId} eventId={gameData.gameId} />) }
        </div>
    );
  }


  return (
    <div>
        { _.isEmpty(openGames) ? null : createOpenGamesList() }
        { _.isEmpty(closedGamesArr) ? null : createClosedGamesList() }
    </div>
  );
}

class HomePage extends React.Component {

  onBooking = gameId => {
    this.props.navigateToUpdateBooking(this.props.uid, gameId);
  };

  onCancelBooking = gameId => {
    this.props.cancelBooking(this.props.uid, gameId);
  };

  render() {
    const openGames = getOpenGames(this.props.games);
    const closedGamesArr = getClosedGamesArr(this.props.games);
    return (
      <div className='site'>
        <div className='home-page small-centered'>
          <div className='events-container' key='events-container'>
            <div className='events' key='events'>
              { _.isEmpty(openGames) ? createMobileNoGamesMessageSection() : null }
              { createGamesLists(openGames, closedGamesArr, this.onBooking, this.onCancelBooking) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  uid: React.PropTypes.string.isRequired,
  games: React.PropTypes.object.isRequired,
  navigateToUpdateBooking: React.PropTypes.func.isRequired,
  cancelBooking: React.PropTypes.func.isRequired
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(HomePage);
