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
    loginWithFacebook: function(onSuccess, onError) {
      store.authWithOAuthPopup('facebook', onAuthActionComplete.bind(null, onSuccess, onError), { scope: 'email' });
    },
    loginWithGoogle: function(onSuccess, onError) {
      store.authWithOAuthPopup('google', onAuthActionComplete.bind(null, onSuccess, onError), { scope: 'email' });
    },
    isLoggedIn: function() {
      return !!store.getAuth();
    },
    logut: function() {
      store.unauth();
    }
  };
});
