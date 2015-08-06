define(['react', '../../stores/loginStore', '../../actions/accountAction', './root.rt'], function (React, loginStore, accountAction, template) {
    return React.createClass({
        mixins: [React.addons.LinkedStateMixin],
        getInitialState: function () {
            var loginStoreData = loginStore.getAll();
            return {
                isLoggedIn: loginStoreData.isLoggedIn
            };
        },
        componentDidMount: function () {
            loginStore.registerToChange(this.onLoginStoreDataChanged);
        },
        onLoginStoreDataChanged: function(loginStoreData) {
            var newState = _.pick(loginStoreData, _.keys(this.state));
            this.setState(newState);
        },
        componentWillUnmount: function() {
            loginStore.removeChangeListener(this.onLoginStoreDataChanged);
        },
        render: template
    });
});
