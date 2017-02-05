import _ from 'lodash';
import { isComputed, toJS, autorun } from 'mobx';
import UsersInfoAPI from '../../api/usersInfoAPI';
import UsersInfoStore from '../../mobx/stores/usersInfoStore';
import AuthStore from '../../mobx/stores/authStore';

describe('userInfoAPI', () => {

  const userInfoStructure = {
    firstName: 'fName',
    lastName: 'lName',
    email: 'spider@pig.com',
    photoURL: 'http://photoUrl.jgp',
    phonePrefix: '052',
    phoneNumber: '5335402',
    requestForMembership: true,
    station: 'tlv',
    subscribeSMS: true,
    subscribeMail: true,
    seasonTickets: 1
  };

  describe('usersInfo', () => {

    it('should be a computed value', () => {
      const usersInfoStore = new UsersInfoStore();
      const usersInfoAPI = new UsersInfoAPI({ usersInfoStore });

      expect(isComputed(usersInfoAPI, 'usersInfo')).toBe(true);
    });

    it('should return users info', () => {
      const usersInfoStore = new UsersInfoStore();
      const usersInfoAPI = new UsersInfoAPI({ usersInfoStore });

      usersInfoStore.setUsersInfo({
        uid1: userInfoStructure,
        uid2: userInfoStructure
      });

      expect(_.size(usersInfoAPI.usersInfo)).toEqual(2);
      expect(toJS(usersInfoAPI.usersInfo['uid1'])).toEqual(userInfoStructure);
      expect(toJS(usersInfoAPI.usersInfo['uid2'])).toEqual(userInfoStructure);
    });

  });

  describe('currentUserInfo', () => {

    it('should be a computed value', () => {
      const usersInfoStore = new UsersInfoStore();
      const usersInfoAPI = new UsersInfoAPI({ usersInfoStore });

      expect(isComputed(usersInfoAPI, 'currentUserInfo')).toBe(true);
    });

    it('should return the current user info', () => {
      const usersInfoStore = new UsersInfoStore();
      const authStore = new AuthStore();
      const usersInfoAPI = new UsersInfoAPI({ usersInfoStore, authStore });

      usersInfoStore.setUsersInfo({ spiderUID: userInfoStructure });
      authStore.setAuthData({ uid: 'spiderUID'});

      expect(toJS(usersInfoAPI.currentUserInfo)).toEqual(userInfoStructure);
    });

    it('should be empty value if logged out', function() {
      const usersInfoStore = new UsersInfoStore();
      const authStore = new AuthStore();
      const usersInfoAPI = new UsersInfoAPI({ usersInfoStore, authStore });

      usersInfoStore.setUsersInfo({ spiderUID: userInfoStructure });
      authStore.setAuthData(null);

      expect(toJS(usersInfoAPI.currentUserInfo)).toEqual({});
    });

    it('should be empty value if missing uid', function() {
      const usersInfoStore = new UsersInfoStore();
      const authStore = new AuthStore();
      const usersInfoAPI = new UsersInfoAPI({ usersInfoStore, authStore });

      usersInfoStore.setUsersInfo({ spiderUID: userInfoStructure });
      authStore.setAuthData({ uid: 'spiderPig' });

      expect(toJS(usersInfoAPI.currentUserInfo)).toEqual({});
    });

  });

  describe('sortedUsersInfo', () => {

    it('should return the users info in array form', () => {
      const usersInfoStore = new UsersInfoStore();
      const usersInfoAPI = new UsersInfoAPI({ usersInfoStore });

      usersInfoStore.setUsersInfo({ spiderUID: userInfoStructure });

      expect(usersInfoAPI.sortedUsersInfo.length).toEqual(1);
      expect(usersInfoAPI.sortedUsersInfo[0].uid).toEqual('spiderUID');
      expect(toJS(usersInfoAPI.sortedUsersInfo[0].userInfo)).toEqual(userInfoStructure);
    });

    it('should return a sorted array of users info', () => {
      const usersInfoStore = new UsersInfoStore();
      const usersInfoAPI = new UsersInfoAPI({ usersInfoStore });

      const userInfoStructureA = _.defaults({firstName: 'spider'}, userInfoStructure);
      const userInfoStructureB = _.defaults({firstName: 'pig'}, userInfoStructure);
      const userInfoStructureC = _.defaults({firstName: 'web'}, userInfoStructure);

      usersInfoStore.setUsersInfo({
        uidA: userInfoStructureA,
        uidB: userInfoStructureB,
        uidC: userInfoStructureC
      });

      expect(usersInfoAPI.sortedUsersInfo.length).toEqual(3);

      expect(usersInfoAPI.sortedUsersInfo[0].uid).toEqual('uidB');
      expect(toJS(usersInfoAPI.sortedUsersInfo[0].userInfo)).toEqual(userInfoStructureB);

      expect(usersInfoAPI.sortedUsersInfo[1].uid).toEqual('uidA');
      expect(toJS(usersInfoAPI.sortedUsersInfo[1].userInfo)).toEqual(userInfoStructureA);

      expect(usersInfoAPI.sortedUsersInfo[2].uid).toEqual('uidC');
      expect(toJS(usersInfoAPI.sortedUsersInfo[2].userInfo)).toEqual(userInfoStructureC);
    });

    it('should re-compute users info array', () => {
      const usersInfoStore = new UsersInfoStore();
      const usersInfoAPI = new UsersInfoAPI({ usersInfoStore });

      const userInfoStructureA = _.defaults({firstName: 'spider'}, userInfoStructure);
      const userInfoStructureB = _.defaults({firstName: 'pig'}, userInfoStructure);
      const userInfoStructureC = _.defaults({firstName: 'web'}, userInfoStructure);

      usersInfoStore.setUsersInfo({
        uidA: userInfoStructureA,
        uidB: userInfoStructureB,
        uidC: userInfoStructureC
      });

      let autorunCounter = -1;
      const dispose = autorun(() => {
        usersInfoAPI.sortedUsersInfo;
        autorunCounter++;
      });

      usersInfoStore.updateUserInfo('uidC', { firstName: 'a' });

      expect(usersInfoAPI.sortedUsersInfo[0].uid).toEqual('uidC');
      expect(toJS(usersInfoAPI.sortedUsersInfo[0].userInfo)).toEqual(_.defaults({ firstName: 'a' }, userInfoStructureC));
      expect(autorunCounter).toEqual(1);
      dispose();
    });

    it('should NOT re-compute users info array if lastName changes', () => {
      const usersInfoStore = new UsersInfoStore();
      const usersInfoAPI = new UsersInfoAPI({ usersInfoStore });

      const userInfoStructureA = _.defaults({firstName: 'spider'}, userInfoStructure);
      const userInfoStructureB = _.defaults({firstName: 'pig'}, userInfoStructure);
      const userInfoStructureC = _.defaults({firstName: 'web'}, userInfoStructure);

      usersInfoStore.setUsersInfo({
        uidA: userInfoStructureA,
        uidB: userInfoStructureB,
        uidC: userInfoStructureC
      });

      let autorunCounter = -1;
      const dispose = autorun(() => {
        usersInfoAPI.sortedUsersInfo;
        autorunCounter++;
      });

      usersInfoStore.updateUserInfo('uidC', { lastName: 'a' });

      expect(autorunCounter).toEqual(0);
      dispose();
    });

    it('should NOT re-compute users info array if sort order hasn\'t changed', () => {
      const usersInfoStore = new UsersInfoStore();
      const usersInfoAPI = new UsersInfoAPI({ usersInfoStore });

      const userInfoStructureA = _.defaults({firstName: 'spider'}, userInfoStructure);
      const userInfoStructureB = _.defaults({firstName: 'pig'}, userInfoStructure);
      const userInfoStructureC = _.defaults({firstName: 'web'}, userInfoStructure);

      usersInfoStore.setUsersInfo({
        uidA: userInfoStructureA,
        uidB: userInfoStructureB,
        uidC: userInfoStructureC
      });

      let autorunCounter = -1;
      const dispose = autorun(() => {
        usersInfoAPI.sortedUsersInfo;
        autorunCounter++;
      });

      usersInfoStore.updateUserInfo('uidC', { firstName: 'web1' });

      expect(autorunCounter).toEqual(0);
      dispose();
    });

  });

});
