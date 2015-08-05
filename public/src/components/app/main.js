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
                var newState = _.pick(data, ['isLoggedIn', 'userData']);
                this.setState(newState);
            }.bind(this))
        },
        render: template
    });
});
