var _ = require('lodash');
var dispatcher = require('../dispatcher/dispatcher');
var auth = require('../api/auth');

var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    isLoggedIn: auth.isLoggedIn(),
    boxToShow: null
};

dispatcher.register(function (actionData) {
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
        case 'SHOW_LOGIN_BOX':
            handleAuthNavigation('login');
            break;
        case 'SHOW_FORGOT_PASSWORD_BOX':
            handleAuthNavigation('forgotPassword');
            break;
        case 'SHOW_CREATE_ACCOUNT_BOX':
            handleAuthNavigation('createAccount');
            break;
        case 'SHOW_RESET_PASSWORD_BOX':
            handleAuthNavigation('resetPassword');
            break;
    }

});

function notifyChange(currData) {
    _.merge(storeData, currData);
    notifyAll();
}

function handleCreateUser(actionData) {
    auth.createUser(actionData.email, actionData.password, function () {
        handleLogin(actionData);
    }, function () {

    })
}

function handleLogin(actionData) {
    auth.login(actionData.email, actionData.password, function () {
        notifyChange({isLoggedIn: true});
        // accountAction.fetchAccountData();
    }, function () {

    })
}

function handleSocialLogin(actionData) {
    auth.socialLogin(actionData.provider, function () {
        notifyChange({isLoggedIn: true});
        //    accountAction.fetchAccountData();
    }, function () {

    })
}

function handleLogOut() {
    auth.logOut();
    notifyChange({isLoggedIn: false});
}

function handleAuthNavigation(boxToShow){
    notifyChange({boxToShow: boxToShow});
}

module.exports = {
    getAll: function () {
        return storeData;
    },
    registerToChange: function (fn) {
        listeners.push(fn);
    },
    removeChangeListener: function (fn) {
        listeners = _.reject(listeners, function (listener) {
            return _.isEqual(listener, fn);
        });
    }
};