'use strict';

var db = require('./db');
var Promise = require('bluebird');
var authAPI = require('./authAPI');

var userDataPathsData = [
    { dataKey: 'info', path: 'usersInfo' },
    { dataKey: 'seasonTicket', path: 'seasonTickets' },
    { dataKey: 'contactRequest', path: 'contactRequests' },
    { dataKey: 'booking', path: 'booking' },
    { dataKey: 'distribution', path: 'distribution' }
];

function getPath(dataKey) {
    var pathData = _.find(userDataPathsData, { dataKey: dataKey });
    return pathData && pathData.path;
}

function updateUserInfo(uid, userInfo) {
    var path = getPath('info') + '/' + uid;
    return db.update(path, userInfo);
}

function updateDistribution(uid, distribution) {
    var path = getPath('distribution') + '/' + uid;
    return db.update(path, distribution);
}

function updateSeasonTicket(uid, seasonTicket) {
    var path = getPath('seasonTicket') + '/' + uid;
    return db.update(path, seasonTicket);
}

function setContactRequest(uid, contactRequest) {
    var path = getPath('contactRequest') + '/' + uid;
    return db.set(path, contactRequest);
}

function getDataForAllUsers() {
    var readPromises = _.map(userDataPathsData, function (pathData) {
        return db.read(pathData.path);
    });

    return Promise.all(readPromises)
        .then(function (results) {
            var UIDs = _.keys(results[0]);
            window.results = results;
            return _.reduce(UIDs, function (accum, uid) {
                accum[uid] = _.reduce(userDataPathsData, function (accum, pathData, index) {
                    accum[pathData.dataKey] = results[index][uid];
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

function updateBooking(uid, gameId, bookingData) {
    var currentBookingDataPath = getPath('booking') + '/' + uid + '/' + gameId;
    var occupiedDataPath = 'occupied/' + gameId;

    return Promise.all([ db.read(currentBookingDataPath), db.read(occupiedDataPath) ])
        .spread(function(currBookingData, occupiedSeats) {
            var currSeatsOccupied = _.isNumber(occupiedSeats) ? occupiedSeats : 0;
            var numOfSeatsDiff = bookingData.numOfSeats - (_.isNumber(currBookingData.numOfSeats) ? currBookingData.numOfSeats : 0);
            var newNumOfSeats = currSeatsOccupied + numOfSeatsDiff;
            return [ db.update(currentBookingDataPath, bookingData), db.set(occupiedDataPath, newNumOfSeats) ];
        });
}

function cancelBooking(uid, gameId) {
    var currentBookingDataPath = getPath('booking') + '/' + uid + '/' + gameId;
    var occupiedDataPath = 'occupied/' + gameId;

    return Promise.all([ db.read(currentBookingDataPath), db.read(occupiedDataPath) ])
        .spread(function(currBookingData, occupiedSeats) {
            var newNumOfSeats = occupiedSeats - currBookingData.numOfSeats;
            return [ db.set(occupiedDataPath, newNumOfSeats), db.remove(currentBookingDataPath) ];
        });
}

module.exports = {
    updateUserInfo: updateUserInfo,
    updateDistribution: updateDistribution,
    updateSeasonTicket: updateSeasonTicket,
    setContactRequest: setContactRequest,
    updateBooking: updateBooking,
    cancelBooking: cancelBooking,
    getUsersData: getUsersData
};
