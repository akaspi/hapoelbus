import { AuthStore } from '../../../mobx/stores/authStore';

describe('AuthStore', () => {



  describe('setting auth data', function() {

    it('should be logged in', function() {
      const authStore = new AuthStore();

      authStore.setAuthData({ uid: 1234 });

      expect(authStore.isLoggedIn).toBe(true);
    });

    it('should should be admin', function() {
      const authStore = new AuthStore();

      authStore.setAuthData({ isAdmin: true });

      expect(authStore.isAdmin).toBe(true);
    });

    it('should not be admin', function() {
      const authStore = new AuthStore();

      authStore.setAuthData({ isAdmin: false });

      expect(authStore.isAdmin).toBe(false);
    });

  });

  describe('setting auth data as null', function() {

    it('should be logged out', function() {
      const authStore = new AuthStore();

      authStore.setAuthData(null);

      expect(authStore.isLoggedIn).toBe(false);
    });

    it('should not be admin', function() {
      const authStore = new AuthStore();

      authStore.setAuthData(null);

      expect(authStore.isAdmin).toBe(false);
    });

  });

});
