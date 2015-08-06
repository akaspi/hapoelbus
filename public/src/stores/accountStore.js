define(['lodash', '../dispatcher/dispatcher', '../api/accounts', '../api/auth'], function (_, dispatcher, accounts, auth) {

    var listeners = [];

    function notifyAll() {
        _.forEach(listeners, function (listener) {
            listener(storeData);
        });
    }

    var storeData = {
        isFetchingData: false,
        accountData: null
    };

    dispatcher.register(function (actionData) {
        switch (actionData.type) {
            case 'FETCH_ACCOUNT_DATA':
                handleFetchAccountData();
                break;
            case 'CREATE_ACCOUNT':
                handleCreateAccount(actionData);
                break;
            case 'UPDATE_ACCOUNT':
                handleUpdateAccount(actionData);
                break;
            case 'USER_LOGOUT':
                notifyChange({accountData: null});
                break;
        }
    });

    function notifyChange(currData) {
        _.merge(storeData, currData);
        notifyAll();
    }

    function handleFetchAccountData() {
        notifyChange({isFetchingData: true});
        accounts.getAccountData(auth.getUserId(), function (accountData) {
            notifyChange({isFetchingData: false, accountData: accountData});
        });
    }

    function handleCreateAccount(actionData) {
        var accountData = actionData.accountData;
        accounts.createAccount(auth.getUserId(), accountData, function () {
            notifyChange({accountData: accountData});
        });
    }

    function handleUpdateAccount(actionData) {

    }

    return {
        getAll: function () {
            return storeData;
        },
        registerToChange: function (fn) {
            listeners.push(fn);
        },
        removeChangeListener: function(fn) {
            listeners = _.reject(listeners, function(listener) {
                return _.isEqual(listener, fn);
            });
        }
    };
});
