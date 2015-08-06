define(['lodash', '../dispatcher/dispatcher', '../api/accounts', '../api/auth'], function (_, dispatcher, accounts, auth) {

    var listeners = [];

    function notifyAll() {
        _.forEach(listeners, function (listener) {
            listener(storeData);
        });
    }

    var storeData = {
        isFetchingInitialData: false,
        accountData: null
    };

    function fetchAccountData() {
        notifyChange({isFetchingInitialData: true});
        accounts.getAccountData(auth.getUserId(), function (accountData) {
            if (accountData) {
                notifyChange({isFetchingInitialData: false, accountData: accountData});
            }
        });
    };

    dispatcher.register(function (actionData) {
        switch (actionData.type) {
            case 'CREATE_ACCOUNT':
                handleCreateAccount(actionData);
                break;
            case 'FETCH_ACCOUNT_DATA':
                fetchAccountData();
                break;
            case 'USER_LOGOUT':
                notifyChange({isFetchingInitialData: false, accountData: null});
                break;
        }
    });

    function notifyChange(currData) {
        _.merge(storeData, currData);
        notifyAll();
    }

    function handleCreateAccount(actionData) {
        var accountData = actionData.accountData;
        accounts.createAccount(auth.getUserId(), accountData, function () {
            notifyChange({accountData: accountData});
        });
    }

    return {
        getAll: function () {
            return storeData;
        },
        registerToChange: function (fn) {
            listeners.push(fn);
        }
    };
});
