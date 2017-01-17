import { read, update, remove, push, listenToChildAdded, listenToChildRemoved, listenToChildChanged } from './utils/db';

const GAMES_PATH = 'events';

export function trackGames(cb) {
  const createReportChange = type => (game, gameId) => {
    cb({ type, game, gameId });
  };

  listenToChildAdded(GAMES_PATH, createReportChange('added'));
  listenToChildRemoved(GAMES_PATH, createReportChange('removed'));
  listenToChildChanged(GAMES_PATH, createReportChange('changed'));
}

export function fetchGames() {
  return read(GAMES_PATH).then(games => games || {});
}

export function createGame(game) {
  return push(GAMES_PATH, game);
}

export function updateGame(gameId, game) {
  return update(`${GAMES_PATH}/${gameId}`, game);
}

export function removeGame(gameId) {
  return remove(`${GAMES_PATH}/${gameId}`);
}