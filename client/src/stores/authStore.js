var _ = require('lodash');
var dispatcher = require('../dispatcher/dispatcher');
var auth = require('../DAL/auth');
var authConstants = require('../constants/authConstants');
var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    isLoggedIn: false,
    isAdmin: false,
    errorMsg: ''
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case authConstants.ACTIONS.FETCH_LOGIN_STATE:
            handleFetchLoginState(actionData);
            break;
        case authConstants.ACTIONS.CREATE_USER:
            handleCreateUser(actionData);
            break;
        case authConstants.ACTIONS.LOGIN:
            handleLogin(actionData);
            break;
        case authConstants.ACTIONS.SOCIAL_LOGIN:
            handleSocialLogin(actionData);
            break;
        case authConstants.ACTIONS.LOGOUT:
            handleLogOut();
            break;
        //case 'RESET_PASSWORD_REQUEST':
        //    handleResetPasswordRequest(actionData);
        //    break;
        //case 'CHANGE_PASSWORD':
        //    handleChangePassword(actionData);
        //    break;
    }
});

function notifyChange(currData) {
    _.merge(storeData, currData);
    notifyAll();
}

function handleFetchLoginState() {
    var isLoggedIn = auth.isLoggedIn();
    auth.isAdmin(function(isAdmin) {
        notifyChange({isLoggedIn: isLoggedIn, isAdmin: isAdmin});
    });
}

function handleCreateUser(actionData) {
    auth.createUser(actionData.email, actionData.password, function () {
        handleLogin(actionData);
    }, function (errorCode) {
        switch(errorCode) {
            case authConstants.ERROR_CODE.EMAIL_TAKEN:
                notifyChange({errorMsg: authConstants.ERROR_MSG.EMAIL_TAKEN});
                break;
            default:
                notifyChange({errorMsg: authConstants.ERROR_MSG.GENERAL});
        }
    })
}

function handleLogin(actionData) {
    auth.login(actionData.email, actionData.password, function () {
        auth.isAdmin(function (isAdmin) {
            notifyChange({isLoggedIn: true, isAdmin: isAdmin});
        });
    }, function () {
        notifyChange({errorMsg: authConstants.ERROR_MSG.GENERAL});
    })
}

function handleSocialLogin(actionData) {
    auth.socialLogin(actionData.provider, function () {
        auth.isAdmin(function (isAdmin) {
            notifyChange({isLoggedIn: true, isAdmin: isAdmin});
        });
    }, function () {
        notifyChange({errorMsg: authConstants.ERROR_MSG.GENERAL});
    })
}

function handleLogOut() {
    auth.logOut();
    notifyChange({isLoggedIn: false, isAdmin: false});
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
