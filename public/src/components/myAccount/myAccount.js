define(['react', '../../actions/accountAction', '../../stores/accountStore', './myAccount.rt'], function (React, accountAction, accountStore, template) {

    return React.createClass({
        getInitialState: function () {
            return {
                isFetchingInitialData: false,
                accountData: accountStore.getAll().accountData
            }
        },
        componentDidMount: function () {
            accountStore.registerToChange(function (data) {
                if (this.isMounted()) {
                    var newState = _.pick(data, ['isFetchingInitialData', 'accountData']);
                    this.setState(newState);
                }
            }.bind(this))
        },
        hasAccount: function () {
            return !!this.state.accountData;
        },
        logout: function () {
            accountAction.logOut();
        },
        render: template
    });
});
