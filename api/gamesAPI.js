import _ from 'lodash';
import { computed } from 'mobx';

import * as dbGames from '../database/dbGames';

function parseEventDate(game) {
  return new Date(parseInt(game.year, 10), parseInt(game.month, 10) - 1, parseInt(game.day), 10);
}

function isFutureEvent(game) {
  const eventDate = parseEventDate(game);
  return eventDate > Date.now();
}

function isClosed(game) {
  return game.status === 'closed';
}

export default class GamesAPI {
  constructor(stores) {
    this.stores = stores;
  }

  @computed get games() {
    return this.stores.gamesStore.games.toJS();
  }

  @computed.struct get openGames() {
    return _(this.games)
      .map((game, gameId) => ({ gameId, game }))
      .reject(gameData => isClosed(gameData.game))
      .sortBy(gameData => parseEventDate(gameData.game))
      .value();
  }

  @computed.struct get closedGames() {
    return _(this.games)
      .map((game, gameId) => ({ gameId, game }))
      .filter(gameData => isClosed(gameData.game))
      .sortBy(gameData => parseEventDate(gameData.game))
      .value();
  }

  @computed.struct get futureGames() {
    return _(this.games)
      .map((game, gameId) => ({ gameId, game }))
      .filter(gameData => isClosed(gameData.game) && isFutureEvent(gameData.game))
      .sortBy(gameData => parseEventDate(gameData.game))
      .value();
  }

  updateGame = dbGames.updateGame;

  removeGame = dbGames.removeGame;
}