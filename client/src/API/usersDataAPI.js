'use strict';

var ref = require('./db');
var authAPI = require('./authAPI');

var usersInfoRef = ref.child('usersInfo');
var seasonTicketsRef = ref.child('seasonTickets');
var contactRequestsRef = ref.child('contactRequests');
var bookingRef = ref.child('booking');
var occupiedRef = ref.child('occupied');
var distributionRef = ref.child('distribution');

function read(ref, onSuccess, onError) {
    ref.once('value', function(snapshot) {
        onSuccess(snapshot.val() || {});
    }, function() {
        onError();
    });
}

function updateRef(dbItem, data, onSuccess, onError) {
    var ref = dbItem.ref;
    var properties = dbItem.properties;

    var dataToUpdate = !!properties ? _.pick(data, properties) : data;
    ref.update(dataToUpdate, function onComplete(error) {
        if (error) {
            return onError();
        }
        onSuccess();
    });
}

function getDataForAllUsers(onSuccess, onError) {
    read(usersInfoRef, function(usersInfo) {
        read(seasonTicketsRef, function(seasonTickets) {
            read(contactRequestsRef, function(contactRequests) {
                read(bookingRef, function(booking) {
                    read(distributionRef, function(distributions) {
                        var uidArr = _.keys(usersInfo);
                        var dataForAllUsers = _.reduce(uidArr, function(accum, uid) {
                            accum[uid] = { info: usersInfo[uid], seasonTicket: seasonTickets[uid], contactRequest: contactRequests[uid], booking: booking[uid], distribution: distributions[uid] };
                            return accum;
                        }, {});
                        onSuccess(dataForAllUsers);
                    }, onError);
                });
            }, onError);
        }, onError);
    }, onError);
}

function getDataForSingleUser(uid, onSuccess, onError) {
    read(usersInfoRef.child(uid), function(userInfo) {
        read(seasonTicketsRef.child(uid), function(seasonTicket) {
            read(contactRequestsRef.child(uid), function(contactRequest) {
                read(bookingRef.child(uid), function(booking) {
                    read(distributionRef.child(uid), function(distribution) {
                        var singleUserData = {};
                        singleUserData[uid] = { info: userInfo, seasonTicket: seasonTicket, contactRequest: contactRequest, booking: booking, distribution: distribution };
                        onSuccess(singleUserData);
                    });
                });
            }, onError);
        }, onError);
    }, onError);

}

function updateUserInfo(uid, userInfo, onSuccess, onError) {
    usersInfoRef.child(uid).update(userInfo, function(err) {
        if (err) {
            return onError(err);
        }
        onSuccess();
    });
}

function updateDistribution(uid, distribution, onSuccess, onError) {
    usersInfoRef.child(uid).update(distribution, function(err) {
        if (err) {
            return onError(err);
        }
        onSuccess();
    });
}

function updateSeasonTicket(uid, seasonTicket, onSuccess, onError) {
    seasonTicketsRef.child(uid).update(seasonTicket, function(err) {
        if (err) {
            return onError(err);
        }
        onSuccess();
    });
}

function setContactRequest(uid, contactRequest, onSuccess, onError) {
    contactRequestsRef.child(uid).set(contactRequest, function(err) {
        if (err) {
            return onError(err);
        }
        onSuccess();
    });
}

function getUsersData(onSuccess, onError) {
    var uid = authAPI.getUID();
    if (!uid) {
        return onSuccess({});
    }
    authAPI.isAdmin(uid, function(isAdmin) {
        if (isAdmin) {
            getDataForAllUsers(onSuccess, onError);
        } else {
            getDataForSingleUser(uid, onSuccess, onError);
        }
    });
}

function updateBooking(uid, gameId, bookingData, onSuccess, onError) {
    bookingRef.child(uid).child(gameId).once('value', function (snapshot) {
        var bookingDataBeforeUpdate = snapshot.val() || {};
        bookingRef.child(uid).child(gameId).update(bookingData, function (error) {
            if (error) {
                return onError();
            }
            var occupiedGameRef = occupiedRef.child(gameId);
            occupiedGameRef.once('value', function (snapshot) {
                var currSeatsOccupied = snapshot.val() || 0;
                var updatedNumOfSeats = bookingData.numOfSeats || 0;
                var oldNumOfSeats = bookingDataBeforeUpdate.numOfSeats || 0;
                occupiedGameRef.set(currSeatsOccupied + (updatedNumOfSeats - oldNumOfSeats), function (error) {
                    if (error) {
                        return onError();
                    }
                    onSuccess();
                });
            });
        });
    });
}

function cancelBooking(uid, gameId, onSuccess, onError) {
    bookingRef.child(uid).child(gameId).once('value', function (snapshot) {
        var bookingData = snapshot.val();
        if (bookingData) {
            bookingRef.child(uid).remove(function () {
                var occupiedGameRef = occupiedRef.child(gameId);
                occupiedGameRef.once('value', function (snapshot) {
                    var currSeatsOccupied = snapshot.val();
                    var numOfSeats = bookingData.numOfSeats || 0;
                    var newOccupiedSeats = currSeatsOccupied - numOfSeats;
                    if (newOccupiedSeats === 0) {
                        occupiedGameRef.remove(function () {
                            onSuccess();
                        })
                    } else {
                        occupiedGameRef.set(newOccupiedSeats, function (error) {
                            if (error) {
                                return onError();
                            }
                            onSuccess()
                        });
                    }
                });
            });
        } else {
            onError();
        }
    });
}

function init() {}

module.exports = {
    init: init,
    updateUserInfo: updateUserInfo,
    updateDistribution: updateDistribution,
    updateSeasonTicket: updateSeasonTicket,
    setContactRequest: setContactRequest,
    updateBooking: updateBooking,
    cancelBooking: cancelBooking,
    getUsersData: getUsersData
};
