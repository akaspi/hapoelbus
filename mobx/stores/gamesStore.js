import mapValues from 'lodash/mapValues';
import { observable, extendObservable, action } from 'mobx';

class Game {
  constructor(game) {
    extendObservable(this, {
      typeId: game.typeId,
      day: game.day,
      month: game.month,
      year: game.year,
      hour: game.hour,
      minute: game.minute,
      status: game.status
    });
  }

  @action update = partialGame => {
    extendObservable(this, partialGame);
  }
}

class GamesStore {
  @observable games = observable.map({});

  @action setGames = games => {
    this.games.replace(mapValues(games, game => new Game(game)));
  };

  @action addGame = (gameId, game) => {
    this.games.set(gameId, new Game(game));
  };

  @action updateGame = (gameId, partialGame) => {
    const game = this.games.get(gameId);
    game.update(partialGame);
  };

  @action removeGame = gameId => {
    this.games.delete(gameId);
  }

}

const gameStore = new GamesStore();

export default gameStore;
export { GamesStore };