import merge from 'lodash/merge';
import omit from 'lodash/omit';
import { toJS } from 'mobx';
import { UsersInfoStore } from '../../../mobx/stores/usersInfoStore';

describe('UsersInfoStore', () => {

  const defaultUserInfo = {
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

  it('should be empty after initialization', () => {
    const usersInfoStore = new UsersInfoStore();

    expect(usersInfoStore.usersInfo.size).toEqual(0);
  });

  describe('set users info', () => {

    it('should set the current users info', () => {
      const usersInfoStore = new UsersInfoStore();

      usersInfoStore.setUsersInfo({
        uid1: defaultUserInfo,
        uid2: defaultUserInfo
      });

      expect(usersInfoStore.usersInfo.size).toEqual(2);
      expect(toJS(usersInfoStore.usersInfo.get('uid1'))).toEqual(defaultUserInfo);
      expect(toJS(usersInfoStore.usersInfo.get('uid2'))).toEqual(defaultUserInfo);
    });

    it('should replace the current users info', () => {
      const usersInfoStore = new UsersInfoStore();

      usersInfoStore.setUsersInfo({
        uid1: defaultUserInfo
      });

      usersInfoStore.setUsersInfo({
        uid2: defaultUserInfo,
        uid3: defaultUserInfo
      });

      expect(usersInfoStore.usersInfo.size).toEqual(2);
      expect(toJS(usersInfoStore.usersInfo.get('uid2'))).toEqual(defaultUserInfo);
      expect(toJS(usersInfoStore.usersInfo.get('uid3'))).toEqual(defaultUserInfo);
    });

  });

  describe('add user info', () => {

    it('should add user info', () => {
      const usersInfoStore = new UsersInfoStore();

      usersInfoStore.addUserInfo('someUID', defaultUserInfo);

      expect(toJS(usersInfoStore.usersInfo.get('someUID'))).toEqual(defaultUserInfo);
    });

    it('should have 0 seasonTickets by default', () => {
      const usersInfoStore = new UsersInfoStore();

      usersInfoStore.addUserInfo('someUID', omit(defaultUserInfo, ['seasonTickets']));

      expect(usersInfoStore.usersInfo.get('someUID').seasonTickets).toEqual(0);
    });

  });

  describe('remove user info', () => {

    it('should remove user info', () => {
      const usersInfoStore = new UsersInfoStore();

      usersInfoStore.addUserInfo('someUID', defaultUserInfo);
      usersInfoStore.removeUserInfo('someUID');

      expect(usersInfoStore.usersInfo.size).toEqual(0);
    });

  });

  describe('update user info', () => {

    it('should update user info', () => {
      const usersInfoStore = new UsersInfoStore();

      usersInfoStore.addUserInfo('someUID', defaultUserInfo);
      usersInfoStore.updateUserInfo('someUID', { firstName: 'spider', lastName: 'pig', seasonTickets: 5 });

      expect(toJS(usersInfoStore.usersInfo)).toEqual({
        someUID: merge(defaultUserInfo, { firstName: 'spider', lastName: 'pig', seasonTickets: 5 })
      });
    });

  });

});