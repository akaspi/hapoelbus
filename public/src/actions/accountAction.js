define(['../dispatcher/dispatcher'], function (dispatcher) {

    function dispatchAction(actionData) {
        dispatcher.dispatch(actionData);
    }

    return {
        createUser: function (email, password) {
            dispatchAction({
                type: 'CREATE_USER',
                email: email,
                password: password
            });
        },
        createAccount: function (accountData) {
            dispatchAction({
                type: 'CREATE_ACCOUNT',
                accountData: accountData
            });
        },
        logOut: function() {
            dispatchAction({
                type: 'LOGOUT_USER'
            });
        },
        fetchAccountData: function (){
            dispatchAction({
               type: 'FETCH_ACCOUNT_DATA'
            });
        }
    };
});
