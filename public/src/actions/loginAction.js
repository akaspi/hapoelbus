define(['../dispatcher/dispatcher'], function(dispatcher) {

    function dispatchAction(actionData) {
        dispatcher.dispatch(actionData);
    }

    return {
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
        }

    };
});
