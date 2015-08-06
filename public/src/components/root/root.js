define(['react', '../../stores/loginStore', '../../actions/accountAction', './root.rt'], function (React, loginStore, accountAction, template) {
    return React.createClass({
        mixins: [React.addons.LinkedStateMixin],
        getInitialState: function () {
            return {
                isLoggedIn: loginStore.getAll().isLoggedIn
            };
        },
        componentDidMount: function () {
            if (this.state.isLoggedIn) {
                accountAction.fetchAccountData();
            }
            loginStore.registerToChange(function (data) {
                var newState = _.pick(data, ['isLoggedIn']);
                if (!this.state.isLoggedIn && newState.isLoggedIn) {
                    accountAction.fetchAccountData();
                }
                this.setState(newState);
            }.bind(this))
        },
        render: template
    });
});
