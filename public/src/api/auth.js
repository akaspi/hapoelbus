define(['lodash', 'api/store'], function(_, store) {

  var paths = {
    admins: 'admins'
  }

  function onAuthActionComplete(onSuccess, onError, errorData, authData) {
      if (errorData) {
        onError();
      } else {
        onSuccess();
      }
  }

  return {
    createUser: function(email, password, onSuccess, onError) {
      store.createUser({
        email: email,
        password: password
      }, onAuthActionComplete.bind(null, onSuccess, onError));
    },
    login: function(email, password, onSuccess, onError) {
      store.authWithPassword({
        email: email,
        password: password
      }, onAuthActionComplete.bind(null, onSuccess, onError));
    },
    socialLogin: function(provider, onSuccess, onError) {
      store.authWithOAuthPopup(provider, onAuthActionComplete.bind(null, onSuccess, onError), { scope: 'email' });
    },
    isLoggedIn: function() {
      return !!store.getAuth();
    },
    logOut: function() {
      store.unauth();
    },
    resetPasswordRequest: function(email, onSuccess, onError) {
      store.resetPassword(email, onAuthActionComplete.bind(null, onSuccess, onError));
    },
    changePassword: function(email, oldOrTempPassword, newPassword, onSuccess, onError) {
      store.changePassword({
        email: email,
        oldPassword: oldOrTempPassword,
        newPassword: newPassword
      }, onAuthActionComplete.bind(null, onSuccess, onError));
    }
  };
});
