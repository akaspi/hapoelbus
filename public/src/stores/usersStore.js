define(['lodash', '../dispatcher/dispatcher', '../api/users', '../api/auth'], function (_, dispatcher, users, auth) {

    var listeners = [];

    function notifyAll() {
        _.forEach(listeners, function (listener) {
            listener(storeData);
        });
    }

    var storeData = {
        userData: users.getUser(auth.getUserId())
    };

    dispatcher.register(function(actionData) {
        switch (actionData.type) {
            case 'UPDATE_USER_DATA':
                handleUpdateUserData(actionData);
                break;
        }
    });

    function notifyChange(currData) {
        _.merge(storeData, currData);
        notifyAll();
    }

    function handleUpdateUserData(actionData) {
        notifyChange();
    }

    return {
        getAll: function() {
          return storeData;
        },
        registerToChange: function (fn) {
            listeners.push(fn);
        }
    };
});
