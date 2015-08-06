define(['../dispatcher/dispatcher'], function (dispatcher) {

    function dispatchAction(actionData) {
        dispatcher.dispatch(actionData);
    }

    return {
        fetchAccountData: function (){
            dispatchAction({
                type: 'FETCH_ACCOUNT_DATA'
            });
        },
        createAccount: function (accountData) {
            dispatchAction({
                type: 'CREATE_ACCOUNT',
                accountData: accountData
            });
        }
    };
});
