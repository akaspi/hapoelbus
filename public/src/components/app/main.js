define(['react', '../../stores/authStore', './main.rt'], function (React, authStore, template) {
    return React.createClass({
        mixins: [ React.addons.LinkedStateMixin ],
        getInitialState: function () {
            return {
                isLoggedIn: authStore.getAll().isLoggedIn
            };
        },
        componentDidMount: function () {
            authStore.registerToChange(function (data) {
                this.setState({
                    isLoggedIn: data.isLoggedIn
                });
            }.bind(this))
        },
        render: template
    });
});
