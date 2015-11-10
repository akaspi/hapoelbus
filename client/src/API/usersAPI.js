'use strict';

var db = require('./db');
var Promise = require('bluebird');
var authAPI = require('./authAPI');

var userPathsData = [
    { dataKey: 'info', path: 'usersInfo' },
    { dataKey: 'seasonTicket', path: 'seasonTickets' },
    { dataKey: 'contactRequest', path: 'contactRequests' },
    { dataKey: 'distribution', path: 'distribution' }
];

function getAllUsers() {
    var readPromises = _.map(userPathsData, function (pathData) {
        return db.read(pathData.path);
    });

    return Promise.all(readPromises)
        .then(function (results) {
            var UIDs = _.keys(results[0]);
            return _.reduce(UIDs, function (accum, uid) {
                accum[uid] = _.reduce(userPathsData, function (accum, pathData, index) {
                    if (results[index]) {
                        accum[pathData.dataKey] = results[index][uid];
                    }
                    return accum;
                }, {});
                return accum;
            }, {})
        });
}

function getUser(uid) {
    var readPromises = _.map(userPathsData, function (pathData) {
        return db.read(pathData.path + '/' + uid);
    });

    return Promise.all(readPromises)
        .then(function (results) {
            return _.reduce(userPathsData, function (accum, pathData, index) {
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

function getUsers() {
    var uid = authAPI.getUID();
    return authAPI.isAdmin(uid).then(function (isAdmin) {
        return isAdmin ? getAllUsers() : getUser(uid);
    });
}

function updateUser(uid, user) {
    var updatePromises = _.map(userPathsData, function(pathData) {
        if (!_.isUndefined(user[pathData.dataKey])) {
            var path =  pathData.path + '/' + uid;
            var dataToUpdate = user[pathData.dataKey];
            if (_.isPlainObject(dataToUpdate)) {
                return db.update(path, dataToUpdate);
            } else if (_.isBoolean(dataToUpdate)) {
                return db.set(path, dataToUpdate);
            }
        }
    });

    return Promise.all(updatePromises);
}

module.exports = {
    getUsersData: getUsers,
    updateUser: updateUser
};
