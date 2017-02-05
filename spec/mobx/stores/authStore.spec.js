import AuthStore from '../../../mobx/stores/authStore';

describe('AuthStore', () => {

  describe('setAuthData', function() {

    it('should be auth data', function() {
      const authStore = new AuthStore();

      authStore.setAuthData({ uid: 1234 });

      expect(authStore.authData).toEqual({ uid: 1234 });
    });

    it('should be null', function() {
      const authStore = new AuthStore();

      authStore.setAuthData(null);

      expect(authStore.authData).toBeNull();
    });

  });

});
