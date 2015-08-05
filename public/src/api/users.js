define(['lodash', 'api/db'], function (_, db) {

    var users = db.child("users");

    return {
        //getAllUsers: function (cb) {
        //
        //},
        getUser: function (uid, cb) {
            users.child(uid).once('value', function(snapshot) {
                cb(snapshot.val());
            });
        },
        updateUser: function (uid, displayName, phoneNumber, maxSeats) {
            users.child(uid).update({
                //email: authData.password.email,
                displayName: displayName,
                phoneNumber: phoneNumber,
                maxSeats: maxSeats
            });
        }
    };
});
