const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');

const bookingActions = require('../redux/actions/bookingActions');
const routingActions = require('../redux/actions/routingActions');

const homePageTranslations = require('../utils/translations/homePageTranslations');
const gameConstants = require('../utils/gameConstants');
const navigationConstants = require('../utils/navigationConstants');

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
    navigateToUpdateBooking: (uid, gameId) => dispatch(routingActions.navigateTo(navigationConstants.PAGES.UPDATE_BOOKING.val, { uid, gameId })),
    cancelBooking: (uid, gameId) => dispatch(bookingActions.bookingsCanceled(uid, gameId)),
  };
}

function parseEventDate(game) {
  const eventDate = new Date(game.year, game.month, game.day);
  eventDate.setMonth(eventDate.getMonth() - 1);
  return eventDate;
}

function isFutureEvent(game) {
  const eventDate = parseEventDate(game);
  return eventDate > Date.now();
}

function getClosedGamesArr(games) {
  return _.chain(games)
    .omitBy(game => {
      return game.status !== gameConstants.STATUS.CLOSED || !isFutureEvent(game);
    })
    .map((game, gameId) => ({
      game,
      gameId
    }))
    .sortBy(gameData => parseEventDate(gameData.game))
    .value();
}

function getOpenGames(games) {
  return _.omitBy(games, game => game.status === gameConstants.STATUS.CLOSED);
}

function createMobileNoGamesMessageSection() {
  return (
    <div className='show-for-small-only no-bookings more-space'>
      <span>{homePageTranslations.NO_OPEN_GAMES}</span>
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

  return (
    <div>
      <div className='events-list open-events'>
        <h6 className='hide-for-small-only'>{homePageTranslations.OPEN_GAMES}</h6>
        { _.map(openGames, (game, gameId) => <EventItem key={'open-game-' + gameId} eventId={gameId} onBooking={bindOnGameItemClick(onBooking, gameId)} onCancelBooking={bindOnGameItemClick(onCancelBooking, gameId)} />) }
      </div>

      <div className='events-list closed-events hide-for-small-only'>
        <h6>{homePageTranslations.CLOSED_GAMES}</h6>
        { _.map(closedGamesArr, gameData => <EventItem key={'closed-game-' + gameData.gameId} eventId={gameData.gameId} />) }
      </div>
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
              { _.isEmpty(openGames) ? createMobileNoGamesMessageSection() : createGamesLists(openGames, closedGamesArr, this.onBooking, this.onCancelBooking) }
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
