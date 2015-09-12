var _ = require('lodash');
var dispatcher = require('../dispatcher/dispatcher');
var auth = require('../DAL/auth');

var usersData = require('../DAL/usersData');
var payments = require('../DAL/payments');
var auth = require('../DAL/auth');

var userDataConstants = require('../constants/userDataConstants');
var authConstants = require('../constants/authConstants');

var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    isFetchingUserData: false,
    isAdmin: false,
    userData: null,
    payments: null
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case userDataConstants.ACTIONS.FETCH_USER_DATA:
            handleFetchUserData();
            break;
        case userDataConstants.ACTIONS.UPDATE_USER_DATA:
            handleUpdateUserData(actionData);
            break;
        case authConstants.ACTIONS.LOGOUT:
            handleLogOut();
            break;
    }
});

function notifyChange(currData) {
    _.merge(storeData, currData);
    notifyAll();
}

function handleFetchUserData() {
    notifyChange({isFetchingUserData: true});
    var uid = auth.getUserId();
    usersData.getUserData(uid, function (userData) {
        payments.getByUID(uid, function(paymentsData) {
            auth.isAdmin(function(isAdmin) {
                notifyChange({isFetchingUserData: false, userData: userData, payments: paymentsData, isAdmin: isAdmin});
            });
        }, function() {

        });

    }, function() {

    });
}

function handleUpdateUserData(actionData){
    var userData = actionData.userData;
    var uid = actionData.uid || auth.getUserId();
    usersData.updateUserData(uid, userData, function () {
        notifyChange({userData: userData});
    });
}

function handleLogOut() {
    notifyChange({userData: null});
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
