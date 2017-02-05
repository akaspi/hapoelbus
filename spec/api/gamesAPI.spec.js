import _ from 'lodash';
import { isComputed, toJS, autorun } from 'mobx';
import GamesAPI from '../../api/gamesAPI';
import GamesStore from '../../mobx/stores/gamesStore';

describe('GamesAPI', () => {

  function mockGamesData() {
    return {
      closedGameIdA: {
        typeId: 'maccabi-tlv',
        day: '16',
        month: '08',
        year: '2017',
        hour: '18',
        minute: '40',
        status: 'closed'
      },
      closedGameIdB: {
        typeId: 'maccabi-tlv',
        day: '10',
        month: '05',
        year: '2017',
        hour: '18',
        minute: '40',
        status: 'closed'
      },
      openGameIdA: {
        typeId: 'maccabi-tlv',
        day: '20',
        month: '01',
        year: '2017',
        hour: '18',
        minute: '40',
        status: 'openFoAll'
      },
      openGameIdB: {
        typeId: 'maccabi-tlv',
        day: '16',
        month: '08',
        year: '2016',
        hour: '18',
        minute: '40',
        status: 'openForMembers'
      },
      openGameIdC: {
        typeId: 'maccabi-tlv',
        day: '16',
        month: '04',
        year: '2017',
        hour: '18',
        minute: '40',
        status: 'fullyBooked'
      }
    };
  }

  describe('games', () => {

    it('should be a computed value', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      expect(isComputed(gamesAPI, 'games')).toBe(true);
    });

    it('should return games', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      expect(_.size(gamesAPI.games)).toEqual(5);
      _.forOwn(gamesAPI.games, (game, gameId) => expect(toJS(game)).toEqual(mockGames[gameId]));
    });

  });

  describe('openGames', () => {

    it('should be a computed value', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      expect(isComputed(gamesAPI, 'openGames')).toBe(true);
    });

    it('should return open games as sorted array', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      expect(gamesAPI.openGames.length).toEqual(3);

      expect(gamesAPI.openGames[0].gameId).toEqual('openGameIdB');
      expect(toJS(gamesAPI.openGames[0].game)).toEqual(mockGames.openGameIdB);

      expect(gamesAPI.openGames[1].gameId).toEqual('openGameIdA');
      expect(toJS(gamesAPI.openGames[1].game)).toEqual(mockGames.openGameIdA);

      expect(gamesAPI.openGames[2].gameId).toEqual('openGameIdC');
      expect(toJS(gamesAPI.openGames[2].game)).toEqual(mockGames.openGameIdC);
    });

    it('should re-compute open games array if date changes', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      let autorunCounter = -1;
      const dispose = autorun(() => {
        gamesAPI.openGames;
        autorunCounter++;
      });

      gamesStore.updateGame('openGameIdC', { year: '2016' });

      expect(autorunCounter).toEqual(1);
      expect(gamesAPI.openGames[0].gameId).toEqual('openGameIdC');
      expect(toJS(gamesAPI.openGames[0].game)).toEqual(_.defaults({ year: '2016' }, mockGames.openGameIdC));

      dispose();
    });

    it('should re-compute open games array if status changes from closed to open', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      let autorunCounter = -1;
      const dispose = autorun(() => {
        gamesAPI.openGames;
        autorunCounter++;
      });

      gamesStore.updateGame('closedGameIdB', { status: 'openForAll' });

      expect(autorunCounter).toEqual(1);

      dispose();
    });

    it('should NOT re-compute open games array if sort order hasn\'t changed', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      let autorunCounter = -1;
      const dispose = autorun(() => {
        gamesAPI.openGames;
        autorunCounter++;
      });

      gamesStore.updateGame('openGameIdB', { year: '2015' });

      expect(autorunCounter).toEqual(0);

      dispose();
    });

    it('should NOT re-compute open games array if hour / minute changes', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      let autorunCounter = -1;
      const dispose = autorun(() => {
        gamesAPI.openGames;
        autorunCounter++;
      });

      gamesStore.updateGame('openGameIdC', { hour: '20', minute: '20' });

      expect(autorunCounter).toEqual(0);

      dispose();
    });

  });

  describe('closedGames', () => {

    it('should be a computed value', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      expect(isComputed(gamesAPI, 'closedGames')).toBe(true);
    });

    it('should return closed games as sorted array', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      expect(gamesAPI.closedGames.length).toEqual(2);

      expect(gamesAPI.closedGames[0].gameId).toEqual('closedGameIdB');
      expect(toJS(gamesAPI.closedGames[0].game)).toEqual(mockGames.closedGameIdB);

      expect(gamesAPI.closedGames[1].gameId).toEqual('closedGameIdA');
      expect(toJS(gamesAPI.closedGames[1].game)).toEqual(mockGames.closedGameIdA);
    });

    it('should re-compute closed games array if date changes', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      let autorunCounter = -1;
      const dispose = autorun(() => {
        gamesAPI.closedGames;
        autorunCounter++;
      });

      gamesStore.updateGame('closedGameIdA', { year: '2015' });

      expect(autorunCounter).toEqual(1);
      expect(gamesAPI.closedGames[0].gameId).toEqual('closedGameIdA');
      expect(toJS(gamesAPI.closedGames[0].game)).toEqual(_.defaults({ year: '2015' }, mockGames.closedGameIdA));

      dispose();
    });

    it('should re-compute open games array if status changes from open to closed', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      let autorunCounter = -1;
      const dispose = autorun(() => {
        gamesAPI.openGames;
        autorunCounter++;
      });

      gamesStore.updateGame('openGameIdA', { status: 'closed' });

      expect(autorunCounter).toEqual(1);

      dispose();
    });

    it('should NOT re-compute closed games array if sort order hasn\'t changed', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      let autorunCounter = -1;
      const dispose = autorun(() => {
        gamesAPI.closedGames;
        autorunCounter++;
      });

      gamesStore.updateGame('closedGameIdB', { year: '2015' });

      expect(autorunCounter).toEqual(0);

      dispose();
    });

    it('should NOT re-compute open games array if hour / minute changes', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      let autorunCounter = -1;
      const dispose = autorun(() => {
        gamesAPI.openGames;
        autorunCounter++;
      });

      gamesStore.updateGame('closedGameIdB', { hour: '20', minute: '20' });

      expect(autorunCounter).toEqual(0);

      dispose();
    });

  });

  describe('futureGames', () => {

    beforeEach(() => {
      jasmine.clock().install();
      jasmine.clock().mockDate(new Date(2017, 6, 25));
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it('should be a computed value', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      expect(isComputed(gamesAPI, 'futureGames')).toBe(true);
    });

    it('should return future games as sorted array', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      expect(gamesAPI.futureGames.length).toEqual(1);

      expect(gamesAPI.futureGames[0].gameId).toEqual('closedGameIdA');
      expect(toJS(gamesAPI.futureGames[0].game)).toEqual(mockGames.closedGameIdA);
    });

    it('should re-compute future games array if date changes', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      let autorunCounter = -1;
      const dispose = autorun(() => {
        gamesAPI.futureGames;
        autorunCounter++;
      });

      gamesStore.updateGame('closedGameIdB', { month: '08' });

      expect(autorunCounter).toEqual(1);
      expect(gamesAPI.futureGames[0].gameId).toEqual('closedGameIdB');
      expect(toJS(gamesAPI.futureGames[0].game)).toEqual(_.defaults({ month: '08' }, mockGames.closedGameIdB));

      dispose();
    });

    it('should re-compute open games array if status changes from open to closed', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      let autorunCounter = -1;
      const dispose = autorun(() => {
        gamesAPI.futureGames;
        autorunCounter++;
      });

      gamesStore.updateGame('openGameIdB', { status: 'closed', year: '2017', month: '09' });

      expect(autorunCounter).toEqual(1);
      expect(gamesAPI.futureGames.length).toEqual(2);

      dispose();
    });

    it('should NOT re-compute closed games array if sort order hasn\'t changed', () => {
      const gamesStore = new GamesStore();
      const gamesAPI = new GamesAPI({ gamesStore });

      const mockGames = mockGamesData();
      gamesStore.setGames(mockGames);

      let autorunCounter = -1;
      const dispose = autorun(() => {
        gamesAPI.futureGames;
        autorunCounter++;
      });

      gamesStore.updateGame('closedGameIdA', { month: '10' });

      expect(autorunCounter).toEqual(0);

      dispose();
    });

  });

});
