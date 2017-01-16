import { observable, extendObservable, action } from 'mobx';

class Games {
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
    this.games.replace(games);
  };

  @action addGame = (gameId, game) => {
    this.games.set(gameId, new Games(game));
  };

  @action updateGame = (gameId, partialGame) => {
    const game = this.games.get(gameId);
    game.update(partialGame);
  };

  @action removeGame = gameId => {
    this.games.delete(gameId);
  }

}

export default GamesStore;