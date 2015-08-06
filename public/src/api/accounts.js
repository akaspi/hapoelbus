define(['lodash', 'api/db'], function (_, db) {

    var accountsRef = db.child("accounts");

    return {
        getAccountData: function (uid, cb) {
            accountsRef.child(uid).once('value', function(snapshot) {
                cb(snapshot.val());
            });
        },
        createAccount: function(uid, accountData, cb) {
            accountsRef.child(uid).set(accountData, function(error) {
                cb()
            });
        },
        updateUser: function (uid, dataToUpdate) {
            accountsRef.child(uid).update(dataToUpdate);
        }
    };
});
