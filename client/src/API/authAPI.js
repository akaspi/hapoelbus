'use strict';

var ref = require('./db');

var adminsRef = ref.child('admins');

function createUser(email, password, onSuccess, onError) {
    ref.createUser({
        email: email,
        password: password
    }, function (error) {
        if (error) {
            switch (error.code) {
                case "EMAIL_TAKEN":
                    onError("The new user account cannot be created because the email is already in use.");
                    break;
                case "INVALID_EMAIL":
                    onError("The specified email is not a valid email.");
                    break;
                default:
                    onError("Error creating user:", error);
            }
        } else {
            onSuccess();
        }
    });
}

function login(email, password, onSuccess, onError) {
    ref.authWithPassword({
        email: email,
        password: password
    }, function (error, authData) {
        if (error) {
            onError("Login Failed!", error);
        } else {
            onSuccess(authData.uid);
        }
    });
}

function socialLogin(provider, onSuccess, onError) {
    ref.authWithOAuthPopup(provider, function (error, authData) {
        if (error) {
            onError("Authentication Failed!", error);
        } else {
            onSuccess(authData.uid);
        }
    });

}

function isAdmin(uid, onSuccess, onError) {
    adminsRef.once('value', function(snapshot) {
        var admins = snapshot.val() || {};
        onSuccess(!!admins[uid]);
    }, onError);
}

function getUID() {
    var authData = ref.getAuth();
    return authData && authData.uid;
}

function logout() {
    ref.unauth();
}

module.exports = {
    createUser: createUser,
    login: login,
    socialLogin: socialLogin,
    getUID: getUID,
    isAdmin: isAdmin,
    logout: logout
};
