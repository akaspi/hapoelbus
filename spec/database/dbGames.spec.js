import * as _ from 'lodash';
import * as dbGames from '../../database/dbGames';
import {
  read,
  update,
  remove,
  push,
  listenToChildAdded,
  listenToChildRemoved,
  listenToChildChanged
} from '../../database/utils/db';

describe('dbGames', () => {

  describe('trackGames', () => {

    it('should track all games', () => {
      dbGames.trackGames(null, _.noop);

      expect(listenToChildAdded).toHaveBeenCalledWith('events', jasmine.any(Function));
      expect(listenToChildRemoved).toHaveBeenCalledWith('events', jasmine.any(Function));
      expect(listenToChildChanged).toHaveBeenCalledWith('events', jasmine.any(Function));
    });

    it('should call childAdd with game, gameId and type:added', done => {
      const gameId = 'someGameId';
      const game = {
        typeId: 'hapoel'
      };

      listenToChildAdded.and.callFake((path, cb) => cb(game, gameId));

      dbGames.trackGames(addedGame => {
        expect(addedGame).toEqual({
          type: 'added',
          game,
          gameId
        });
        done();
      });
    });

    it('should call childChanged with game, gameId and type:changed', done => {
      const gameId = 'someGameId';
      const game = {
        typeId: 'hapoel'
      };

      listenToChildChanged.and.callFake((path, cb) => cb(game, gameId));

      dbGames.trackGames(changedGame => {
        expect(changedGame).toEqual({
          type: 'changed',
          game,
          gameId
        });
        done();
      });
    });

    it('should call childRemoved with game, gameId and type:removed', done => {
      const gameId = 'someGameId';
      const game = {
        typeId: 'hapoel'
      };

      listenToChildRemoved.and.callFake((path, cb) => cb(game, gameId));

      dbGames.trackGames(changedGame => {
        expect(changedGame).toEqual({
          type: 'removed',
          game,
          gameId
        });
        done();
      });
    });

  });

  describe('fetchGames', () => {

    it('should fetch from events', done => {
      read.and.returnValue(Promise.resolve({}));

      dbGames.fetchGames().then(() => {
        expect(read).toHaveBeenCalledWith('events');
        done();
      })
    });

    it('should fetch all games', done => {
      read.and.returnValue(Promise.resolve({
        evid1: {typeId: 'hta', day: '12', month: '08', year: '2016', hour: '19', minute: '15'},
        evid2: {typeId: 'holon', day: '03', month: '10', year: '2017', hour: '17', minute: '20'}
      }));

      dbGames.fetchGames().then(games => {
        expect(games).toEqual({
          evid1: {typeId: 'hta', day: '12', month: '08', year: '2016', hour: '19', minute: '15'},
          evid2: {typeId: 'holon', day: '03', month: '10', year: '2017', hour: '17', minute: '20'}
        });
        done();
      });

    });

    it('should return empty object if there are no games', done => {
      read.and.returnValue(Promise.resolve(null));

      dbGames.fetchGames().then(games => {
        expect(games).toEqual({});
        done();
      });
    });

  });

  describe('createGame', () => {

    it('should create a game', done => {
      const gameId = 'someGameId';
      const game = {
        typeId: 'hapoel'
      };

      push.and.returnValue(Promise.resolve(gameId));

      dbGames.createGame(game).then(createdGameId => {
        expect(push).toHaveBeenCalledWith('events', game);
        expect(createdGameId).toEqual(gameId);
        done();
      })
    });
  });

  describe('updateGame', () => {

    it('should update a game', done => {
      update.and.returnValue(Promise.resolve());

      dbGames.updateGame('someGameId', {typeId: 'holon'}).then(() => {
        expect(update).toHaveBeenCalledWith('events/someGameId', {typeId: 'holon'});
        done();
      });
    });

  });

  describe('removeGame', () => {

    it('should remove a game', done => {
      remove.and.returnValue(Promise.resolve());

      dbGames.removeGame('someGameId').then(() => {
        expect(remove).toHaveBeenCalledWith('events/someGameId');
        done();
      });
    });

  });

});