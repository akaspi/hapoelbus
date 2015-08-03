define(['../dispatcher/dispatcher'], function(dispatcher) {

    function dispatchAction(actionData) {
        dispatcher.dispatch(actionData);
    }

    return {
        createUser: function(username, password) {
            dispatchAction({
                type: 'CREATE_USER',
                username: username,
                password: password
            });
        },
      login: function(username, password) {
          dispatchAction({
              type: 'LOGIN_USER',
              username: username,
              password: password
          });
      },
        socialLogin: function(provider) {
            dispatchAction({
                type: 'SOCIAL_LOGIN',
                provider: provider
            });
        },
        logOut: function() {
            dispatchAction({
                type: 'LOGOUT_USER'
            });
        }
    };
});
