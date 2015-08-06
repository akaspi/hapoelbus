define(['react', '../../actions/accountAction', '../../actions/loginAction', '../../stores/accountStore', './myAccount.rt'], function (React, accountAction, loginAction, accountStore, template) {

    return React.createClass({
        getInitialState: function () {
            return {
                isFetchingData: true,
                accountData: null
            }
        },
        componentDidMount: function () {
            accountStore.registerToChange(this.handleAccountStoreChange);
            accountAction.fetchAccountData();
        },
        handleAccountStoreChange: function(accountStoreData) {
            var newState = _.pick(accountStoreData, _.keys(this.state));
            this.setState(newState);
        },
        hasAccount: function () {
            return !!this.state.accountData;
        },
        logout: function () {
            loginAction.logOut();
        },
        componentWillUnmount: function() {
            accountStore.removeChangeListener(this.handleAccountStoreChange);
        },
        render: template
    });
});
