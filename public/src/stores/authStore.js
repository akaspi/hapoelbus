define(['lodash', '../dispatcher/dispatcher', '../api/auth'], function (_, dispatcher, auth) {

    var listeners = [];

    function notifyAll() {
        _.forEach(listeners, function (listener) {
            listener(storeData);
        });
    }

    var storeData = {
        isLoggedIn: false
    };

    dispatcher.register(function(actionData) {
        switch (actionData.type) {
            case 'CREATE_USER':
                handleCreateUser(actionData);
                break;
            case 'LOGIN_USER':
                handleLogin(actionData);
                break;
            case 'SOCIAL_LOGIN':
                handleSocialLogin(actionData);
                break;
            case 'LOGOUT_USER':
                handleLogOut();
                break;
        }
    });

    function notifyChange(currData) {
        _.merge(storeData, currData);
        notifyAll();
    }

    function handleCreateUser(actionData) {
        auth.createUser(actionData.username, actionData.password, function () {
            handleLogin(actionData);
        }, function() {

        })
    }

    function handleLogin(actionData) {
        auth.login(actionData.username, actionData.password, function () {
            notifyChange({ isLoggedIn: true });
        }, function() {

        })
    }

    function handleSocialLogin(actionData) {
        auth.socialLogin(actionData.provider, function () {
            notifyChange({ isLoggedIn: true });
        }, function() {

        })
    }

    function handleLogOut() {
        auth.logOut();
        notifyChange({ isLoggedIn: false });
    }

    return {
        registerToChange: function (fn) {
            listeners.push(fn);
        }
    };
});