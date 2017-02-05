import { isComputed } from 'mobx';
import AuthDataAPI from '../../api/authDataAPI';
import AuthStore from '../../mobx/stores/authStore';

describe('authDataAPI', () => {

  it('isLoggedIn should be a computed value', () => {
    const authStore = new AuthStore();
    const authDataAPI = new AuthDataAPI({ authStore });

    expect(isComputed(authDataAPI, 'isLoggedIn')).toBe(true);
  });

  it('isAdmin should be a computed value', () => {
    const authStore = new AuthStore();
    const authDataAPI = new AuthDataAPI({ authStore });

    expect(isComputed(authDataAPI, 'isAdmin')).toBe(true);
  });

  describe('initialization', () => {

    it('should be logged out', function() {
      const authStore = new AuthStore();
      const authDataAPI = new AuthDataAPI({ authStore });

      expect(authDataAPI.isLoggedIn).toBe(false);
    });

    it('should not be admin', function() {
      const authStore = new AuthStore();
      const authDataAPI = new AuthDataAPI({ authStore });

      expect(authDataAPI.isAdmin).toBe(false);
    });

  });

  describe('isLoggedIn', () => {

    it('should be logged in', function() {
      const authStore = new AuthStore();
      const authDataAPI = new AuthDataAPI({ authStore });

      authStore.setAuthData({ uid: '1234'});

      expect(authDataAPI.isLoggedIn).toBe(true);
    });

    it('should be logged out', function() {
      const authStore = new AuthStore();
      const authDataAPI = new AuthDataAPI({ authStore });

      authStore.setAuthData(null);

      expect(authDataAPI.isLoggedIn).toBe(false);
    });

  });

  describe('isAdmin', () => {

    it('should should be admin', function() {
      const authStore = new AuthStore();
      const authDataAPI = new AuthDataAPI({ authStore });

      authStore.setAuthData({ isAdmin: true });

      expect(authDataAPI.isAdmin).toBe(true);
    });

    it('should not be admin', function() {
      const authStore = new AuthStore();
      const authDataAPI = new AuthDataAPI({ authStore });

      authStore.setAuthData({ isAdmin: false });

      expect(authDataAPI.isAdmin).toBe(false);
    });

  });

});
