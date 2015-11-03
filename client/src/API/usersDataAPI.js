'use strict';

var db = require('./db');
var Promise = require('bluebird');
var authAPI = require('./authAPI');

var userDataPathsData = [
    { dataKey: 'info', path: 'usersInfo' },
    { dataKey: 'seasonTicket', path: 'seasonTickets' },
    { dataKey: 'contactRequest', path: 'contactRequests' },
    { dataKey: 'distribution', path: 'distribution' }
];

function getDataForAllUsers() {
    var readPromises = _.map(userDataPathsData, function (pathData) {
        return db.read(pathData.path);
    });

    return Promise.all(readPromises)
        .then(function (results) {
            var UIDs = _.keys(results[0]);
            return _.reduce(UIDs, function (accum, uid) {
                accum[uid] = _.reduce(userDataPathsData, function (accum, pathData, index) {
                    if (results[index]) {
                        accum[pathData.dataKey] = results[index][uid];
                    }
                    return accum;
                }, {});
                return accum;
            }, {})
        });
}

function getDataForSingleUser(uid) {
    var readPromises = _.map(userDataPathsData, function (pathData) {
        return db.read(pathData.path + '/' + uid);
    });

    return Promise.all(readPromises)
        .then(function (results) {
            return _.reduce(userDataPathsData, function (accum, pathData, index) {
                accum[pathData.dataKey] = results[index];
                return accum;
            }, {})
        })
        .then(function (userData) {
            var usersData = {};
            usersData[uid] = userData;
            return usersData;
        });
}

function getUsersData() {
    var uid = authAPI.getUID();
    return authAPI.isAdmin(uid).then(function (isAdmin) {
        return isAdmin ? getDataForAllUsers() : getDataForSingleUser(uid);
    });
}

function updateUserData(uid, userData) {
    var updatePromises = _.map(userDataPathsData, function(pathData) {
        if (userData[pathData.dataKey]) {
            var path =  pathData.path + '/' + uid;
            var dataToUpdate = userData[pathData.dataKey];
            return db.update(path, dataToUpdate);
        }
    });

    return Promise.all(updatePromises);
}

module.exports = {
    getUsersData: getUsersData,
    updateUserData: updateUserData
};
