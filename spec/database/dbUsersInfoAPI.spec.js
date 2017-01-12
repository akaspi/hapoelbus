import * as _ from 'lodash';
import * as dbUsersInfoAPI from '../../database/dbUsersInfoAPI';
import { read, update, remove, listenToChildAdded, listenToChildRemoved, listenToChildChanged } from '../../database/utils/db';

describe('usersInfoAPI', () => {

  describe('trackUsersInfo', () => {

    it('should track specific uid', () => {
      dbUsersInfoAPI.trackUsersInfo('someUID', _.noop());

      expect(listenToChildAdded).toHaveBeenCalledWith('usersInfo/someUID', jasmine.any(Function));
      expect(listenToChildRemoved).toHaveBeenCalledWith('usersInfo/someUID', jasmine.any(Function));
      expect(listenToChildChanged).toHaveBeenCalledWith('usersInfo/someUID', jasmine.any(Function));
    });

    it('should track all users info', () => {
      dbUsersInfoAPI.trackUsersInfo(null, _.noop());

      expect(listenToChildAdded).toHaveBeenCalledWith('usersInfo', jasmine.any(Function));
      expect(listenToChildRemoved).toHaveBeenCalledWith('usersInfo', jasmine.any(Function));
      expect(listenToChildChanged).toHaveBeenCalledWith('usersInfo', jasmine.any(Function));
    });

    it('should call childAdd with userInfo, uid and type:added', done => {
      const userInfo = {
        firstName: 'spider',
        lastName: 'pig'
      };

      listenToChildAdded.and.callFake((path, cb) => cb(userInfo, 'someUID'));

      dbUsersInfoAPI.trackUsersInfo(null, addUserInfoData => {
        expect(addUserInfoData).toEqual({
          type: 'added',
          userInfo: userInfo,
          uid: 'someUID'
        });
        done();
      });
    });

    it('should call childChanged with userInfo, uid and type:changed', done => {
      const userInfo = {
        firstName: 'spider',
        lastName: 'pig'
      };

      listenToChildChanged.and.callFake((path, cb) => cb(userInfo, 'someUID'));

      dbUsersInfoAPI.trackUsersInfo(null, changedUserInfoData => {
        expect(changedUserInfoData).toEqual({
          type: 'changed',
          userInfo: userInfo,
          uid: 'someUID'
        });
        done();
      });
    });

    it('should call childRemoved with userInfo, uid and type:removed', done => {
      const userInfo = {
        firstName: 'spider',
        lastName: 'pig'
      };

      listenToChildRemoved.and.callFake((path, cb) => cb(userInfo, 'someUID'));

      dbUsersInfoAPI.trackUsersInfo(null, removedUserInfoData => {
        expect(removedUserInfoData).toEqual({
          type: 'removed',
          userInfo: userInfo,
          uid: 'someUID'
        });
        done();
      });
    });

  });

  describe('fetchUsersInfo', () => {

    describe('single user info', () => {

      it('should return a single user info', done => {
        read.and.callFake(path => {
          if (path === 'usersInfo/someUID') {
            return Promise.resolve({ firstName: 'spider', lastName: 'pig' })
          }
          return null;
        });

        dbUsersInfoAPI.fetchUsersInfo('someUID').then(usersInfo => {
          expect(usersInfo).toEqual({
            someUID: { firstName: 'spider', lastName: 'pig' }
          });
          done();
        })
      });

      it('should return empty object if no user info', done => {
        read.and.returnValue(null);

        dbUsersInfoAPI.fetchUsersInfo('someUID').then(usersInfo => {
          expect(usersInfo).toEqual({});
          done();
        })
      });

    });

    describe('all users info', () => {

      it('should return a all users info', done => {
        read.and.callFake(path => {
          if (path === 'usersInfo') {
            return Promise.resolve({
              uid1: { firstName: 'spider', lastName: 'pig' },
              uid2: { firstName: 'can', lastName: 'he swing?' }
            })
          }
          return null;
        });

        dbUsersInfoAPI.fetchUsersInfo().then(usersInfo => {
          expect(usersInfo).toEqual({
            uid1: { firstName: 'spider', lastName: 'pig' },
            uid2: { firstName: 'can', lastName: 'he swing?' }
          });
          done();
        })
      });

      it('should return empty object if no users info', done => {
        read.and.returnValue(null);

        dbUsersInfoAPI.fetchUsersInfo().then(usersInfo => {
          expect(usersInfo).toEqual({});
          done();
        })
      });

    });

  });

  describe('updateUsersInfo', () => {

    it('call update with usersInfo/uid and partial user info', done => {
      update.and.returnValue(Promise.resolve());

      dbUsersInfoAPI.updateUserInfo('uid', { firstName: 'can he swing?' })
        .then(() => {
          expect(update).toHaveBeenCalledWith('usersInfo/uid', { firstName: 'can he swing?' });
          done();
        });
    });

  });

  describe('removeUsersInfo', () => {

    it('call remove with usersInfo/uid', done => {
      remove.and.returnValue(Promise.resolve());

      dbUsersInfoAPI.removeUserInfo('uid', { firstName: 'can he swing?' })
        .then(() => {
          expect(remove).toHaveBeenCalledWith('usersInfo/uid');
          done();
        });
    });

  });

});