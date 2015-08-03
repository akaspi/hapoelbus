define(['react', '../../stores/authStore', '../../actions/authAction', './main.rt'], function (React, authStore, authAction, template) {
    return React.createClass({
        mixins: [ React.addons.LinkedStateMixin ],
        getInitialState: function () {
            return {
                isLoggedIn: auth.isLoggedIn(),
                user: '',
                password: ''
            };
        },
        componentDidMount: function () {
            authStore.registerToChange(function (data) {
                this.setState({
                    isLoggedIn: data.isLoggedIn
                });
            }.bind(this))
        },
        registerUser: function () {
            authAction.createUser(this.state.user, this.state.password);
        },
        socialLogin: function (provider) {
            authAction.socialLogin(provider);
        },
        render: template
    });
});
