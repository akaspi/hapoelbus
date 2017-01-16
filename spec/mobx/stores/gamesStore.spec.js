import merge from 'lodash/merge';
import { toJS } from 'mobx';
import GamesStore from '../../../mobx/stores/gamesStore';

describe('GamesStore', () => {

  const defaultGame = {
    typeId: 'someTypeId',
    day: '01',
    month: '01',
    year: '2017',
    hour: '18',
    minute: '30',
    status: 'closed'
  };

  it('should be empty after initialization', () => {
    const gamesStore = new GamesStore();

    expect(gamesStore.games.size).toEqual(0);
  });

  describe('set games', () => {
    
    it('should set the current users info', () => {
      const gamesStore = new GamesStore();

      gamesStore.setGames({
        gameId1: defaultGame,
        gameId2: defaultGame
      });

      expect(gamesStore.games.size).toEqual(2);
      expect(gamesStore.games.get('gameId1')).toEqual(defaultGame);
      expect(gamesStore.games.get('gameId2')).toEqual(defaultGame);
    });

    it('should replace the current games', () => {
      const gamesStore = new GamesStore();

      gamesStore.setGames({
        gameId1: defaultGame
      });

      gamesStore.setGames({
        gameId2: defaultGame,
        gameId3: defaultGame
      });

      expect(gamesStore.games.size).toEqual(2);
      expect(gamesStore.games.get('gameId2')).toEqual(defaultGame);
      expect(gamesStore.games.get('gameId3')).toEqual(defaultGame);
    });

  });

  describe('add game', () => {

    it('should add game', () => {
      const gamesStore = new GamesStore();

      gamesStore.addGame('gameId', defaultGame);

      expect(toJS(gamesStore.games.get('gameId'))).toEqual(defaultGame);
    });

  });

  describe('remove game', () => {

    it('should remove game', () => {
      const gamesStore = new GamesStore();

      gamesStore.addGame('gameId1', defaultGame);
      gamesStore.removeGame('gameId1');

      expect(gamesStore.games.size).toEqual(0);
    });

  });

  describe('update game', () => {

    it('should update user info', () => {
      const gamesStore = new GamesStore();

      gamesStore.addGame('gameId1', defaultGame);
      gamesStore.updateGame('gameId1', { status: 'openForAll' });

      expect(toJS(gamesStore.games)).toEqual({
        gameId1: merge(defaultGame, { status: 'openForAll' })
      });
    });

  });

});